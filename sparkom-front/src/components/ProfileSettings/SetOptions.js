import { useState } from "react";
import IOSSwitch from "./IOSSwitch";

const SetOptions = ({ title, description }) => {
  const [state, setState] = useState({ checkedB: true });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <div class="description-toggle">
      <div class="description-toggle-content">
        <div class="h6">{title}</div>
        <p>{description}</p>
      </div>

      <div class="togglebutton">
        <label>
          <IOSSwitch
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
          />
        </label>
      </div>
    </div>
  );
};

export default SetOptions;
