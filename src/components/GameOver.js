import React from "react";

const GameOver = (props) => {
  const reloadHandler = () => {
    window.location.reload();
  };
  return (
    <div className="gameOver">
      <h1>Game Over</h1>
      <p>
        Your score is: <span>{props.score}</span>
      </p>
      <button onClick={reloadHandler}>Reload</button>
    </div>
  );
};

export default GameOver;
