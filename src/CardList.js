import React from "react";
import Card from "./Card";
import "./css/CardList.css";
import LandingPage from "./LandingPage";

export default function CardList(props) {
  console.log(props);

  return (
    <div className="card-list">
      {props.cards.length > 0 ? (
        props.cards.map((card, i) => {
          return (
            <Card
              card={card}
              key={card.id}
              id={card.id}
              saveInBookshelf={props.saveInBookshelf}
              bookshelf={props.bookshelf}
            />
          );
        })
      ) : (
        <LandingPage message={"Empty bookshelf"} />
      )}
    </div>
  );
}
