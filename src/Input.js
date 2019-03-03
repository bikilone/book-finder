import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-dropdown";

import "./css/Input.css";

export default function Input(props) {
  const {
    inputText,
    onInputChange,
    onSubmit,
    clearInput,
    onClick,
    showDropDownMenu,
    hideDropDownMenu,
    dropDown,
    queries
  } = props;

  const res = queries.filter((query, i) => query.includes(inputText));

  return (
    <div>
      <form action="" onSubmit={onSubmit}>
        <input
          placeholder="search ..."
          className="input"
          type="text"
          onChange={onInputChange}
          value={inputText}
          onBlur={hideDropDownMenu}
          onFocus={showDropDownMenu}
        />
        <span onClick={clearInput}>X</span>
        <button onClick={onClick} className="search-button" type="submit">
          Search
        </button>
        <div className="dropdown" style={{ display: dropDown }}>
          <ul>
            {/* {queries.map((query, i) => (
              <li key={i} className="input">
                {query}
              </li>
            ))} */}
            {res.map((element, i) => (
              <li key={i} className="input">
                {element}
              </li>
            ))}
          </ul>
        </div>
      </form>
    </div>
  );
}
