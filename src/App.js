import React, { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";

function App() {
  const [cardArray, setCardArray] = useState([]);
  const categories = ["wentWell", "toImprove", "actionItems"];

  const handleRightArrow = (card, index) => {
    const cardArrayCopy = [...cardArray];
    if (categories.indexOf(card["category"]) === categories.length - 1) {
      cardArrayCopy[index]["category"] = categories[0];
      setCardArray(cardArrayCopy);
    } else {
      cardArrayCopy[index]["category"] =
        categories[categories.indexOf(card["category"]) + 1];
      setCardArray(cardArrayCopy);
    }
  };

  const handleLeftArrow = (card, index) => {
    const cardArrayCopy = [...cardArray];
    if (categories.indexOf(card["category"]) === 0) {
      cardArrayCopy[index]["category"] = categories[categories.length - 1];
      setCardArray(cardArrayCopy);
    } else {
      cardArrayCopy[index]["category"] =
        categories[categories.indexOf(card["category"]) - 1];
      setCardArray(cardArrayCopy);
    }
  };

  const deleteCards = index => {
    const filteredArray = cardArray.filter(
      (card, currentIndex) => currentIndex !== index
    );
    setCardArray(filteredArray);
  };

  return (
    <div className="App">
      {/* The class "row" is for the layout changer */}
      <main className="content row">
        <h1>Retro Board</h1>
        {/* Layout changer */}
        <div>
          Layout &nbsp;<button className="button button-default">Column</button>
        </div>

        {/* The className "row" is for the layout changer */}
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
              onClick={() => {
                setCardArray(
                  cardArray.concat({
                    category: "wentWell",
                    text: "",
                    likes: 0,
                    dislikes: 0
                  })
                );
              }}
            >
              +
            </button>

            {/* A retro card (retrospective item) */}

            {/* User input */}
            {cardArray.map((card, index) => {
              if (card["category"] === "wentWell") {
                return (
                  <Cards
                    index={index}
                    cardArray={cardArray}
                    setCardArray={setCardArray}
                    handleLeftArrow={handleLeftArrow}
                    handleRightArrow={handleRightArrow}
                    card={card}
                    deleteCards={deleteCards}
                  />
                );
              } else {
                return null;
              }
            })}
          </div>

          {/* Retro category */}
          <div className="RetroCategory RetroCategory-2">
            <h2>To Improve</h2>
            <button
              type="button"
              className="ButtonAdd button button-default"
              aria-label="Add new card"
              title="Add new card"
              onClick={() => {
                setCardArray(
                  cardArray.concat({
                    category: "toImprove",
                    text: "",
                    likes: 0,
                    dislikes: 0
                  })
                );
              }}
            >
              +
            </button>

            {/* A retro card (retrospective item) */}

            {/* User input */}
            {cardArray.map((card, index) => {
              if (card["category"] === "toImprove") {
                return (
                  <Cards
                    index={index}
                    cardArray={cardArray}
                    setCardArray={setCardArray}
                    handleLeftArrow={handleLeftArrow}
                    handleRightArrow={handleRightArrow}
                    card={card}
                    deleteCards={deleteCards}
                  />
                );
              } else {
                return null;
              }
            })}
          </div>

          {/* Retro category */}
          <div className="RetroCategory RetroCategory-3">
            <h2>Action Items</h2>
            <button
              type="button"
              className="ButtonAdd button button-default"
              aria-label="Add new card"
              title="Add new card"
              onClick={() => {
                setCardArray(
                  cardArray.concat({
                    category: "actionItems",
                    text: "",
                    likes: 0,
                    dislikes: 0
                  })
                );
              }}
            >
              +
            </button>

            {/* A retro card (retrospective item) */}

            {/* User input */}
            {cardArray.map((card, index) => {
              if (card["category"] === "actionItems") {
                return (
                  <Cards
                    index={index}
                    cardArray={cardArray}
                    setCardArray={setCardArray}
                    handleLeftArrow={handleLeftArrow}
                    handleRightArrow={handleRightArrow}
                    card={card}
                    deleteCards={deleteCards}
                  />
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
