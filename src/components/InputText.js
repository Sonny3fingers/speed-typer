import React, { useState } from "react";

const InputText = (props) => {
  const [text, setText] = useState("");

  const inputChangeHandler = (e) => {
    setText(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    props.onEnteredText(text);
    setText("");
  };

  return (
    <form className="form" onSubmit={formSubmitHandler}>
      <input
        value={text}
        type={text}
        autoComplete="off"
        placeholder="Enter text"
        onChange={inputChangeHandler}
      />
    </form>
  );
};

export default InputText;
