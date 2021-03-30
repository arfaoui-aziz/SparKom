import React from "react";
import logo from "../assets/img/logosparkom.png";
import TextField from "@material-ui/core/TextField";
import { Checkbox, FormControlLabel } from "@material-ui/core";
export default function Login() {
  return (
    <div className="landing-page">
      <div className="content-bg-wrap"></div>

      <div
        className="header--standard header--standard-landing"
        id="header--standard"
      >
        <div className="container">
          <div className="header--standard-wrap">
            <a href="#" className="logo">
              <div className="img-wrap">
                <img src={logo} style={{ width: "200px" }} alt="Olympus" />
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="header-spacer--standard"></div>

      <div className="container">
        <div className="row display-flex">
          <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="landing-content">
              <h1>Welcome to the Biggest Social Network in the World</h1>
              <p>
                Welcome to Sparkom the Biggest Social Network in the World
                Connecting People from All over the world. Share you thoughts,
                write blog posts, show your favourite music via Stopify, earn
                badges and much more!
              </p>
              <a href="#" className="btn  btn-md btn-border c-white ">
                Register Now!
              </a>
            </div>
          </div>

          <div className="col col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="registration-login-form">
              <div className="title h6">
                <b>Login to your Account</b>
              </div>
              <form className="content">
                <div className="row">
                  <div className="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <div className="form-group label-floating is-empty">
                      <TextField
                        id="email"
                        label="E-mail"
                        variant="outlined"
                        fullWidth
                      />
                    </div>
                    <div className="form-group label-floating is-empty">
                      <TextField
                        id="password"
                        label="Password"
                        variant="outlined"
                        fullWidth
                      />
                    </div>

                    <div className="remember">
                      <div className="checkbox">
                        <FormControlLabel
                          control={<Checkbox color="primary" />}
                          label="Remember Me"
                        />
                      </div>
                      <a href="#" className="forgot">
                        Forgot my Password
                      </a>
                    </div>

                    <a href="#" className="btn btn-lg btn-primary full-width">
                      Login
                    </a>

                    <div className="or"></div>

                    <a
                      href="#"
                      className="btn btn-lg bg-google full-width btn-icon-left"
                    >
                      <i className="fab fa-google" aria-hidden="true"></i>Login
                      with Gmail
                    </a>
                    <a
                      href="#"
                      className="btn btn-lg bg-facebook full-width btn-icon-left"
                    >
                      <i className="fab fa-facebook-f" aria-hidden="true"></i>
                      Login with Facebook
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
