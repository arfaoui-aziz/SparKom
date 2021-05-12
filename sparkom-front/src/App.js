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
import ForgotPassword from "./components/ForgotPassword";
import VerificationCode from "./components/VerificationCode";
import AllProfiles from "./components/MyProfile/AllProfiles";
import ScrapedResume from "./components/CV/ScrapedResume";

import Landigpage from "./components/JobManagment/JobLanding/JobLanding";
import Joblists from "./components/JobManagment/JobList/Index";
import Jobdetails from "./components/JobManagment/JobDetail/Index";
import Schedule from "./components/JobManagment/ScheduleManagment/Index";
import AddJob from "./components/JobManagment/JobPost/JobPost";

import CompanyForm from "./components/JobManagment/Company/RegisterCompany";
import Companyinfo from "./components/JobManagment/CompanySettings/Companyinfos";

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
            <Route path="/user/:id" component={UserProfile} />
            <Route path="/signup" component={Register} />
            <Route path="/company" component={CompanySignup} />
            <Route path="/pdf" component={GeneratePDF} />
            <Route path="/all" component={AllProfiles} />
            <Route path="/resume" component={ScrapedResume} />
            <Route path="/" exact component={Login} />
            {/***************  Dali **********************************/}
            <Route exact path="/jobs" component={Landigpage} />
            <Route exact path="/findjob" component={Joblists} />
            <Route exact path="/job/:id" component={Jobdetails} />
            <Route exact path="/myschedule" component={Schedule} />
            <Route exact path="/addjob" component={AddJob} />
            <Route exact path="/registercompany" component={CompanyForm} />
            <Route exact path="/companyinfos/:id" component={Companyinfo} />
          </Switch>
        ) : (
          <Switch>
            <Route path="/user" component={UserProfile} />
            <Route path="/signup" component={Register} />
            <Route path="/company" component={CompanySignup} />
            <Route path="/forgot" component={ForgotPassword} />
            <Route path="/verif" component={VerificationCode} />
            <Route path="/" exact component={Login} />
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
