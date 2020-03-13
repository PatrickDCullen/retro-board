import React, {useState} from 'react';
import './App.css';

function App() {

  const [cardArray, setCardArray] = useState([0,1,2]);

  const addCard = () => {
      cardArray.push(cardArray.length);
      setCardArray(cardArray);
      console.log(cardArray);
    };

  const counter = [0,1,2];

  return (
    <div className="App">
      <h1>Retro Board</h1>
      <div className="RetroApp row">

        {/* Retro category */}
        <div className="RetroCategory RetroCategory-1">
          <h2>Went Well</h2>
          {/* Add a new card button */}
          <button 
            type="button" 
            className="ButtonAdd button button-default" 
            aria-label="Add new card"
            title="Add new card"
            onClick={() => addCard()}
            >+</button>

          {/* A retro card (retrospective item) */}
          <div className="RetroCard" aria-label="Retro card">
            {/* User input */}
            {cardArray.map((item, idx) => {
              return (
                <textarea 
                  key={`card-${idx}`}
                  className="textbox" 
                  placeholder="Enter text here" 
                  aria-label="Enter text here"
                  rows={item}
                  defaultValue="Here is an example card">
                </textarea>
                );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
