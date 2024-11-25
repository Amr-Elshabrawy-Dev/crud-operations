import * as yup from "yup";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../../theme";
import { alpha } from "@mui/material/styles";
import { FacebookRounded, Google, SpaceDashboard } from "@mui/icons-material";
import Heading from "../../components/common/Heading";
import { Link } from "react-router-dom";
import ReusableForm from "../../components/ui/ReusableForm";
import ForgotPassword from "../../components/ui/ForgotPassword";
import { useState } from "react";
import CustomAlert from "../../components/ui/CustomAlert";

const SignInSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Required"),
  password: yup.string().required("Required"),
});

const SignInInitialValues = {
  email: "",
  password: "",
};

const SignInFields = [
  { label: "Email", name: "email", gridColumn: "span 4" },
  { label: "Password", name: "password", gridColumn: "span 4" },
];

const SignIn = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [openAlert, setOpenAlert] = useState(false);
  const [openForgotPassword, setOpenForgotPassword] = useState(false);

  const handleSubmitForm = (values) => {
    alert(JSON.stringify(values, null, 2));
    setOpenAlert(true);
  };
  const handleAlertClose = () => {
    setOpenAlert(false);
  };

  return (
    <>
      <Stack sx={{ minHeight: "80%", m: 2 }}>
        <Heading title="SignIn" subtitle="Sign in to your account" />
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            alignSelf: "center",
            background: colors.primary[500],
            color: colors.grey[100],
            width: "100%",
            padding: theme.spacing(4),
            gap: theme.spacing(2),
            margin: "auto",
            borderRadius: "30px",
            boxShadow: `inset -3px 3px 10px ${alpha(
              colors.primary[700],
              0.4
            )}, inset 3px -3px 10px ${alpha(colors.primary[400], 0.4)}`,
            [theme.breakpoints.up("sm")]: {
              maxWidth: "450px",
            },
          }}
        >
          <Heading
            title={
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <SpaceDashboard fontSize="large" color="secondary" />
                <span>Dashboard</span>
              </Box>
            }
            subtitle="SignIn"
            direction="row"
          />
          <ReusableForm
            fields={SignInFields}
            initialValues={SignInInitialValues}
            validationSchema={SignInSchema}
            handleOnSubmit={handleSubmitForm}
            buttonText="Sign In"
          />
          <Button
            variant="text"
            size="small"
            sx={{
              alignSelf: "center",
              color: colors.grey[400],
              p: 0,
              textTransform: "none",
              "&:hover": {
                textDecoration: "underline",
                backgroundColor: "transparent !important",
              },
            }}
            onClick={() => setOpenForgotPassword(true)}
          >
            Forgot your password?
          </Button>
          <ForgotPassword
            open={openForgotPassword}
            handleClose={() => setOpenForgotPassword(false)}
          />
          <Divider>or</Divider>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => alert("Sign in with Google")}
              startIcon={<Google />}
              sx={{ textTransform: "none" }}
            >
              Sign in with Google
            </Button>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => alert("Sign in with Facebook")}
              startIcon={<FacebookRounded />}
              sx={{ textTransform: "none" }}
            >
              Sign in with Facebook
            </Button>
            <Typography sx={{ textAlign: "center" }}>
              Don&apos;t have an account?{" "}
              <Typography
                component={Link}
                to="/signUp"
                variant="body2"
                sx={{
                  textDecoration: "none",
                  color: colors.grey[400],
                }}
              >
                SignUp
              </Typography>
            </Typography>
          </Box>
        </Card>
        <CustomAlert
          open={openAlert}
          handleClose={handleAlertClose}
          message={"Sign in successful"}
          severity="success"
        />
      </Stack>
    </>
  );
};

export default SignIn;
