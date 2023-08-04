import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// pages
import { HomePage, AboutPage, ProfilePage, NotFound } from "./pages";
import { DefaultLayout } from "./layouts";
function App() {
  return (
    <Router>
      <DefaultLayout />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
