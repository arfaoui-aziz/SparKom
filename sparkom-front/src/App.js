import React from "react";

import "./App.css";
import Login from "./components/Login";
import MyProfile from "./components/MyProfile/MyProfile";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Settings from "./components/ProfileSettings/Settings";
import Quiz from "./components/Quiz/Quiz";
import AllFriends from "./components/MyProfile/AllFriends";
import AllBadges from "./components/MyProfile/AllBadges";
import NavBar from "./components/NavBar/NavBar";
function App() {
  return (
    <div>
      <NavBar />
      <Router>
        <Switch>
          <Route path="/settings" component={Settings} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/me/friends" component={AllFriends} />
          <Route path="/me/badges" component={AllBadges} />
          <Route path="/me" component={MyProfile} />

          <Route path="/" exact component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
