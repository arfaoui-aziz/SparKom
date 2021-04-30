import React from "react";
import "./App.css";
import AllTopics from "./pages/Post Managment/Topics/AllTopics";
import Login from "./components/Login";
import Home from "./pages/Post Managment/Home";
import MyProfile from "./components/MyProfile/MyProfile";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Settings from "./components/ProfileSettings/Settings";
import Quiz from "./components/Quiz/Quiz";
import AllFriends from "./components/MyProfile/AllFriends";
import AllBadges from "./components/MyProfile/AllBadges";
import NavBar from "./components/NavBar/NavBar";
import AllNotifications from "./components/MyProfile/AllNotifications";
import AllRequests from "./components/MyProfile/AllRequests";
import GroupProfile from "./components/Pages/GroupProfile";
import EventsPage from "./components/Pages/EventsPage";
import AllGroups from "./components/Pages/AllGroups";
import Statics from "./components/Pages/StaticsPageGroup";
import AddGroup from "./components/Pages/AddGroup";
import BorderForm from "./components/Boards/BorderForm";
import Borders from "./components/Boards/Boards";
import Register from "./pages/Register";
import Loginn from "./pages/Login";
import { useDispatch, connect } from "react-redux";
import { authCheck } from "./redux/actions/userActions";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
function App() {
  return (
    <div>
      <Router>
  {/* <NavBar />
        <div class="header-spacer header-spacer-small mb-3"></div> */}
        <Switch>
          <Route path="/settings" component={Settings} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/me/friends" component={AllFriends} />
          <Route path="/me/badges" component={AllBadges} />
          <Route path="/me/notifs" component={AllNotifications} />
          <Route path="/me/requests" component={AllRequests} />
          <Route path="/me" component={MyProfile} />
          <Route path="/g/:id" component={GroupProfile} />
          <Route path="/ge/:id" component={EventsPage} />
          <Route path="/all" component={AllGroups} />
          <Route path="/static/:id" component={Statics} />
          <Route path="/add" component={AddGroup} />
          <Route path="/BoardForm" component={BorderForm} />
          <Route path="/Boards" component={Borders} />
           {/* <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Loginn} />*/}
          <Route path="/" exact component={Home} />
          <Route path="/alltopics" exact component={AllTopics} />

          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Loginn} />

          <Route path="/user/:userId" exact component={Profile} />
          <Route path="/user/edit/:userId" exact component={EditProfile} />
         
         
        </Switch>
      </Router>
    </div>
  );
}

export default App;
