import { Typography } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const TextErrorHandler = ({ title }) => {
  return (
    <Typography variant="inherit" display="flex" gap={0.5}>
      <ErrorOutlineIcon fontSize="small" /> {title}
    </Typography>
  );
};

export default TextErrorHandler;
