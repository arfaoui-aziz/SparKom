import React from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { isLogged, checkAuth, logout } from "../helpers/auth";
import { getUser, deleteUser } from "../redux/actions/userActions";
import FollowButton from "../components/FollowButton";
import FollowComponent from "../components/FollowComponent";
import { useDispatch, connect } from "react-redux";
import PostList from "../pages/Post Managment/PostList";
import { getUserPosts } from "../redux/actions/postActions";

function Profile({ userSuccess, userError, userPosts }) {
  const { userId } = useParams();
  const [error, setError] = React.useState("");
  const [following, setFollowing] = React.useState(false);
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const jwt = isLogged();
  const dispatch = useDispatch();
  const history = useHistory();
  const date = user && user.createdAt ? new Date(user.createdAt) : null;

  React.useEffect(() => {
    async function getProfile() {
      const userData = await getUser(userId, jwt && jwt.token);
      if (userData.error) {
        setError(userData.error);
      } else {
        setUser(userData.data);
        setFollowing(checkFollow(userData.data));
      }
    }
    function checkFollow(user) {
      const match = user.followers.find((follower) => {
        return follower._id === jwt.user._id;
      });
      return match;
    }
    if (loading) {
      getProfile();
    }
    return () => {
      setLoading(false);
    };
  }, [userId, jwt, loading]);

  React.useEffect(() => {
    if (userSuccess) {
      logout(() => {
        history.push("/");
      });
      dispatch({ type: "TOGGLE_SUCCESS" });
    }
    if (userError) {
      setError(userError);
    }
    function loadUserPosts() {
      dispatch(getUserPosts(jwt.token, userId));
    }
    loadUserPosts();
  }, [userError, userSuccess, dispatch, userId]);

  function showError() {
    return error && <div className="alert alert-danger">{error}</div>;
  }

  function hanldeButtonClick(user) {
    setUser(user);
    setFollowing(!following);
  }

  if (!jwt) {
    return (
      <div className="container">
        <div className="row my-5">
          <div className="col-md-8 mx-auto">
            <div className="alert alert-info">
              <Link to="/login">Connectez vous pour voir le profile</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-md-8 mx-auto">
          {error ? (
            showError()
          ) : (
            <div className="card p-2">
              <div className="d-flex flex-row justify-content-start align-items-center">
                <img
                  src={`http://localhost:8888/api/user/photo/${userId}?${new Date().getTime()}`}
                  width="50"
                  height="50"
                  className="img-fluid rounded pr-2"
                  alt={user && user.name}
                />
                <h4 className="mt-3">{user && user.name}</h4>
              </div>
              <span className="font-weight-bold mt-3">
                {user && user.email}
              </span>
              <p className="lead">{user && user.about}</p>
              <hr />
              <span className="badge badge-danger col-4">
                Inscrit le : {date && date.toLocaleDateString()}
              </span>
              <hr />
              {checkAuth(userId) ? (
                <div className="d-flex flex-row justify-content-end align-items-center">
                  <Link to={`/user/edit/${userId}`}>
                    <i className="fa fa-edit btn mr-2 btn-warning btn-sm"></i>
                  </Link>
                  <Link
                    to="#"
                    onClick={() => dispatch(deleteUser(userId, jwt.token))}
                  >
                    <i className="fa fa-trash btn btn-danger btn-sm"></i>
                  </Link>
                </div>
              ) : (
                <FollowButton
                  following={following}
                  hanldeButtonClick={hanldeButtonClick}
                  token={jwt && jwt.token}
                  followId={user && user._id}
                  userId={jwt && jwt.user._id}
                />
              )}
              <hr />
              <h3 className="text-primary">Abonnés</h3>
              <hr />
              <FollowComponent data={user && user.followers} />
              <h3 className="text-primary">Abonnements</h3>
              <hr />
              <FollowComponent data={user && user.following} />
              <hr />
              <h3 className="text-primary">Publications</h3>
              <PostList posts={userPosts} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({
  user: { userError, userSuccess },
  post: { userPosts },
}) => ({
  userError,
  userSuccess,
  userPosts,
});

export default connect(mapStateToProps, null)(Profile);