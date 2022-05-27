import React, { useEffect } from "react";
import useWordle from "../hooks/useWordle";

export default function WordleField({ solution }) {
  const { currentGuess, handleKeyup, guesses, isCorrect, turn } =
    useWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);
    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup]);

  useEffect(() => {
    console.log(guesses, turn, isCorrect);
  }, [guesses, turn, isCorrect]);

  return (
    <section>
      <div>{solution.word}</div>
      <div>{currentGuess}</div>
    </section>
  );
}
