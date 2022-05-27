import React from "react";
import Row from "./Row";

export default function Grid(props) {
  const { currentGuess, guesses, turn } = props;
  return (
    <div>
      {guesses.map((guess, index) => (
        <Row key={index} />
      ))}
    </div>
  );
}
