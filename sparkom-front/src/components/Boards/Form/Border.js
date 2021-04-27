import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import Fileget from "./Fileget";
import validate from "../../../validation/validation";
import FormInput from "../FormInput";
import { Multiselect, DropdownList } from "react-widgets";
import { upper, aadhaar, pan, salary } from "../../../validation/normalize";
import { Button, Card, CardBody, Col, FormGroup, Label } from "reactstrap";
import Select from "react-select";

import Test from "./Test";

const customFileInput = (field) => {
  delete field.input.value;
  return <input type="file" id="file" {...field.input} />;
};

const adaptFileEventToValue = (delegate) => (e) => delegate(e.target.files[0]);

const FileInput = ({
  input: { value: omitValue, onChange, onBlur, ...inputProps },
  meta: omitMeta,
  ...props
}) => {
  return (
    <input
      onChange={adaptFileEventToValue(onChange)}
      onBlur={adaptFileEventToValue(onBlur)}
      type="file"
      {...props.input}
      {...props}
    />
  );
};

const Border = (props) => {
  const { handleSubmit, pristine, submitting } = props;
  return (

  
    <form onSubmit={handleSubmit}>
      <Col sm="12">
        <Card className="card-border">
          <CardBody>
         
            <FormGroup row>
              <Col xs="12" lg="6">
                <Field
                  name="Boardname"
                  type="text"
                  component={FormInput}
                  label="name"
                  inputPlaceHolder="name"
                />
              </Col>
              <Col xs="12" lg="6">
                <Field
                  name="Ispublic"
                  type="text"
                  component={FormInput}
                  label="type"
                  inputPlaceHolder="Enter .."
                />
              </Col>
            </FormGroup>
        
          </CardBody>
          <div style={{ paddingBottom: 30 }}>
          <Button
              color="primary"
              className="btn-pill pull-right"
              type="submit"
              style={{ marginRight: "20px" }}
              disabled={pristine || submitting}
            >
              Save &nbsp;
              <i className="fa fa-check" />
            </Button>
          </div>
        </Card>
      </Col>
    </form>
  );
};

Border.propTypes = {
  handleSubmit: PropTypes.func,
 
};

export default reduxForm({
  form: "wizardForm",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(Border);
