import { IconButton, Tooltip } from "@mui/material";

const RenderIconButton = ({ children, label, onClick }) => {
  return (
    <Tooltip title={label}>
      <IconButton onClick={onClick} aria-label={label}>
        {children}
      </IconButton>
    </Tooltip>
  );
};
export default RenderIconButton