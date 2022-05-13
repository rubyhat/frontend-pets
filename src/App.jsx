import "./App.scss";

import { BrowserRouter as Router, Link } from "react-router-dom";

import { default as Routes } from "./Router";

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
                className="mr-3 transition text-lg text-rose-700 hover:text-rose-600 font-bold"
              >
                Rubyhat
              </Link>
              <a
                className="transition text-sm text-zinc-500 hover:text-zinc-400 underline underline-offset-1"
                href="https://github.com/rubyhat"
                target="_blank"
                rel="noreferrer"
              >
                https://github.com/rubyhat
              </a>
            </div>
          </div>
        </header>
        <main className="main-content py-2">
          <div className="container mx-auto px-4">
            <Routes />
          </div>
        </main>
        <footer className="footer py-3 border-t-2 border-zinc-200">
          <div className="container mx-auto px-4">
            <Link
              className="transition text-base text-rose-700 hover:text-rose-600 font-bold"
              to="https://github.com/rubyhat"
            >
              Rubyhat | 2022
            </Link>
          </div>
        </footer>
      </Router>
    </div>
  );
}

export default App;
