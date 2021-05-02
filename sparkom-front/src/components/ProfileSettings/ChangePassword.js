import React, { useState } from "react";

import { FormControl, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
export default function ChangePassword() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <form>
      <div className="row">
        <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="form-group label-floating">
            <FormControl variant="outlined" fullWidth style={{ width: "48%" }}>
              <InputLabel htmlFor="outlined-adornment-password">
                Current Password
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
                labelWidth={130}
              />
            </FormControl>
          </div>
        </div>

        <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="form-group label-floating is-empty">
            <FormControl variant="outlined" fullWidth>
              <InputLabel htmlFor="outlined-adornment-password">
                New Password
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
                labelWidth={110}
              />
            </FormControl>
          </div>
        </div>
        <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="form-group label-floating is-empty">
            <FormControl variant="outlined" fullWidth>
              <InputLabel htmlFor="outlined-adornment-password">
                Confirm Password
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
                labelWidth={130}
              />
            </FormControl>
          </div>
        </div>

        <div className="col col-lg-12 col-sm-12 col-sm-12 col-12">
          <div className="remember">
            <a href="#top" className="forgot mb-4">
              Forgot my Password
            </a>
          </div>
        </div>

        <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
          <button
            type="restore"
            className="btn btn-secondary btn-lg full-width"
          >
            Restore all Attributes
          </button>
        </div>
        <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
          <button type="submit" className="btn btn-primary btn-lg full-width">
            Save all Changes
          </button>
        </div>
      </div>
    </form>
  );
}
