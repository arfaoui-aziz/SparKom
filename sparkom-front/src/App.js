import React from "react";
import Home from "./pages/Post Managment/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { useDispatch, connect } from "react-redux";
import { authCheck } from "./redux/actions/userActions";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import NavBar from "./components/NavBar/NavBar";
import AllTopics from "./pages/Topics/AllTopics";
import Users from "./pages/Users";
import TopicDetails from "./pages/Topics/TopicDetails";
import AddQuestion from "./pages/Question/addQuestion";
import AllQuestion from "./pages/Question/AllQuestions";
import QuestionDetails from "./pages/Question/QuestionDetails";
import News from "./pages/API News/NewsCard";


function App({ currentUser }) {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(authCheck());
  }, [dispatch]);

  return (
    <div
    style={{
      backgroundColor: '#EDF2F6',
    }}
  >
    <BrowserRouter>
      <Navbar currentUser={currentUser && currentUser} />
      <NavBar />
      <div class="header-spacer header-spacer-small mb-3"></div>
      <Switch>
        <Route path="/" exact component={Home} />
        
        <Route path="/topics" exact component={AllTopics} />
        <Route path="/topic/:topicId" exact component={TopicDetails} />
        <Route path="/question/:questionId" exact component={QuestionDetails} />

        <Route path="/questions" exact component={AllQuestion} />
        <Route path="/addQuestion" exact component={AddQuestion} />

        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <Route path="/users" exact component={Users} />
        <Route path="/user/:userId" exact component={Profile} />
  <Route path="/user/edit/:userId" exact component={EditProfile} />
  <Route path="/news" exact component={News} />

        

      </Switch>
    </BrowserRouter>
    </div>
  );
}

const mapStateToProps = ({ user: { currentUser } }) => ({
  currentUser,
});

export default connect(mapStateToProps)(App);
