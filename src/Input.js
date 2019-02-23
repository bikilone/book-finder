import React from "react";
import "./css/Input.css";

export default function Input(props) {
  const { inputText, onInputChange, onSubmit } = props;
  return (
    <div>
      <h1>Book | Finder</h1>
      <form action="" onSubmit={onSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Search by book or author..."
          onChange={onInputChange}
          value={inputText}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
