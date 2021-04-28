import React from "react";
import LandingPage from "./LandingPage";
import BusinessIcon from "@material-ui/icons/Business";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import TextField from "@material-ui/core/TextField";
import DateFnsUtils from "@date-io/date-fns";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { useState } from "react";
import MuiPhoneNumber from "material-ui-phone-number";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { FormControl, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import OutlinedInput from "@material-ui/core/OutlinedInput";

import InputAdornment from "@material-ui/core/InputAdornment";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { queryApi } from "../utils/queryApi";
//**************************************************************************** */
export default function Register() {
  const [gender, setGender] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [selectedDate, setSelectedDate] = useState();
  const [error, setError] = useState({ visible: false, message: "" });
  const history = useHistory();
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      username: "",
      gender: ["Male", "Female"],
      email: "",
      password: "",
      birthday: "",
      phone: 0,
    },
    validationSchema: yupSchema,
    onSubmit: async (values) => {
      const [res, err] = await queryApi("users", values, "POST", false);
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
        {/* Nav tabs */}
        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item">
            <Link to="/signup" className="nav-link active" role="tab">
              <svg className="olymp-register-icon ">
                <PersonAddOutlinedIcon />
              </svg>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/company" className="nav-link" role="tab">
              <svg className="olymp-register-icon c-primary">
                <BusinessIcon />
              </svg>
            </Link>
          </li>
        </ul>
        {/* Tab panes */}
        <div className="tab-content">
          <div
            className="tab-pane active"
            id="home"
            role="tabpanel"
            data-mh="log-tab"
          >
            <div className="title h6">Register to Sparkom</div>
            <form className="content" onSubmit={formik.handleSubmit}>
              <div className="row">
                <div className="col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group label-floating is-empty">
                    <TextField
                      id="firstname"
                      label="First Name"
                      variant="outlined"
                      value={formik.values.firstname}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.firstname &&
                        Boolean(formik.errors.firstname)
                      }
                      helperText={
                        formik.touched.firstname && formik.errors.firstname
                      }
                      fullWidth
                    />
                  </div>
                </div>
                <div className="col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group label-floating is-empty">
                    <TextField
                      id="lastname"
                      label="Last Name"
                      variant="outlined"
                      value={formik.values.lastname}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.lastname &&
                        Boolean(formik.errors.lastname)
                      }
                      helperText={
                        formik.touched.lastname && formik.errors.lastname
                      }
                      fullWidth
                    />
                  </div>
                </div>

                <div className="col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group label-floating is-empty">
                    <TextField
                      id="username"
                      label="Username"
                      variant="outlined"
                      value={formik.values.username}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.username &&
                        Boolean(formik.errors.username)
                      }
                      helperText={
                        formik.touched.username && formik.errors.username
                      }
                      fullWidth
                    />
                  </div>
                </div>
                <div className="col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group label-floating is-empty">
                    {/** Gender*/}
                    <FormControl variant="outlined" fullWidth>
                      <InputLabel id="gender">Gender</InputLabel>
                      <Select
                        labelId="gender"
                        id="gender"
                        //onChange={(e) => setGender(e.target.value)}
                        value={formik.values.gender[0]}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.gender && Boolean(formik.errors.gender)
                        }
                        helperText={
                          formik.touched.gender && formik.errors.gender
                        }
                        label="Gender"
                        defaultValue=" "
                      >
                        {formik.values.gender.map(
                          (option) => (
                            <MenuItem value={option} key={option}>
                              {option}
                            </MenuItem>
                          )
                          // <MenuItem key={option} value={option}>
                          //   {option.name}
                          // </MenuItem>
                        )}
                        {/* <MenuItem value="m">Male</MenuItem>
                        <MenuItem value="f">Female</MenuItem> */}
                      </Select>
                    </FormControl>
                  </div>
                </div>

                <div className="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <div className="form-group label-floating is-empty">
                    <TextField
                      id="email"
                      label="Your Email"
                      variant="outlined"
                      type="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.email && Boolean(formik.errors.email)
                      }
                      helperText={formik.touched.email && formik.errors.email}
                      fullWidth
                    />
                  </div>
                  <div className="form-group label-floating is-empty ">
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
                              {showPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.password &&
                          Boolean(formik.errors.password)
                        }
                        helperText={
                          formik.touched.password && formik.errors.password
                        }
                        labelWidth={70}
                      />
                    </FormControl>
                  </div>
                  <div className="form-group date-time-picker label-floating">
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <div className="form-group label-floating">
                        <KeyboardDatePicker
                          id="birthday"
                          inputVariant="outlined"
                          label="Birthday"
                          format="MM/dd/yyyy"
                          value={formik.values.birthday}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.birthday &&
                            Boolean(formik.errors.birthday)
                          }
                          fullWidth
                        />
                      </div>
                    </MuiPickersUtilsProvider>
                  </div>

                  {/** Phone Number*/}

                  <MuiPhoneNumber
                    defaultCountry={"tn"}
                    id="phone"
                    variant="outlined"
                    label="Phone Number"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                    fullWidth
                  />
                  {console.log(formik.values)}
                  <div className="form-group label-floating is-empty "></div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg full-width"
                  >
                    Complete Registration!
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </LandingPage>
  );
}

const yupSchema = Yup.object({
  email: Yup.string().email("must be a valid email").required("Champs requis!"),
  password: Yup.string().required("Champs requis!"),
  gender: Yup.string().required("Champs requis!"),
});
