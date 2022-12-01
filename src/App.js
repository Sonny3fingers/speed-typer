import React, { useState, useEffect, useMemo, useCallback } from "react";
import Settings from "./components/Settings";
import Header from "./components/Header";
import Timer from "./components/Timer";
import Score from "./components/Score";
import RandomWord from "./components/RandomWord";
import InputText from "./components/InputText";
import GameOver from "./components/GameOver";

function App() {
  const words = useMemo(
    () => [
      "there",
      "four",
      "suitcase",
      "almost",
      "trunk",
      "even",
      "looking",
      "father",
      "noticed",
      "laugh",
      "shine",
      "sharp",
      "sitting",
      "slam",
      "distance",
      "confide",
      "nightmare",
      "turn",
      "deserted",
      "kitchen",
      "hungry",
    ],
    []
  );

  const [time, setTime] = useState();
  const [addTime, setAddTime] = useState();
  const [score, setScore] = useState(0);
  const [word, setWord] = useState();
  const [end, setEnd] = useState(false);
  const [enteredText, setEnteredText] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState();

  const setDifficultyHandler = (difficulty) => {
    setSelectedDifficulty(difficulty);
  };

  useEffect(() => {
    if (selectedDifficulty === "easy") {
      setTime(10);
      setAddTime(4);
    } else if (selectedDifficulty === "medium") {
      setTime(10);
      setAddTime(3);
    } else if (selectedDifficulty === "hard") {
      setTime(10);
      setAddTime(2);
    }
  }, [selectedDifficulty]);

  const enteredTextHandler = (text) => {
    setEnteredText(text);
  };

  const getRandomWord = useCallback(() => {
    setWord(words[Math.floor(Math.random() * words.length)]);
  }, [words]);

  useEffect(() => {
    getRandomWord();
    if (word === enteredText) {
      setScore((prevState) => prevState + 1);
      setTime((prevState) => prevState + addTime);
    }
  }, [enteredText, addTime, getRandomWord]);

  useEffect(() => {
    if (+time !== 0) {
      const timerId = setInterval(() => {
        setTime((prevState) => prevState - 1);
      }, 1000);

      return () => {
        clearInterval(timerId);
      };
    } else {
      setEnd(true);
    }
  }, [time]);

  return (
    <div className="app">
      <Settings onSetDifficulty={setDifficultyHandler} />
      <Header />
      <Timer time={time} />
      <Score score={score} />
      <RandomWord word={word} />
      <InputText onEnteredText={enteredTextHandler} />
      {end && <GameOver score={score} />}
    </div>
  );
}

export default App;
