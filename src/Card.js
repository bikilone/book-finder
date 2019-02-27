import React from "react";
import "./css/Card.css";

export default function Card(props) {
  const { title, author, publisher, link, image } = props.card;
  return (
    <div className="card">
      <img src={image} alt="" />
      <div className="card-right">
        <div className="card-rigth-top">
          <h1>{title}</h1>
          <svg>
            <path
              xmlns="http://www.w3.org/2000/svg"
              className="a"
              d="M33.688,36.755h11.5l3.584-10.911L52.3,36.755H63.8l-9.307,6.739,3.53,10.965L48.771,47.72l-9.307,6.739,3.53-10.965Z"
              transform="translate(-33.688 -25.844)"
            />
          </svg>
        </div>
        <p className="author">By: {author}</p>
        <p className="publisher">Published By: {publisher}</p>
        <a href={link}>
          <button className="button">See this Book</button>
        </a>
      </div>
    </div>
  );
}
