import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box, Button } from "@mui/material";
import Heading from "../../components/common/Heading";
import FormTextField from "../../components/helpers/FormTextField";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  country: "",
  city: "",
};

const phoneRegEx =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const emailRegEx =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const userSchema = yup.object().shape({
  firstName: yup.string().min(3, 'Too Short!').max(12, 'Too Long!').required("required"),
  lastName: yup.string().min(3, 'Too Short!').max(12, 'Too Long!').required("required"),
  email: yup
    .string()
    .matches(emailRegEx, "Email address is not matched")
    .required("required"),
  contact: yup
    .string()
    .matches(phoneRegEx, "Phone number is not matched")
    .required("required"),
  country: yup.string().min(3, 'Too Short!').max(20, 'Too Long!').required("required"),
  city: yup.string().min(3, 'Too Short!').max(20, 'Too Long!').required("required"),
});



const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:768px)");

  const fields = [
    {
      label: "First Name",
      name: "firstName",
      gridColumn: isNonMobile ? "span 2" : "span 4",
    },
    {
      label: "Last Name",
      name: "lastName",
      gridColumn: isNonMobile ? "span 2" : "span 4",
    },
    { label: "Email Address", name: "email", gridColumn: "span 4" },
    { label: "Contact Number", name: "contact", gridColumn: "span 4" },
    { label: "Your Country", name: "country", gridColumn: "span 4" },
    { label: "Your City", name: "city", gridColumn: "span 4" },
  ];

  const handleFormSubmit = (values, actions) => {
    // console.log("🚀 ~FormSubmit~:", value);
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
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
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
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
                />
              ))}
            </Box>
            <Box display="flex" justifyContent="center" mt={4}>
              <Button type="submit" color="secondary" variant="contained">
                Create New User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};
export default Form;
