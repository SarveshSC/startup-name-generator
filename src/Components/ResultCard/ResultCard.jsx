import React from "react";
import "./ResultCard.css";

const nameCheapURL = "https://www.namecheap.com/domains/registration/results/?domain=";

const ResultCard = ({ nameInput }) => {
  return (
    <a className="link" href={`${nameCheapURL}${nameInput}`} target="_blank">
      <div className="result-card">
        <p className="result-name">{nameInput}</p>
      </div>
    </a>
  );
};

export default ResultCard;
