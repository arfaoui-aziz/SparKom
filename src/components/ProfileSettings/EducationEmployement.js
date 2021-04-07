import { TextField } from "@material-ui/core";
import React from "react";

export default function EducationEmployement() {
  return (
    <>
      <div classNameName="col col-lg-6 col-md-6 col-sm-12 col-12">
        <div className="form-group label-floating">
          <TextField
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            fullWidth
          />
        </div>
      </div>

      <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
        <div className="form-group label-floating">
          <TextField
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            fullWidth
          />
        </div>
      </div>

      <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="form-group label-floating">
          <label className="control-label">Description</label>
          <textarea className="form-control" placeholder="">
            Bachelor of Interactive Design in the New College. It was a five
            years intensive career. Average: A+
          </textarea>
        </div>
      </div>
    </>
  );
}
