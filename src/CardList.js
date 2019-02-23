import React from "react";
import Card from "./Card";

export default function CardList(props) {
  return props.cards.map((card, i) => {
    return <Card card={card} key={i} />;
  });
}
