import React from "react";
import TextField from "@material-ui/core/TextField";
import { Checkbox } from "@material-ui/core";
export default function ChangePassword() {
  return (
    <>
      <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="form-group label-floating">
          <TextField
            id="outlined-basic"
            label="Current Password"
            variant="outlined"
            fullWidth
          />
        </div>
      </div>

      <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
        <div className="form-group label-floating is-empty">
          <TextField
            id="outlined-basic"
            label="New Password"
            variant="outlined"
            fullWidth
          />
        </div>
      </div>
      <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
        <div className="form-group label-floating is-empty">
          <TextField
            id="outlined-basic"
            label="Confirm Password"
            variant="outlined"
            fullWidth
          />
        </div>
      </div>

      <div className="col col-lg-12 col-sm-12 col-sm-12 col-12">
        <div className="remember">
          <div className="checkbox">
            <label>
              <Checkbox color="primary" />
              Remember Me
            </label>
          </div>

          <a href="#" className="forgot">
            Forgot my Password
          </a>
        </div>
      </div>
    </>
  );
}
