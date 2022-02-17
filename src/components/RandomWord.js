import React from "react";

const RandomWord = (props) => {
  return (
    <React.Fragment>
      <small>type the following word</small>
      <h1>{props.word}</h1>
    </React.Fragment>
  );
};

export default RandomWord;
