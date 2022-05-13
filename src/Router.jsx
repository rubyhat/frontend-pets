import { Route, Routes } from "react-router-dom";

import Home from "./Components/Home";
import SnakeGame from "./Components/Snake";
import GithubFindUser from "./Components/GithubFindUser";
import DD from "./Components/DD";
import Algorithms from "./Components/Algorithms";
import JavaScript from "./Components/JavaScript";
import FormValidation from "./Components/FormValidation";

const Router = () => {
  return (
    <Routes>
      <Route exact path="*" element={<Home />} />
      <Route exact path="/" element={<Home />} />
      <Route exact path="/algorithms" element={<Algorithms />} />
      <Route exact path="/javascript" element={<JavaScript />} />
      <Route exact path="/snake-game" element={<SnakeGame />} />
      <Route
        exact
        path="/native-form-validation"
        element={<FormValidation />}
      />
      <Route exact path="/github-find-user" element={<GithubFindUser />} />
      <Route exact path="/drag-and-drop" element={<DD />} />
    </Routes>
  );
};

export default Router;
