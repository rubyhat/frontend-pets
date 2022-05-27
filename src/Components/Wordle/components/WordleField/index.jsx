import React, { useEffect } from "react";
import useWordle from "../../hooks/useWordle";
import Grid from "../Grid";
import Keypad from "../Keypad";

export default function WordleField({ solution }) {
  const { currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys } =
    useWordle(solution);

  useEffect(() => {
    if (!isCorrect && turn < 5) {
      window.addEventListener("keyup", handleKeyup);
    }
    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup, isCorrect, turn]);

  return (
    <section>
      <div>{solution.word}</div>
      <div>{currentGuess}</div>
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      <Keypad usedKeys={usedKeys} />
    </section>
  );
}
