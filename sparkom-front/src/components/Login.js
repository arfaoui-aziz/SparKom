import React, { useState } from "react";
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
import { useFormik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { queryApi } from "../utils/queryApi";
//********************************************** */
export default function Login() {
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState({ visible: false, message: "" });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yupSchema,
    onSubmit: async (values) => {
      const [res, err] = await queryApi("users/login", values, "POST", false);
      if (err) {
        setError({
          visible: true,
          message: JSON.stringify(err.errors, null, 2),
        });
        console.log(err);
      } else {
        localStorage.setItem("token", res.token);
        history.push("/me");
        console.log(res);
      }
    },
  });
  return (
    <LandingPage>
      <div className="registration-login-form">
        <div className="title h6">
          <b>Login to your Account</b>
        </div>
        <form className="content" onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="form-group label-floating is-empty">
                <TextField
                  id="email"
                  label="E-mail"
                  variant="outlined"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
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

const yupSchema = Yup.object({
  email: Yup.string()
    .email("invalid email")
    .min(8, "Minimum 3 caractéres")
    .max(40, "Maximum 40 caractéres")
    .required("Champs requis!"),
  password: Yup.string()
    .min(7, "Minimum 3 caractéres")
    .max(80, "Maximum 80 caractéres")
    .required("Champs requis!"),
});
