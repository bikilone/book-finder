import React from "react";
import Card from "./Card";
import "./css/CardList.css";

export default function CardList(props) {
  return (
    <div className="card-list">
      {props.cards.map((card, i) => {
        return <Card card={card} key={i} />;
      })}
    </div>
  );
}
