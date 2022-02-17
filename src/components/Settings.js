import React, { useState, useRef } from "react";

const Settings = (props) => {
  const [difficulty, setDifficulty] = useState();
  const settingsRef = useRef();

  const changeSelectDifficulty = (e) => {
    console.log(e.target.value);
    setDifficulty(e.target.value);
  };

  const settingsSubmitHandler = (e) => {
    e.preventDefault();
    props.onSetDifficulty(difficulty);
    settingsRef.current.classList.add("hide");
  };

  return (
    <div className="settings" ref={settingsRef}>
      <h1>Speed Typer Game</h1>
      <form onSubmit={settingsSubmitHandler}>
        <label>Select Difficulty</label>
        <select
          name="difficulty"
          className="difficulty"
          onChange={changeSelectDifficulty}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <button>Start</button>
      </form>
    </div>
  );
};

export default Settings;
