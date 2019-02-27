import React from "react";
import Card from "./Card";
import "./css/CardList.css";

export default function CardList(props) {
  // console.log(props.saveInBookshelf);
  return (
    <div className="card-list">
      {props.cards.map((card, i) => {
        return (
          <Card
            card={card}
            key={card.id}
            id={card.id}
            saveInBookshelf={props.saveInBookshelf}
          />
        );
      })}
    </div>
  );
}
