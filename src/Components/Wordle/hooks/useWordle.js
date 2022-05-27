import { useState } from "react";

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([]); // each guess is an array
  const [history, setHistory] = useState([]); // each guess is a string
  const [isCorrect, setIsCorrect] = useState(false);

  // format a guess into an array of letter objects
  // e.g. [{key: 'a', color: 'yellow'}]
  const formatGuess = (currentGuess) => {
    let solutionArray = [...solution.word];
    let formatedGuess = [...currentGuess].map((letter) => {
      return { key: letter, color: "grey" };
    });

    // find any green letters
    formatedGuess.forEach((letter, i) => {
      if (solutionArray[i] === letter.key) {
        formatedGuess[i].color = "green";
        solutionArray[i] = null;
      }
    });

    // find any yellow letters
    formatedGuess.forEach((letter, i) => {
      if (solutionArray.includes(letter.key) && letter.color !== "green") {
        formatedGuess[i].color = "yellow";
        solutionArray[solutionArray.indexOf(letter.key)] = null;
      }
    });

    return formatedGuess;
  };

  // add a new guess to the guesses state
  // update the isCorrect state if the guess is correct
  // add one to the turn state
  const addNewGuess = () => {};

  // handle keyup event & track current guess
  // if user presses enter, add the new guess
  const handleKeyup = ({ key }) => {
    if (key === "Enter") {
      // only add guess if turn is less than 5
      if (turn > 5) {
        console.log("you used all your guesses");
        return;
      }
      // do not allow duplicate words
      if (history.includes(currentGuess)) {
        console.log("you are already tried that word");
        return;
      }
      // check word is 5 chars long
      if (currentGuess.length !== 5) {
        console.log("word must be 5 chars long");
        return;
      }
      const formatted = formatGuess(currentGuess);
      console.log(formatted);
      console.log(solution);
    }
    if (key === "Backspace") {
      setCurrentGuess((prev) => prev.slice(0, -1));
      return;
    }
    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => prev + key);
      }
    }
  };

  return { turn, currentGuess, guesses, isCorrect, handleKeyup };
};

export default useWordle;
