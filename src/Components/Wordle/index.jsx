import { useEffect, useState } from "react";
import WordleField from "./components/WordleField";

const Wordle = () => {
  const [solution, setSolution] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3001/solutions").then((res) =>
      res
        .json()
        .then((data) =>
          setSolution(data[Math.floor(Math.random() * data.length)])
        )
    );
  }, [setSolution]);
  return (
    <div className="section">
      <div className="columns">
        <header className="navbar column is-full has-shadow mt-3">
          <h1 className="title is-1 has-text-centered">Wordle Game</h1>
        </header>
      </div>

      <div className="columns">
        <div className="column">
          {solution && <WordleField solution={solution} />}
        </div>
      </div>
    </div>
  );
};

export default Wordle;
