import React, { Component } from "react";
import PropTypes from "prop-types";
import Stepper from "react-stepper-horizontal";
import { Card } from "reactstrap";

import Border from "./Border";


class Form extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
      page: 0,
      steps: [
      
        { title: "Group Details" },
      
      ],
    };
  }

  

  render() {
    const { onSubmit } = this.props;
    const { page, steps } = this.state;

    return (
      <Card>
        <Stepper steps={steps} activeStep={page} />
        {page === 0 &&  <Border   onSubmit={onSubmit}/>}
      
      </Card>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func,
};

export default Form;
