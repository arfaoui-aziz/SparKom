import { TextField } from "@material-ui/core";
import React from "react";
import LandingPage from "./LandingPage";
import SweetAlert from "./SweetAlert";

export default function ForgotPassword() {
  const handleSubmit = (e) => {
    e.preventDefault();
    SweetAlert("check your Email !", "Reset Password Email Sent ", "success");
  };
  return (
    <LandingPage>
      <div className="registration-login-form pl-0">
        <div className="title h6">
          <b>Forgot Password</b>
        </div>
        <form className="content" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="form-group label-floating is-empty">
                <TextField
                  className="is-invalid"
                  id="email"
                  name="email"
                  label="E-mail"
                  variant="outlined"
                  fullWidth
                />
              </div>

              <button
                type="submit"
                className="btn btn-lg btn-primary full-width"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </LandingPage>
  );
}
