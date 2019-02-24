import React from "react";
import "./css/Card.css";

export default function Card(props) {
  const { title, author, publisher, link, image } = props.card;
  return (
    <div className="card">
      <img src={image} alt="" />
      <div className="card-right">
        <h1>{title}</h1>
        <p>By: {author}</p>
        <p>Published By: {publisher}</p>
        <a href={link}>
          <button className="button">See this Book</button>
        </a>
      </div>
    </div>
  );
}
