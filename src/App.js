import React, {useState} from 'react';
import './App.css';

function App() {

  const [cardArray, setCardArray] = useState([0,1,2]);

  // const addCard = () => {
      // cardArray.push(0);
      // console.log([...cardArray, cardArray.length]);
      // console.log(cardArray);
      // setCardArray([...cardArray, cardArray.length]);
      // console.log(cardArray);
      // setCardArray(2);
    // };

  // const counter = [0,1,2];

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
            onClick={() => setCardArray([...cardArray, cardArray.length])}
            >+</button>

          {/* A retro card (retrospective item) */}
          <div className="RetroCard" aria-label="Retro card">
            {/* User input */}
            {cardArray.map((card, index) => {
              return <p>test{card}</p>
            })}
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
