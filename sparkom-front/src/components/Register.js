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

//**************************************************************************** */
export default function Register() {
  const [gender, setGender] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [selectedDate, setSelectedDate] = useState();

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
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
            <form className="content">
              <div className="row">
                <div className="col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group label-floating is-empty">
                    <TextField
                      id="firstname"
                      label="First Name"
                      variant="outlined"
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
                      fullWidth
                    />
                  </div>
                </div>
                <div className="col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group label-floating is-empty">
                    {/** Gender*/}
                    <FormControl variant="outlined" fullWidth>
                      <InputLabel id="gender-label">Gender</InputLabel>
                      <Select
                        labelId="gender-label"
                        id="gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        label="Gender"
                      >
                        <MenuItem value="m">Male</MenuItem>
                        <MenuItem value="f">Female</MenuItem>
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
                          value={selectedDate}
                          onChange={handleDateChange}
                          fullWidth
                        />
                      </div>
                    </MuiPickersUtilsProvider>
                  </div>

                  {/** Phone Number*/}

                  <MuiPhoneNumber
                    defaultCountry={"tn"}
                    variant="outlined"
                    onChange=""
                    label="Phone Number"
                    fullWidth
                  />

                  <div className="form-group label-floating is-empty "></div>
                  <a href="#" className="btn btn-primary btn-lg full-width">
                    Complete Registration!
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </LandingPage>
  );
}