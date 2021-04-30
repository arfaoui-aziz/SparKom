import React from "react";
import { useDispatch, connect } from "react-redux";
import { Link } from "react-router-dom";
import { isLogged } from "../../../helpers/auth";
import { getAllTopics } from "../../../redux/actions/topicActions";


import Header from "./Header";
import TopicSearchBar from "./TopicSearchBar.js";
import TopicList from "./TopicList";


function AllTopics({ topics }) {
  const jwt = isLogged();
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (jwt) {
      function loadTopics() {
        dispatch(getAllTopics(jwt.token));
      }
      loadTopics();
    }
  }, []);

  if (!jwt) {
    return (
      <div className="container">
        <div className="row my-5">
          <div className="col-md-8 mx-auto">
            <div className="alert alert-info">
              <Link to="/login">Connectez vous pour voir les tweets</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (

    <div >
    <Header />
    <TopicSearchBar />
    <TopicList topics={topics && topics} />
      </div>

  );
}

const mapStateToProps = ({ topic: { topic } }) => ({
  topic,
});

export default connect(mapStateToProps, null)(AllTopics);