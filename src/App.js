import React, {Fragment, useState} from 'react';
import './App.css';

function App() {

  const [cardArray, setCardArray] = useState(["Enter text"]);

  return (
    <div className="App">
      {/* The class "row" is for the layout changer */}
    <main className="content row">
      <h1>Retro Board</h1>
      {/* Layout changer */}
      <div>Layout &nbsp;<button className="button button-default">Column</button></div>

      {/* The className "row" is for the layout changer */}
      <div className="RetroApp row">

        {/* Retro category */}
        <div className="RetroCategory RetroCategory-1">
          <h2>Went Well</h2>
          {/* Add a new card button */}
          <button type="button" className="ButtonAdd button button-default" aria-label="Add new card"
            title="Add new card" onClick={() => setCardArray(cardArray.concat("Enter text"))}>+</button>

          {/* A retro card (retrospective item) */}
          <div className="RetroCard" aria-label="Retro card">
            {/* User input */}
            {cardArray.map((card,index) => {
              return (
                <Fragment key={`card-${index}`}>
                  <textarea className="textbox" placeholder="Enter text here" aria-label="Enter text here"
                    rows="1" value={card} onChange={e => {
                      const cardArrayCopy = [...cardArray];
                      cardArrayCopy[index] = e.target.value;
                      setCardArray(cardArrayCopy);
                    }}></textarea>

                  <div className="button-group" >
                    <button type="button" className="button button-left" title="Move left">
                      <img src="angleLeft.svg" alt="Move left" width="12" height="12"/>
                    </button>
                    <button type="button" className="button button-delete" title="Delete">
                      <img src="timesCircle.svg" alt="Delete" width="12" height="12"/>
                    </button>
                    <div>
                      <button type="button" className="button button-left" title="Like">
                        <img src="thumbsUp.svg" alt="Like" width="12" height="12"/> 5
                      </button>
                      <button type="button" className="button button-left" title="Dislike">
                        <img src="thumbsDown.svg" alt="Dislike" width="12" height="12"/> 0
                      </button>
                      <button type="button" className="button button-right" title="Move right">
                        <img src="angleRight.svg" alt="Move right" width="12" height="12"/>
                      </button>
                    </div>
                  </div>
                </Fragment>
            );
            })}
          </div>
        </div>

        {/* Retro category */}
        <div className="RetroCategory RetroCategory-2">
          <h2>To Improve</h2>
          <button type="button" className="ButtonAdd button button-default" aria-label="Add to new card"
            title="Add to new card">+</button>
        </div>

        {/* Retro category */}
        <div className="RetroCategory RetroCategory-3">
          <h2>Action Items</h2>
          <button type="button" className="ButtonAdd button button-default" aria-label="Add to new card"
            title="Add to new card">+</button>
        </div>
      </div>
    </main>
    </div>
  );
}

export default App;
