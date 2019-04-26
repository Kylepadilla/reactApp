import React from "react";
import "./style.css";

function ScoreBoard(props) {
  return <h1 className="score">score: {props.children}</h1>;;
}

export default ScoreBoard;
