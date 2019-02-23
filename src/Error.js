import React from "react";

export default function Eror(props) {
  switch (props.error) {
    case "empty input":
      return <div>You must enter something in input</div>;
      break;
    case "empty response":
      return <div>There is not such book</div>;
      break;
    default:
      return "";
  }
}
