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
import AllNotifications from "./components/MyProfile/AllNotifications";
import AllRequests from "./components/MyProfile/AllRequests";
import Boards from "./components/Myboards/Allboards";
import Showboard from "./components/Myboards/ShowBoard";
function App() {
  return (
    <div>
      <Router>
         <NavBar />
        <div class="header-spacer header-spacer-small mb-3"></div> 
        <Switch>
          <Route path="/settings" component={Settings} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/me/friends" component={AllFriends} />
          <Route path="/me/badges" component={AllBadges} />
          <Route path="/me/notifs" component={AllNotifications} />
          <Route path="/me/requests" component={AllRequests} />
          <Route path="/me" component={MyProfile} />
          <Route path="/boards" component={Boards} />
          <Route path="/showboard" component={Showboard} />

          <Route path="/" exact component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
