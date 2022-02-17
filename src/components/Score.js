import React from "react";

const Score = (props) => {
  return (
    <p className="score">
      Score: <span>{props.score}</span>
    </p>
  );
};

export default Score;
