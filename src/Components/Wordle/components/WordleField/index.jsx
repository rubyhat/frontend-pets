import React, { useEffect, useState } from "react";
import useWordle from "../../hooks/useWordle";
import Grid from "../Grid";
import Keypad from "../Keypad";
import Modal from "../Modal";

export default function WordleField({ solution }) {
  const { currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys } =
    useWordle(solution);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!isCorrect && turn < 6) {
      window.addEventListener("keyup", handleKeyup);
    } else {
      setTimeout(() => setShowModal(true), 2000);
    }
    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup, isCorrect, turn]);

  return (
    <section>
      <div>{solution.word}</div>
      <div>{currentGuess}</div>
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      <Keypad usedKeys={usedKeys} />
      {showModal && (
        <Modal isCorrect={isCorrect} turn={turn} solution={solution.word} />
      )}
    </section>
  );
}
