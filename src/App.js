import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Profile from "./Components/Profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import FirebaseHomePage from "./Components/FirebaseHomePage";

function App() {
  return (
    <div className="main-wrapper">
      <Router>
        <NavBar />
        
        <Switch>
          <Route exact path="/">
            {/* <HomePage /> */}
            <FirebaseHomePage />
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
