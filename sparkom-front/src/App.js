import React from "react";

import "./App.css";
import Login from "./components/Login";
import MyProfile from "./components/MyProfile/MyProfile";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Settings from "./components/ProfileSettings/Settings";
import Quiz from "./components/Quiz/Quiz";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/me" component={MyProfile} />
          <Route path="/settings" component={Settings} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/profile" exact component={MyProfile} />
          <Route path="/" exact component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
