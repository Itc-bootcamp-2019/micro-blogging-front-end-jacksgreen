import React from "react";
import "./App.css";
import CreateTweet from "./Components/CreateTweet/index";
import NavBar from "./Components/NavBar";
import Profile from "./Components/Profile";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="main-wrapper">
      <Router>
        <NavBar />

        <Switch>
          <Route exact path="/">
            <CreateTweet />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
