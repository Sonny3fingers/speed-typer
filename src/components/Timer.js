import React from "react";

const Timer = (props) => {
  return (
    <p className="timer">
      Your Time: <span>{props.time} s</span>
    </p>
  );
};

export default Timer;
