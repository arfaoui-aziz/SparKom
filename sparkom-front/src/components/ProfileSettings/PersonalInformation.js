import TextField from "@material-ui/core/TextField";
import DateFnsUtils from "@date-io/date-fns";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import MuiPhoneNumber from "material-ui-phone-number";
import { useState } from "react";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { FormControl } from "@material-ui/core";
const PersonalInformation = () => {
  const [gender, setGender] = useState("");
  const [selectedDate, setSelectedDate] = useState();

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

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
            label="Username"
            variant="outlined"
            fullWidth
          />
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
            type="email"
            variant="outlined"
            fullWidth
          />
        </div>

        <MuiPhoneNumber
          defaultCountry={"tn"}
          variant="outlined"
          onChange=""
          label="Phone Number"
          fullWidth
        />
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
