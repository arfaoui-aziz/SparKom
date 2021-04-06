import React from "react";

import "./App.css";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import AllTopics from "./components/AllTopics/AllTopics";
import TopicPage from "./components/TopicPage/TopicPage";
import TrendPage from "./components/Trend/TrendPage";
import ForumList from "./components/ForumList/ForumList";
import QuestionPage from "./components/QuestionPage/QuestionPage";
import AddQuestion from "./components/AddQuestion/AddQuestion";

function App() {
  return (
    <div>
      <Router>
        {/* <NavBar />
        <div class="header-spacer header-spacer-small mb-3"></div> */}
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/alltopics" component={AllTopics} />
          <Route path="/topicpage" component={TopicPage} />
          <Route path="/trendpage" component={TrendPage} />
          <Route path="/forumList" component={ForumList} />
          <Route path="/questionpage" component={QuestionPage} />
          <Route path="/addQuestion" component={AddQuestion} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
