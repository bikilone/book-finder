import React from "react";
import { Link } from "react-router-dom";

import "./css/Input.css";

export default function Input(props) {
  const { inputText, onInputChange, onSubmit, clearInput, onClick } = props;

  return (
    <div>
      <h1 className="main-h1">Book | Finder</h1>
      <form action="" onSubmit={onSubmit}>
        <input
          className="input"
          type="text"
          onChange={onInputChange}
          value={inputText}
        />
        <span onClick={clearInput}>X</span>
        <button onClick={onClick} className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
