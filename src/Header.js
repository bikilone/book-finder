import React from "react";
import { Link } from "react-router-dom";
import "./css/Input.css";

export default function Header(props) {
  return (
    <div className="header">
      <Link to="/" className="main-h1">
        Book | Finder
      </Link>
      <Link className="main-h1 bookshelf" to="/bookshelf">
        Bookshelf
      </Link>
    </div>
  );
}
