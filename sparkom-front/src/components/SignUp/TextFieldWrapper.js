import { TextField } from "@material-ui/core";
import React from "react";
import { useField } from "formik";
export default function TextFieldWrapper({ name, ...otherProps }) {
  const [field, meta] = useField(name);
  const configureTextfield = {
    ...field,
    ...otherProps,
    fullWidth: true,
    variant: "outlined",
  };
  if (meta && meta.touched && meta.error) {
    configureTextfield.error = true;
    configureTextfield.helperText = meta.error;
  }
  return <TextField {...configureTextfield} />;
}
