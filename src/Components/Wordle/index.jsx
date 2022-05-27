import { useEffect, useState } from "react";
import WordleField from "./components/WordleField";
import db from "./data/db.json";

const Wordle = () => {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    setSolution(db.solutions[Math.floor(Math.random() * db.solutions.length)]);

    // if using json-server
    // fetch("http://localhost:3001/solutions").then((res) =>
    //   res
    //     .json()
    //     .then((data) =>
    //       setSolution(data[Math.floor(Math.random() * data.length)])
    //     )
    // );
  }, [setSolution]);

  return (
    <>
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
    </>
  );
};

export default Wordle;
