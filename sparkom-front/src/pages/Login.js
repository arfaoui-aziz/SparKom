import React from "react";
import { useDispatch, connect } from "react-redux";
import { login } from "../redux/actions/userActions";
import { Redirect } from "react-router-dom";

function Login({ userError, userSuccess }) {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const [error, setError] = React.useState(null);
  const [success, setSuccess] = React.useState(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (userError && userError !== null) {
      setError(userError);
    }
    if (userSuccess) {
      setSuccess(userSuccess);
      dispatch({ type: "TOGGLE_SUCCESS" });
    }

    return () => {
      dispatch({ type: "HIDE_USER_ERROR" });
    };
  }, [userError, userSuccess, dispatch]);

  function handleInputChange(event) {
    setError("");
    setUser({ ...user, [event.target.name]: event.target.value });
  }

  function showError() {
    return error && <div className="alert alert-danger">{error}</div>;
  }

  function redirectUser() {
    return success && <Redirect to="/" />;
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    dispatch(login(user));
  }

  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-md-6 mx-auto">
          {showError()}
          {redirectUser()}
          <h3 className="card-title">Connexion</h3>
          <form onSubmit={handleFormSubmit} className="card p-2">
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={user.email}
                onChange={(event) => handleInputChange(event)}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                placeholder="Mot de passe"
                required
                value={user.password}
                onChange={(event) => handleInputChange(event)}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-outline-primary">
                Valider
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ user: { userError, userSuccess } }) => ({
  userError,
  userSuccess,
});

export default connect(mapStateToProps, null)(Login);