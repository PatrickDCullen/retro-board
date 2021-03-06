import React, { Fragment } from "react";
import angleLeft from "../assets/angleLeft.svg";
import angleRight from "../assets/angleRight.svg";
import timesCircle from "../assets/timesCircle.svg";
import thumbsUp from "../assets/thumbsUp.svg";
import thumbsDown from "../assets/thumbsDown.svg";

function Cards(props) {
  return (
    <Fragment key={`card1-${props.index}`}>
      <div className="RetroCard" aria-label="Retro card">
        <textarea
          className="textbox"
          placeholder="Enter text here"
          aria-label="Enter text here"
          rows="1"
          value={props.cardArray[props.index]["text"]}
          onChange={e => {
            const cardArrayCopy = [...props.cardArray];
            cardArrayCopy[props.index]["text"] = e.target.value;
            props.setCardArray(cardArrayCopy);
          }}
        ></textarea>

        <div className="button-group">
          <button
            type="button"
            className="button button-left"
            title="Move left"
            onClick={() => props.handleLeftArrow(props.card, props.index)}
          >
            <img src={angleLeft} alt="Move left" width="12" height="12" />
          </button>
          <button
            type="button"
            className="button button-delete"
            title="Delete"
            onClick={() => props.deleteCards(props.index)}
          >
            <img src={timesCircle} alt="Delete" width="12" height="12" />
          </button>
          <div>
            <button
              type="button"
              className="button button-left"
              title="Like"
              onClick={() => {
                const cardArrayCopy = [...props.cardArray];

                cardArrayCopy[props.index]["likes"]++;
                props.setCardArray(cardArrayCopy);
              }}
            >
              <img src={thumbsUp} alt="Like" width="12" height="12" />{" "}
              {props.card["likes"]}
            </button>
            <button
              type="button"
              className="button button-left"
              title="Dislike"
              onClick={() => {
                const cardArrayCopy = [...props.cardArray];

                cardArrayCopy[props.index]["dislikes"]++;
                props.setCardArray(cardArrayCopy);
              }}
            >
              <img src={thumbsDown} alt="Dislike" width="12" height="12" />{" "}
              {props.card["dislikes"]}
            </button>
            <button
              type="button"
              className="button button-right"
              title="Move right"
              onClick={() => props.handleRightArrow(props.card, props.index)}
            >
              <img src={angleRight} alt="Move right" width="12" height="12" />
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Cards;
