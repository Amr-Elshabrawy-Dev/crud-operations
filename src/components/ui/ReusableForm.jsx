import { Box, Button } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Formik } from "formik";
import FormTextField from "./FormTextField";

const ReusableForm = ({
  fields,
  initialValues,
  validationSchema,
  handleOnSubmit,
  buttonText = "Submit",
  buttonWidth = "100%",
}) => {
  const isNonMobile = useMediaQuery("(min-width:768px)");

  const handleFormSubmit = async (values, actions) => {
    try {
      if (handleOnSubmit) {
        await handleOnSubmit(values, actions);
      } else {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        alert(JSON.stringify(values, null, 2));
      }
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };

  return (
    <>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
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
                value={values[field.name]}
                touched={touched[field.name]}
                errors={errors[field.name]}
                handleBlur={handleBlur}
                handleChange={handleChange}
                gridColumn={field.gridColumn}
                type={field.type || "text"}
                select={field.select || false}
                options={field.options || []}
              />
            ))}
            <Box
              sx={{
                textAlign: buttonWidth === "100%" ? "center" : "right",
                gridColumn: "span 4",
                width: "100%",
                mx: "auto",
              }}
            >
              <Button
                fullWidth
                type="submit"
                variant="contained"
                disabled={!isValid || !dirty}
                sx={{
                  maxWidth: buttonWidth,
                  fontWeight: "600",
                  fontSize: "16px",
                }}
              >
                {buttonText}
              </Button>
            </Box>
          </Box>
        )}
      </Formik>
    </>
  );
};

export default ReusableForm;
