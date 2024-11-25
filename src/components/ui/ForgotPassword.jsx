import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  useTheme,
} from "@mui/material";
import * as yup from "yup";
import { tokens } from "../../theme";
import ReusableForm from "./ReusableForm";
import { Close } from "@mui/icons-material";

const fields = [
  { label: "Email", name: "email", gridColumn: "span 4" },
]
const initialValues = {
  email: "",
}
const userSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email")
    .required("Required"),
})

function ForgotPassword({ open, handleClose }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        sx: { background: colors.primary[500], color: colors.grey[100] },
      }}
    >
      <DialogTitle>Reset password</DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={(theme) => ({
          position: "absolute",
          right: 8,
          top: 8,
          color: theme.palette.grey[500],
        })}
      >
        <Close />
      </IconButton>
      <DialogContent
        sx={{ display: "flex", flexDirection: "column", gap: 2, width: "100%" }}
      >
        <DialogContentText>
          Enter your account&apos;s email address, and we&apos;ll send you a
          link to reset your password.
        </DialogContentText>
        <ReusableForm
          fields={fields}
          initialValues={initialValues}
          validationSchema={userSchema}
          buttonText="Reset Password"
          buttonWidth="200px"
          handleOnSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
            handleClose();
          }}
        />
      </DialogContent>
    </Dialog>
  );
}

export default ForgotPassword;
