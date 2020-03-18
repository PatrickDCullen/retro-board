import React, {Fragment, useState} from 'react';
import './App.css';
import angleLeft from './angleLeft.svg';
import angleRight from './angleRight.svg';
import timesCircle from './timesCircle.svg';
import thumbsUp from './thumbsUp.svg';
import thumbsDown from './thumbsDown.svg';

function App() {

  const [cardArray, setCardArray] = useState([]);
  // const [cards, setCards] = useState({"text": "Enter text"});
  const categories = ["wentWell", "toImprove", "actionItems"];

  const handleRightArrow = (card, index) => {
    const cardArrayCopy = [...cardArray];
    if (categories.indexOf(card["category"]) === categories.length - 1) {
      cardArrayCopy[index]["category"] = categories[0];
      setCardArray(cardArrayCopy);
    } else {
      cardArrayCopy[index]["category"] = categories[categories.indexOf(card["category"]) + 1];
      setCardArray(cardArrayCopy);
    }
  }

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
            title="Add new card" onClick={() => {setCardArray(cardArray.concat({"category" : "wentWell", "text":"Enter text", "likes" : 0, "dislikes" : 0}));
              // console.log(cardArray[0]["text"]);
              }}>+</button>

          {/* A retro card (retrospective item) */}
          <div className="RetroCard" aria-label="Retro card">
            {/* User input */}
            {//cardArray.filter(card => card["category"] === "wentWell")
            cardArray.map((card,index) => {
              if (card["category"] === "wentWell") {
                return (
                <Fragment key={`card1-${index}`}>
                  <textarea className="textbox" placeholder="Enter text here" aria-label="Enter text here"
                    rows="1" value={cardArray[index]["text"]} onChange={e => {
                      
                      const cardArrayCopy = [...cardArray];
                      cardArrayCopy[index]["text"] = e.target.value;
                      setCardArray(cardArrayCopy);
                    }}></textarea>

                  <div className="button-group" >
                    <button type="button" className="button button-left" title="Move left">
                      <img src={angleLeft} alt="Move left" width="12" height="12"/>
                    </button>
                    <button type="button" className="button button-delete" title="Delete" onClick={() => {
                      const filteredArray = cardArray.filter((card, currentIndex) => currentIndex !== index);
                      setCardArray(filteredArray);
                    }}>
                      <img src={timesCircle} alt="Delete" width="12" height="12"/>
                    </button>
                    <div>
                      <button type="button" className="button button-left" title="Like" onClick={() => {
                        const cardArrayCopy = [...cardArray];
                        // console.log(cardArrayCopy[index]["likes"]);
                        cardArrayCopy[index]["likes"]++;
                        setCardArray(cardArrayCopy);
                      }}>
                        <img src={thumbsUp} alt="Like" width="12" height="12"/> {card["likes"]}
                      </button>
                      <button type="button" className="button button-left" title="Dislike" onClick={() => {
                        const cardArrayCopy = [...cardArray];
                        // console.log(cardArrayCopy[index]["likes"]);
                        cardArrayCopy[index]["dislikes"]++;
                        setCardArray(cardArrayCopy);
                      }}>
                        <img src={thumbsDown} alt="Dislike" width="12" height="12"/> {card["dislikes"]}
                      </button>
                      <button type="button" className="button button-right" title="Move right" onClick={() => handleRightArrow(card, index)}>
                        <img src={angleRight} alt="Move right" width="12" height="12"/>
                      </button>
                    </div>
                  </div>
                </Fragment>
            );
            }
            })}
          </div>
        </div>

        {/* Retro category */}
        <div className="RetroCategory RetroCategory-2">
          <h2>To Improve</h2>
          <button type="button" className="ButtonAdd button button-default" aria-label="Add new card"
            title="Add new card" onClick={() => {setCardArray(cardArray.concat({"category" : "toImprove", "text":"Enter text", "likes" : 0, "dislikes" : 0}));
              // console.log(cardArray[0]["text"]);
              }}>+</button>

          {/* A retro card (retrospective item) */}
          <div className="RetroCard" aria-label="Retro card">
            {/* User input */}
            {//cardArray.filter(card => card["category"] === "toImprove").
            cardArray.map((card,index) => {
              if (card["category"] === "toImprove") {
              return (
                <Fragment key={`card2-${index}`}>
                  <textarea className="textbox" placeholder="Enter text here" aria-label="Enter text here"
                    rows="1" value={cardArray[index]["text"]} onChange={e => {
                      const cardArrayCopy = [...cardArray];
                      cardArrayCopy[index]["text"] = e.target.value;
                      setCardArray(cardArrayCopy);
                    }}></textarea>

                  <div className="button-group" >
                    <button type="button" className="button button-left" title="Move left">
                      <img src={angleLeft} alt="Move left" width="12" height="12"/>
                    </button>
                    <button type="button" className="button button-delete" title="Delete" onClick={() => {
                      const filteredArray = cardArray.filter((card, currentIndex) => currentIndex !== index);
                      setCardArray(filteredArray);
                    }}>
                      <img src={timesCircle} alt="Delete" width="12" height="12"/>
                    </button>
                    <div>
                      <button type="button" className="button button-left" title="Like" onClick={() => {
                        const cardArrayCopy = [...cardArray];
                        // console.log(cardArrayCopy[index]["likes"]);
                        cardArrayCopy[index]["likes"]++;
                        setCardArray(cardArrayCopy);
                      }}>
                        <img src={thumbsUp} alt="Like" width="12" height="12"/> {card["likes"]}
                      </button>
                      <button type="button" className="button button-left" title="Dislike" onClick={() => {
                        const cardArrayCopy = [...cardArray];
                        // console.log(cardArrayCopy[index]["likes"]);
                        cardArrayCopy[index]["dislikes"]++;
                        setCardArray(cardArrayCopy);
                      }}>
                        <img src={thumbsDown} alt="Dislike" width="12" height="12"/> {card["dislikes"]}
                      </button>
                      <button type="button" className="button button-right" title="Move right" onClick={() => handleRightArrow(card, index)}>
                        <img src={angleRight} alt="Move right" width="12" height="12"/>
                      </button>
                    </div>
                  </div>
                </Fragment>
            );
            }
            })}
          </div>
        </div>

        {/* Retro category */}
        <div className="RetroCategory RetroCategory-3">
          <h2>Action Items</h2>
          <button type="button" className="ButtonAdd button button-default" aria-label="Add new card"
            title="Add new card" onClick={() => {setCardArray(cardArray.concat({"category" : "actionItems", "text":"Enter text", "likes" : 0, "dislikes" : 0}));
              // console.log(cardArray[0]["text"]);
              }}>+</button>

          {/* A retro card (retrospective item) */}
          <div className="RetroCard" aria-label="Retro card">
            {/* User input */}
            {cardArray.map((card,index) => {
              if (card["category"] === "actionItems") {
              return (
                <Fragment key={`card2-${index}`}>
                  <textarea className="textbox" placeholder="Enter text here" aria-label="Enter text here"
                    rows="1" value={cardArray[index]["text"]} onChange={e => {
                      const cardArrayCopy = [...cardArray];
                      cardArrayCopy[index]["text"] = e.target.value;
                      setCardArray(cardArrayCopy);
                    }}></textarea>

                  <div className="button-group" >
                    <button type="button" className="button button-left" title="Move left">
                      <img src={angleLeft} alt="Move left" width="12" height="12"/>
                    </button>
                    <button type="button" className="button button-delete" title="Delete" onClick={() => {
                      const filteredArray = cardArray.filter((card, currentIndex) => currentIndex !== index);
                      setCardArray(filteredArray);
                    }}>
                      <img src={timesCircle} alt="Delete" width="12" height="12"/>
                    </button>
                    <div>
                      <button type="button" className="button button-left" title="Like" onClick={() => {
                        const cardArrayCopy = [...cardArray];
                        // console.log(cardArrayCopy[index]["likes"]);
                        cardArrayCopy[index]["likes"]++;
                        setCardArray(cardArrayCopy);
                      }}>
                        <img src={thumbsUp} alt="Like" width="12" height="12"/> {card["likes"]}
                      </button>
                      <button type="button" className="button button-left" title="Dislike" onClick={() => {
                        const cardArrayCopy = [...cardArray];
                        // console.log(cardArrayCopy[index]["likes"]);
                        cardArrayCopy[index]["dislikes"]++;
                        setCardArray(cardArrayCopy);
                      }}>
                        <img src={thumbsDown} alt="Dislike" width="12" height="12"/> {card["dislikes"]}
                      </button>
                      <button type="button" className="button button-right" title="Move right" onClick={() => handleRightArrow(card, index)}>
                        <img src={angleRight} alt="Move right" width="12" height="12"/>
                      </button>
                    </div>
                  </div>
                </Fragment>
            );
            }
            })}
        </div>
      </div>
      </div>
    </main>
    </div>
  );
}

export default App;
