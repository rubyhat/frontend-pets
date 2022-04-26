import "./App.scss";
import Home from "./Components/Home";
import SnakeGame from "./Components/Snake";

import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import GithubFindUser from "./Components/GithubFindUser";
import Trello from "./Components/Trello";

function App() {
  const createHistory = require("history").createBrowserHistory;
  const history = createHistory();
  return (
    <div className="wrapper">
      <Router history={history}>
        <header className="header py-3 border-b-2 border-zinc-200">
          <div className="container mx-auto px-4">
            <div className="flex items-center">
              <Link
                to="/"
                className="mr-3 transition text-lg text-rose-500 hover:text-rose-400 font-bold"
              >
                Rubyhat
              </Link>
              <Link
                className="transition text-sm text-zinc-500 hover:text-zinc-400 underline underline-offset-1"
                to="https://github.com/rubyhat"
              >
                https://github.com/rubyhat
              </Link>
            </div>
          </div>
        </header>
        <main className="main-content py-2">
          <div className="container mx-auto px-4">
            <Routes>
              <Route exact path="*" element={<Home />} />
              <Route exact path="/" element={<Home />} />
              <Route exact path="/snake-game" element={<SnakeGame />} />
              <Route
                exact
                path="/github-find-user"
                element={<GithubFindUser />}
              />
              <Route exact path="/trello" element={<Trello />} />
            </Routes>
          </div>
        </main>
        <footer className="footer py-3 border-t-2 border-zinc-200">
          <div className="container mx-auto px-4">
            <Link
              className="transition text-base text-rose-500 hover:text-rose-400 font-bold"
              to="https://github.com/rubyhat"
            >
              Rubyhat 2022.
            </Link>
          </div>
        </footer>
      </Router>
    </div>
  );
}

export default App;
