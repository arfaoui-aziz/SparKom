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

import Boards from "./components/Myboards/Allboards";
import Showboard from "./components/Myboards/ShowBoard";
import BoardForm from "./components/Myboards/BoardForm";
import PBoardAdd from "./components/Myboards/PBoardAdd";
import Form2 from "./components/Myboards/Form2";
import Form3 from "./components/Myboards/Form3";
import ListForm from "./components/Myboards/ListForm";
import ActionButtonL from "./components/Myboards/ActionButtonL";
import EditCard from "./components/Myboards/EditCard";
import CardDetails from "./components/Myboards/CardDetails";
import AddMembers from "./components/Myboards/AddMembers";
import DeleteMembers from "./components/Myboards/DeleteMembers";
import CardMembers from "./components/Myboards/CardMembers";
import CardLists from "./components/Myboards/CardLists";
import Mail from "./components/Myboards/Mail";

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

            <Route path="/boards" component={Boards} />
          <Route path="/showboard/:id" component={Showboard} />
          <Route path="/BoardForm" component={BoardForm} />
          <Route path="/Form2" component={Form2} />
          <Route path="/Form3" component={Form3} />
          <Route path="/ListForm" component={ListForm} />
          <Route path="/PBoardAdd" component={PBoardAdd} />
          <Route path="/ActionButtonL" component={ActionButtonL} />
          <Route path="/EditCard/:idc" component={EditCard} />
          <Route path="/CardDetails/:idc" component={CardDetails} />
          <Route path="/AddMembers/:id" component={AddMembers} />
          <Route path="/DeleteMembers/:id" component={DeleteMembers} />
          <Route path="/CardMembers/:id/:idl" component={CardMembers} />
          <Route path="/CardLists/:id/:idl" component={CardLists} />
          <Route path="/Mail" component={Mail} />
          
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
