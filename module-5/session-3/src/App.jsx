import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// pages
import { HomePage, AboutPage, ProfilePage, NotFound } from "../pages";
function App() {
  return (
    <>
      <Router>
        <h1>React Router</h1>
        <div style={{ display: "flex", gap: "20px" }}>
          <Link to="/home">
            <button>go to home</button>
          </Link>
          <Link to="/about">
            <button>go to about</button>
          </Link>
          <Link to="/profile">
            <button>go to profile</button>
          </Link>
        </div>

        <Switch>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/profile">
            <ProfilePage />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
