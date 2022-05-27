import React from "react";
import Row from "../Row";

export default function Grid(props) {
  const { currentGuess, guesses, turn } = props;
  return (
    <div>
      {guesses.map((guess, index) => {
        if (turn === index) {
          return <Row key={index} currentGuess={currentGuess} />;
        }
        return <Row key={index} guess={guess} />;
      })}
    </div>
  );
}
