import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";
import Login from "./components/Login";
import MyProfile from "./components/MyProfile/MyProfile";
import Settings from "./components/ProfileSettings/Settings";
import Quiz from "./components/Quiz/Quiz";
import AllFriends from "./components/MyProfile/AllFriends";
import AllBadges from "./components/MyProfile/AllBadges";
import AllNotifications from "./components/MyProfile/AllNotifications";
import AllRequests from "./components/MyProfile/AllRequests";
import AllMessages from "./components/Chat/AllMessages";
import Register from "./components/Register";
import CompanySignup from "./components/CompanySignup";
import Cv from "./components/CV/Cv";
import UserProfile from "./components/MyProfile/UserProfile";
import GeneratePDF from "./components/CV/GeneratePDF";
import Signup from "./components/SignUp/Signup";
import GroupProfile from "./components/Pages/GroupProfile";
import EventsPage from "./components/Pages/EventsPage";
import AllGroups from "./components/Pages/AllGroups";
import Statics from "./components/Pages/StaticsPageGroup";
import AddGroup from "./components/Pages/AddGroup";
import Direction from "./components/Events/DirectionForm";
import Update from "./components/Group/Update";
import Home from "./components/Group/PostGR/Home";
function App() {
  const activeUser = useSelector((state) => state.auth.isAuthenticated);
  return (
    <div>
      <Router>
        {/* <NavBar />
        <div className="header-spacer header-spacer-small mb-3"></div> */}
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
            <Route path="/pdf" component={GeneratePDF} />
            <Route path="/g/:id" component={GroupProfile} />
          <Route path="/ge/:id" component={EventsPage} />
          <Route path="/DFe/:id" component={Direction} />
          <Route path="/all" component={AllGroups} />
          <Route path="/static/:id" component={Statics} />
          <Route path="/update/:id" component={Update} />
          <Route path="/add" component={AddGroup} />
          <Route path="/PostHome" component={Home} />
            <Route path="/" exact component={Login} />
          </Switch>
        ) : (
          <Switch>
            <Route path="/user" component={UserProfile} />
            <Route path="/signup" component={Register} />
            <Route path="/company" component={CompanySignup} />
            <Route path="/test" component={Signup} />
            <Route path="/" exact component={Login} />

          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
