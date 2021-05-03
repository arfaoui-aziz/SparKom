import React from "react";
import { useDispatch, connect } from "react-redux";
import { Link } from "react-router-dom";
import { isLogged } from "../../helpers/auth";
import { getAllPosts } from "../../redux/actions/postActions";
import PostList from "./PostList";
import AddPost from "./AddPost";
import Feed from "./Feed";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
function Home({ posts }) {
  const jwt = isLogged();
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (jwt) {
      function loadPosts() {
        dispatch(getAllPosts(jwt.token, jwt.user._id));
      }
      loadPosts();
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
    <div class="container">
      <div class="row">
        <LeftSidebar />
        <div className="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
      <div id="newsfeed-items-grid">
        <AddPost />
        <PostList posts={posts && posts} />
      </div>
    </div>
        
        <RightSidebar />
      </div>
    </div>
  );
}

const mapStateToProps = ({ post: { posts } }) => ({
  posts,
});

export default connect(mapStateToProps, null)(Home);