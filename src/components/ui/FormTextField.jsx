import React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import TextErrorHandler from "./TextErrorHandler";
import { InputAdornment, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import {
  Email,
  Flag,
  LocationCity,
  Person,
  Phone,
  WorkspacePremium,
} from "@mui/icons-material";

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
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <TextField
      fullWidth
      variant="outlined"
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
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              {name === "email" && <Email />}
              {name === "contact" && <Phone />}
              {name === "country" && <Flag />}
              {name === "city" && <LocationCity />}
              {name === "permissions" && <WorkspacePremium />}
              {name === "firstName" || name === "lastName" ? <Person /> : null}
            </InputAdornment>
          ),
        },
      }}
      sx={{
        gridColumn,
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            transition: "all 0.3s ease-in-out",
            borderColor: colors.grey[100],
            willChange: "border-color, border-width",
          },
          "&:hover fieldset": {
            borderColor: colors.greenAccent[600],
          },
          "&.Mui-focused fieldset": {
            borderColor: colors.greenAccent[600],
            borderWidth: "2px",
          },
        },
      }}
      select={select}
    >
      {select &&
        options &&
        options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
    </TextField>
  );
};

export default FormTextField;
