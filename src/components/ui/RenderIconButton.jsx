import { IconButton, styled, useTheme } from "@mui/material";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { tokens } from "../../theme";

const RenderIconButton = ({ children, label, onClick }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const CustomTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: colors.blueAccent[600],
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: colors.blueAccent[600],
    },
  }));

  return (
    <CustomTooltip title={label}>
      <IconButton
        sx={{ "&:hover": { backgroundColor: colors.blueAccent[600] } }}
        onClick={onClick}
        aria-label={label}
      >
        {children}
      </IconButton>
    </CustomTooltip>
  );
};
export default RenderIconButton;
