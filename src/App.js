import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/">
            <HomeScreen />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
