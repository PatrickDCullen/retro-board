import React, { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import AddCardButton from "./components/AddCardButton";

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

  const deleteCards = (index) => {
    const filteredArray = cardArray.filter(
      (card, currentIndex) => currentIndex !== index
    );
    setCardArray(filteredArray);
  };

  return (
    <div className="App">
      <main className="content">
        <h1>Retro Board</h1>
        <div className="RetroApp">
          {/* Retro category */}
          <div className="RetroCategory RetroCategory-1">
            <h2>Went Well</h2>
            {/* Add a new card button */}
            <AddCardButton
              category="wentWell"
              setCardArray={setCardArray}
              cardArray={cardArray}
            />

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
              }
            })}
          </div>

          {/* Retro category */}
          <div className="RetroCategory RetroCategory-2">
            <h2>To Improve</h2>
            <AddCardButton
              category="toImprove"
              setCardArray={setCardArray}
              cardArray={cardArray}
            />

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
              }
            })}
          </div>

          {/* Retro category */}
          <div className="RetroCategory RetroCategory-3">
            <h2>Action Items</h2>
            <AddCardButton
              category="actionItems"
              setCardArray={setCardArray}
              cardArray={cardArray}
            />

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
              }
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
