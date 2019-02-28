import React from "react";
import "./css/LandingPage.css";

export default function LandingPage(props) {
  return (
    <div className="landing">
      {props.message ? props.message : "Nothing yet"}
    </div>
  );
}
