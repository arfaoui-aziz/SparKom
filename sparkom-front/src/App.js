import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Login from "./components/Login";
import MyProfile from "./components/MyProfile/MyProfile";
import Settings from "./components/ProfileSettings/Settings";
import Quiz from "./components/Quiz/Quiz";
import AllFriends from "./components/MyProfile/AllFriends";
import AllBadges from "./components/MyProfile/AllBadges";
import NavBar from "./components/NavBar/NavBar";
import AllNotifications from "./components/MyProfile/AllNotifications";
import AllRequests from "./components/MyProfile/AllRequests";
import AllMessages from "./components/Chat/AllMessages";
import Register from "./components/Register";
import CompanySignup from "./components/CompanySignup";
import Cv from "./components/CV/Cv";
import UserProfile from "./components/MyProfile/UserProfile";
import { useSelector } from "react-redux";
function App() {
  const activeUser = useSelector((state) => state.auth.isAuthenticated);
  return (
    <div>
      <Router>
        {/* <NavBar />
        <div class="header-spacer header-spacer-small mb-3"></div> */}
        {activeUser ? (
          <Switch>
            <Route path="/settings" component={Settings} />
            <Route path="/quiz" component={Quiz} />
            <Route path="/cv" component={Cv} />
            <Route path="/me/friends" component={AllFriends} />
            <Route path="/me/badges" component={AllBadges} />
            <Route path="/me/notifs" component={AllNotifications} />
            <Route path="/me/requests" component={AllRequests} />
            <Route path="/me/messages" component={AllMessages} />
            <Route path="/me" component={MyProfile} />

            <Route path="/user" component={UserProfile} />
            <Route path="/signup" component={Register} />
            <Route path="/company" component={CompanySignup} />
            <Route path="/" exact component={Login} />
          </Switch>
        ) : (
          <Switch>
            <Route path="/user" component={UserProfile} />
            <Route path="/signup" component={Register} />
            <Route path="/company" component={CompanySignup} />
            <Route path="/" exact component={Login} />
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
