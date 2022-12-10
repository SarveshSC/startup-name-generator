import React from "react";
import "./SearchBox.css";

function SearchBox({ inputChangeHandler }) {
  return (
    <div className="searchbox-container">
      <input
        onChange={inputChangeHandler}
        type="text"
        placeholder="enter your idea..."
        className="searchbox"
      />
    </div>
  );
}

export default SearchBox;
