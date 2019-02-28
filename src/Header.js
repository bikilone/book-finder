import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <h1 className="main-h1">Book | Finder</h1>
      <Link to="/bookshelf">Bookshelf</Link>
    </div>
  );
}
