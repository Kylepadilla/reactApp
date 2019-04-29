import React from "react";

 const Search = props => {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron"
    >
      {props.children}
    </div>
  );
}

export default Search;