import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFoundScreen from "./components/NotFoundScreen";
import WelcomeHomeScreen from "./screens/WelcomeScreens/WelcomeHomeScreen";
import { useSelector } from "react-redux";

const App = () => {
  //TODO fix /users route error and enable loggin state
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <Router>
      <Routes>
        <Route path="*" exact Component={NotFoundScreen} />
        {!isLoggedIn && (
          <Route path="/" exact Component={WelcomeHomeScreen}></Route>
        )}
      </Routes>
    </Router>
  );
};

export default App;
