import TextField from "@material-ui/core/TextField";
import DateFnsUtils from "@date-io/date-fns";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { useState } from "react";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { FormControl } from "@material-ui/core";
const PersonalInformation = () => {
  const [gender, setGender] = useState("");

  const handleChange = (event) => {
    setGender(event.target.value);
  };
  return (
    <>
      {/*first Column*/}
      <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
        <div className="form-group label-floating">
          <TextField
            id="outlined-basic"
            label="FirstName"
            variant="outlined"
            color="primary"
            fullWidth
          />
        </div>

        <div className="form-group label-floating">
          <TextField
            id="outlined-basic"
            label="LastName"
            variant="outlined"
            fullWidth
          />
        </div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <div className="form-group label-floating">
            <KeyboardDatePicker
              margin="normal"
              inputVariant="outlined"
              id="date-picker-dialog"
              label="Birthday"
              format="MM/dd/yyyy"
              fullWidth
            />
          </div>
        </MuiPickersUtilsProvider>
      </div>
      {/* Column 2 Start */}
      <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
        <div className="form-group label-floating">
          <TextField
            id="outlined-basic"
            label="LastName"
            variant="outlined"
            fullWidth
          />
        </div>

        <div className="form-group label-floating">
          <TextField
            id="outlined-basic"
            label="E-mail"
            variant="outlined"
            fullWidth
          />
        </div>

        <div className="form-group label-floating ">
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
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={2}
            variant="outlined"
            fullWidth
          />
        </div>
      </div>
      <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
        <div className="form-group label-floating is-empty">
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="gender-label">Gender</InputLabel>
            <Select
              labelId="gender-label"
              id="gender"
              value={gender}
              onChange={handleChange}
              label="Gender"
            >
              <MenuItem value="m">Male</MenuItem>
              <MenuItem value="f">Female</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="form-group label-floating">
          <TextField
            id="outlined-basic"
            label="Occupation"
            variant="outlined"
            fullWidth
          />
        </div>
      </div>
    </>
  );
};

export default PersonalInformation;
