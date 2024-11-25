import { CheckCircle } from "@mui/icons-material";
import { Alert, Slide, Snackbar } from "@mui/material";

const CustomAlert = ({ message, open, handleClose, severity }) => {
  function SlideTransition(props) {
    return <Slide {...props} direction="down" />;
  }
  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        onClose={handleClose}
        TransitionComponent={SlideTransition}
        autoHideDuration={5000}
        sx={{
          mt: 6,
        }}
      >
        <Alert
          onClose={handleClose}
          severity={severity}
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
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};
export default CustomAlert;
