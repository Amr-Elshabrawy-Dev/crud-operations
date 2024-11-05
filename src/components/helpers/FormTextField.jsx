import React from "react";
import TextField from "@mui/material/TextField";
import TextErrorHandler from "./TextErrorHandler";

const FormTextField = ({
  label,
  name,
  value,
  touched,
  errors,
  handleBlur,
  handleChange,
  gridColumn,
  type = "text",
}) => {
  return (
    <TextField
      fullWidth
      variant="filled"
      color="secondary"
      type={type}
      label={label}
      name={name}
      value={value[name]}
      onBlur={handleBlur}
      onChange={handleChange}
      error={!!touched[name] && !!errors[name]}
      helperText={
        touched[name] &&
        errors[name] && <TextErrorHandler title={errors[name]} />
      }
      sx={{ gridColumn }}
    />
  );
};

export default FormTextField;
