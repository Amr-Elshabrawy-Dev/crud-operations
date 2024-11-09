import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <Box
      height={"90vh"}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap={4}
    >
      <img width={400} src="assets/404-error.svg" alt="not found" />
      <Typography variant="h3" fontWeight={500}>
        Try a Different Destination or Head Back to The
      </Typography>
      <Button component={Link} color="secondary" variant="contained" to="/" sx={{color: "#fff", fontWeight: "700", fontSize: "16px"}}>
        homepage
      </Button>
    </Box>
  );
};
export default Error;
