import React from "react";

export default function Card(props) {
  const { title, author, publisher, link, image } = props.card;
  return (
    <div>
      <img src={image} alt="" />
      <div>
        <h1>{title}</h1>
        <p>By: {author}</p>
        <p>Puublished By: {publisher}</p>
        <a href={link}>
          <button>See this Book</button>
        </a>
      </div>
    </div>
  );
}
