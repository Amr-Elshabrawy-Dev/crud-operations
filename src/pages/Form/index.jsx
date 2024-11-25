import * as yup from "yup";
import { alpha, Box, Card, useTheme } from "@mui/material";
import Heading from "../../components/common/Heading";
import ReusableForm from "../../components/ui/ReusableForm";
import { tokens } from "../../theme";
import { useState } from "react";
import CustomAlert from "../../components/ui/CustomAlert";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  country: "",
  city: "",
  permissions: "user",
};

const phoneRegEx =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const emailRegEx =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const userSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(3, "Too Short!")
    .max(12, "Too Long!")
    .required("required"),
  lastName: yup
    .string()
    .min(3, "Too Short!")
    .max(12, "Too Long!")
    .required("required"),
  email: yup
    .string()
    .matches(emailRegEx, "Invalid email address")
    .required("required"),
  contact: yup
    .string()
    .matches(phoneRegEx, "Invalid phone number")
    .required("required"),
  country: yup
    .string()
    .min(3, "Too Short!")
    .max(20, "Too Long!")
    .required("required"),
  city: yup
    .string()
    .min(3, "Too Short!")
    .max(20, "Too Long!")
    .required("required"),
});

const selectPermissions = [
  { value: "admin", label: "Admin" },
  { value: "manger", label: "Manger" },
  { value: "user", label: "User" },
];

const fields = [
  { label: "First Name", name: "firstName", gridColumn: "span 2" },
  { label: "Last Name", name: "lastName", gridColumn: "span 2" },
  { label: "Email Address", name: "email", gridColumn: "span 4" },
  { label: "Contact Number", name: "contact", gridColumn: "span 4" },
  { label: "Your Country", name: "country", gridColumn: "span 2" },
  { label: "Your City", name: "city", gridColumn: "span 2" },
  {
    label: "Permissions",
    name: "permissions",
    gridColumn: "span 4",
    select: true,
    options: selectPermissions,
  },
];

const Form = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [openAlert, setOpenAlert] = useState(false);

  const handleAlertClose = () => {
    setOpenAlert(false);
  };
  const handleFormSubmit = async (values, actions) => {
    try {
      if (!values || Object.keys(values).length === 0) {
        throw new Error("No values provided");
      }
      console.log("Form submitted:", values);
      // Simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert(JSON.stringify(values, null, 2));
      setOpenAlert(true);
    } catch (error) {
      console.error("Error during form submission:", error);
    } finally {
      actions.resetForm();
      actions.setSubmitting(false);
    }
  };
  return (
    <Box m={2}>
      <Heading title="CREATE USER" subtitle="Create a New User Profile" />
      <Card
        sx={{
          background: colors.primary[500],
          color: colors.grey[100],
          width: "100%",
          padding: theme.spacing(4),
          margin: "auto",
          borderRadius: "15px",
          boxShadow: `inset -3px 3px 10px ${alpha(
            colors.primary[700],
            0.4
          )}, inset 3px -3px 10px ${alpha(colors.primary[400], 0.4)}`,
        }}
      >
        <ReusableForm
          fields={fields}
          initialValues={initialValues}
          validationSchema={userSchema}
          handleOnSubmit={handleFormSubmit}
          buttonText="Create User"
          buttonWidth="250px"
        />
      </Card>
      <CustomAlert
        open={openAlert}
        handleClose={handleAlertClose}
        message={"User created successfully"}
        severity="success"
      />
    </Box>
  );
};
export default Form;
