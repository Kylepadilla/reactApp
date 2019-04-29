import React from "react";
import "./style.css";

// This file exports both the List and ListItem components

export const List = props =>  {
  return (
    <div className="list-overflow-container">
     {props.children}
    </div>
  );
}

export function ListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}
