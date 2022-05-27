import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./wordle.module.scss";

import useWordle from "../../hooks/useWordle";
import Grid from "../Grid";
import Keypad from "../Keypad";
import Modal from "../Modal";

export default function WordleField({ solution }) {
  const cx = classNames.bind(styles);

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
      <div className={cx("game-wrap")}>
        <div className={cx("game")}>
          <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
          <Keypad usedKeys={usedKeys} />
        </div>
        <article className="message" style={{ maxWidth: "560px" }}>
          <div className="message-header">
            <p>Wordle Game</p>
            <button
              className="delete"
              onClick={(e) =>
                (e.target.closest(".message").style.display = "none")
              }
              aria-label="delete"
            ></button>
          </div>
          <div className="message-body">
            <ul className={cx("rules-list")}>
              <li>The goal of the game is to guess the word</li>
              <li>Use your keyboard to type the letters</li>
              <li>
                Press the <span style={{ marginLeft: "4px" }}>"Enter"</span> to
                submit word
              </li>
              <li>
                <span className={cx("green")}>Green</span> letter is correct
                char and char's position in the word
              </li>
              <li>
                <span className={cx("yellow")}>Yellow</span> letter is correct
                char, but incorrect char's position in the word
              </li>
              <li>
                <span className={cx("grey")}>Grey</span> letter is wrong char
              </li>
              <li>
                You can check the used letters on the keypad below the playing
                field
              </li>
            </ul>
            <hr style={{ background: "#ddd", margin: "0.5rem 0" }} />
            <strong>
              Created with: React, Custom Hooks, json-server, css modules -{" "}
              <a
                style={{ color: "tomato" }}
                href="https://github.com/rubyhat/frontend-pets/tree/wordle_game/src/Components/Wordle"
              >
                code
              </a>
            </strong>
          </div>
        </article>
      </div>

      {showModal && (
        <Modal isCorrect={isCorrect} turn={turn} solution={solution.word} />
      )}
    </section>
  );
}
