import React from "react";
import "./SearchBox.css";

function SearchBox({ setText }) {
  const inputChangeHandler = (e) => {
    setText(e.target.value);
  };
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
