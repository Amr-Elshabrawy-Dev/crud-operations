import React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
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
  select = false,
  options = [],
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
      select={select}
    >
      {select &&
        options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
    </TextField>
  );
};

export default FormTextField;
