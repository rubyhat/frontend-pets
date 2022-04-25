import { useState, useEffect } from "react";

import Food from "./Food";
import Snake from "./Snake";
import "./snake.scss";

const Index = () => {
  const getRandomCoordinates = () => {
    let min = 1;
    let max = 98;
    let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
    let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;

    return [x, y];
  };

  const [food, setFood] = useState([42, 42]);
  const [snakeData, setSnakeData] = useState([
    [0, 0],
    [0, 2],
  ]);
  const [direction, setDirection] = useState("RIGHT");
  const [speed, setSpeed] = useState(300);
  const [alive, setAlive] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [gamePaused, setGamePaused] = useState(false);

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    checkCrashBorders();
    // checkCollapsed();
    checkEat();

    const run = setInterval(() => {
      if (alive && !gamePaused) moveSnake();
    }, speed);

    return () => clearInterval(run);
  });

  const onKeyDown = (e) => {
    const event = e || window.event;
    switch (event.keyCode) {
      case 37: {
        setDirection("LEFT");
        break;
      }
      case 38: {
        setDirection("UP");
        break;
      }
      case 39: {
        setDirection("RIGHT");
        break;
      }
      case 40: {
        setDirection("DOWN");
        break;
      }
      default: {
      }
    }
  };

  const moveSnake = () => {
    let dots = [...snakeData];
    let head = dots[dots.length - 1];

    switch (direction) {
      case "RIGHT": {
        head = [head[0], head[1] + 2];
        break;
      }
      case "LEFT": {
        head = [head[0], head[1] - 2];
        break;
      }
      case "UP": {
        head = [head[0] - 2, head[1]];
        break;
      }
      case "DOWN": {
        head = [head[0] + 2, head[1]];
        break;
      }
      default: {
      }
    }

    dots.push(head);
    dots.shift();
    setSnakeData(dots);
  };

  const checkEat = () => {
    let headPos = snakeData[snakeData.length - 1];
    let foodPos = food;

    if (headPos[0] === foodPos[0] && headPos[1] === foodPos[1]) {
      setFood(getRandomCoordinates());
      speedUp();
      growUpSnake();
    }
  };

  const speedUp = () => {
    setSpeed((prev) => (prev > 50 ? prev - 15 : prev));
  };

  const growUpSnake = () => {
    const newSnake = [snakeData[snakeData.length - 1], ...snakeData];
    setSnakeData(newSnake);
  };

  const checkCrashBorders = () => {
    let headPos = snakeData[snakeData.length - 1];
    if (
      headPos[0] >= 100 ||
      headPos[1] >= 100 ||
      headPos[0] < 0 ||
      headPos[1] < 0
    ) {
      console.log("died 1");
      setAlive(false);
      console.log("omg noob");
    }
  };

  const checkCollapsed = () => {
    const snake = [...snakeData];
    const headPos = snakeData[snakeData.length - 1];
    snake.pop();
    snake.forEach((item) => {
      if (headPos[0] === item[0] && headPos[1] === item[1]) {
        setAlive(false);
        console.log("died-2");
      }
    });
  };

  const replay = () => {
    setDirection("RIGHT");
    setFood(getRandomCoordinates());
    setSnakeData([
      [0, 0],
      [0, 2],
    ]);
    setSpeed(300);
    setGameStarted(true);
    setAlive(true);
  };

  const handlePlayButton = () => {
    setAlive(true);
    setGameStarted(true);
  };

  const handlePauseButton = () => {
    setGamePaused((prev) => !prev);
  };
  return (
    <div className="snake-game">
      <div className="game-wrap">
        <div className="stats">
          <h3>Speed: {speed}</h3>
          <h3>Snake Length: {snakeData.length}</h3>
          <h3>Score: {(snakeData.length - 2) * 10}</h3>
          <button disabled={gameStarted} onClick={handlePlayButton}>
            Play
          </button>
          {alive && (
            <button disabled={!gameStarted} onClick={handlePauseButton}>
              {gamePaused ? "Continue" : "Pause"}
            </button>
          )}
          {!alive && !gamePaused && gameStarted && (
            <button onClick={replay}>Try again</button>
          )}
        </div>
        <div className="game-area">
          <Snake snakeData={snakeData} />
          {alive && <Food food={food} />}
        </div>
      </div>
      <div className="game-info">
        <div className="game-rules">
          <h5>Game Rules</h5>
          <ul>
            <li>Use arrows to move</li>
            <li>You lose if you crash into the border</li>
            <li>With every food a snake grows</li>
            <li>With every food a snake's speed up</li>
            <li>Good luck!</li>
          </ul>
        </div>
        <div className={!alive && gameStarted ? "alert alert-coral" : "alert"}>
          {!alive && gameStarted ? (
            <p>Oh... You lose! Try again :)</p>
          ) : (
            <p>Have a nice game! GL HF :)</p>
          )}
        </div>
        <a className="link" href="https://github.com/rubyhat/snake-game">
          Github source
        </a>
      </div>
    </div>
  );
};

export default Index;
