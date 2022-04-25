import "./App.scss";
import Home from "./Components/Home";
import SnakeGame from "./Components/Snake";

import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

function App() {
  const createHistory = require("history").createBrowserHistory;
  const history = createHistory();
  return (
    <div className="wrapper">
      <Router history={history}>
        <header className="header py-3 border-b-2 border-zinc-200">
          <div className="container mx-auto px-4">
            <div className="columns-12">
              <div className="columns-3">
                <Link
                  to="/"
                  className="transition text-lg text-rose-500 hover:text-rose-400 font-bold"
                >
                  Rubyhat
                </Link>
              </div>
            </div>
          </div>
        </header>
        <main className="main-content py-2">
          <div className="container mx-auto px-4">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/snake-game" element={<SnakeGame />} />
            </Routes>
          </div>
        </main>
        <footer className="footer py-3">
          <div className="container max-auto">
            <div className="column-3">Rubyhat</div>
          </div>
        </footer>
      </Router>
    </div>
  );
}

export default App;
