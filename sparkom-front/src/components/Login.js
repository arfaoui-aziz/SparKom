import React, { useState } from "react";
import logo from "../assets/img/logosparkom.png";
import TextField from "@material-ui/core/TextField";
import {
  Checkbox,
  FormControlLabel,
  FormControl,
  IconButton,
} from "@material-ui/core";
import LandingPage from "./LandingPage";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Link } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <LandingPage>
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
                <FormControl variant="outlined" fullWidth>
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                    labelWidth={70}
                  />
                </FormControl>
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

              <Link to="/me" className="btn btn-lg btn-primary full-width">
                Login
              </Link>

              <div className="or"></div>

              <a
                href="#"
                className="btn btn-lg bg-google full-width btn-icon-left"
              >
                <i className="fab fa-google" aria-hidden="true"></i>Login with
                Gmail
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
    </LandingPage>
  );
}
