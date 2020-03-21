import React from "react";

function AddCardButton(props) {
  return (
    <button
      type="button"
      className="ButtonAdd button button-default"
      aria-label="Add new card"
      title="Add new card"
      onClick={() => {
        props.setCardArray(
          props.cardArray.concat({
            category: props.category,
            text: "",
            likes: 0,
            dislikes: 0
          })
        );
      }}
    >
      +
    </button>
  );
}

export default AddCardButton;
