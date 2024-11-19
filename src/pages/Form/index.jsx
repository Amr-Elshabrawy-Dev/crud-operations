import useMediaQuery from "@mui/material/useMediaQuery";
import Heading from "../../components/common/Heading";
import FormTextField from "../../components/ui/FormTextField";
import * as yup from "yup";
import { useState } from "react";
import { Formik } from "formik";
import { Alert, Box, Button, Slide, Snackbar } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

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
  const isNonMobile = useMediaQuery("(min-width:768px)");
  const [openAlert, setOpenAlert] = useState(false);

  function SlideTransition(props) {
    return <Slide {...props} direction="down" />;
  }

  const handleAlertClose = () => setOpenAlert(false);
  const handleFormSubmit = (values, actions) => {
    console.log("🚀 ~FormSubmit~:", values, actions);
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setOpenAlert(true);
      actions.resetForm();
      actions.setSubmitting(false);
    }, 1000);
  };
  return (
    <Box m={2}>
      <Heading title="CREATE USER" subtitle="Create a New User Profile" />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          isValid,
          dirty,
        }) => (
          <Box
            component={"form"}
            onSubmit={handleSubmit}
            sx={{
              display: "grid",
              gap: "30px",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              p: "20px",
              borderRadius: "10px",
              boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
              "& > div": {
                gridColumn: isNonMobile ? undefined : "span 4",
              },
            }}
          >
            {fields.map((field) => (
              <FormTextField
                key={field.name}
                label={field.label}
                name={field.name}
                value={values}
                touched={touched}
                errors={errors}
                handleBlur={handleBlur}
                handleChange={handleChange}
                gridColumn={field.gridColumn}
                type={field.type || "text"}
                select={field.select || false}
                options={field.options || []}
              />
            ))}
            <Box textAlign="center" gridColumn="span 4">
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                size="large"
                disabled={!isValid || !dirty}
                sx={{ fontWeight: "700", fontSize: "16px" }}
              >
                Create New User
              </Button>
            </Box>
            <Snackbar
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              open={openAlert}
              onClose={handleAlertClose}
              TransitionComponent={SlideTransition}
              autoHideDuration={10_000}
              sx={{
                mt: 6,
              }}
            >
              <Alert
                onClose={handleAlertClose}
                severity="success"
                variant="filled"
                sx={{
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                }}
                iconMapping={{
                  success: <CheckCircle fontSize="inherit" />,
                }}
              >
                🎉 User Created Successfully!
              </Alert>
            </Snackbar>
          </Box>
        )}
      </Formik>
    </Box>
  );
};
export default Form;
