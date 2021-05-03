import React from "react";
import { Link } from "react-router-dom";
import LandingPage from "../LandingPage";
import BusinessIcon from "@material-ui/icons/Business";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import TextFieldWrapper from "./TextFieldWrapper";

//************************* */
const INITIAL_FORM_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  country: "",
  arrivealDate: "",
  departureDate: "",
  message: "",
  termsOfService: false,
};

const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email.").required("Required"),
  phone: Yup.number()
    .integer()
    .typeError("Please enter a valid phone number")
    .required("Required"),
  addressLine1: Yup.string().required("Required"),
  addressLine2: Yup.string(),
  city: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
  country: Yup.string().required("Required"),
  arrivealDate: Yup.date().required("Required"),
  departureDate: Yup.date().required("Required"),
  message: Yup.string(),
  termsOfService: Yup.boolean()
    .oneOf([true], "The terms and conditions must be accepted.")
    .required("The terms and conditions must be accepted."),
});
//********************************************
export default function Signup() {
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
            {/*   Our Form Start Here*/}
            <Formik
              initialValues={{
                ...INITIAL_FORM_STATE,
              }}
              validationSchema={FORM_VALIDATION}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              <Form>
                <TextFieldWrapper label="name" name="name" />
                <br />
                <TextFieldWrapper label="email" name="email" />
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </LandingPage>
  );
}
