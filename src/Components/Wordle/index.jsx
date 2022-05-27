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
    <div className="columns">
      <header className="navbar column is-full has-shadow mt-3">
        <h1 className="title is-1 has-text-centered">Wordle Game</h1>
        {solution && <WordleField solution={solution} />}
      </header>
    </div>
  );
};

export default Wordle;
