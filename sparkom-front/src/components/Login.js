import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { useDispatch, useSelector } from "react-redux";
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
import { useFormik } from "formik";
import * as Yup from "yup";
import { useHistory, Redirect } from "react-router-dom";
import { queryApi } from "../utils/queryApi";
import { login } from "../store/slices/auth";
//********************************************** */
export default function Login() {
  const history = useHistory();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [showLoader, setShowLoader] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState({ visible: false, message: "" });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yupSchema,
    onSubmit: async (values) => {
      setShowLoader(true);
      const [res, err] = await queryApi("users/login", values, "POST", false);
      if (err) {
        setShowLoader(false);
        setError({
          visible: true,
          message: err,
        });
      } else {
        localStorage.setItem("token", res.token);
        dispatch(login(res));

        history.push("/me");
      }
    },
  });
  //* check if user connected
  if (isAuthenticated) return <Redirect to="/me" />;

  return (
    <LandingPage>
      <div className="registration-login-form pl-0">
        <div className="title h6">
          <b>Login to your Account</b>
        </div>
        <form className="content" onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="form-group label-floating is-empty">
                <TextField
                  className="is-invalid"
                  id="email"
                  name="email"
                  label="E-mail"
                  variant="outlined"
                  value={formik.values.email}
                  helperText={formik.touched.email && formik.errors.email}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  onChange={formik.handleChange}
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
                    name="password"
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
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                  />
                </FormControl>
                <p className="text-danger ml-1 mt-1">
                  {formik.touched.password && formik.errors.password}
                </p>
              </div>

              {error.visible && (
                <div class="alert alert-danger" role="alert">
                  {error.message}
                </div>
              )}
              {showLoader && <p>Loading</p>}

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

              <button
                type="submit"
                className="btn btn-lg btn-primary full-width"
              >
                Login
              </button>

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

//********************************************** */
const yupSchema = Yup.object({
  email: Yup.string()
    .email("invalid email")
    .min(8, "Minimum 3 caractéres")
    .max(40, "Maximum 40 caractéres")
    .required("Champs requis!"),
  password: Yup.string()
    .min(7, "Minimum 7 caractéres")
    .max(80, "Maximum 80 caractéres")
    .required("Champs requis!"),
});
