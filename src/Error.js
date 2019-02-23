import React from "react";
import "./css/Error.css";

export default function Eror(props) {
  switch (props.error) {
    case "empty input":
      return <div className="error">You must enter something in input</div>;
      break;
    case "empty response":
      return <div className="error">There is no such book</div>;
      break;
    case "something went wrong":
      return <div className="error">Something went wrong</div>;
      break;
    default:
      return "";
  }
}
