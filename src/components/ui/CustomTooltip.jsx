import { styled, useTheme } from "@mui/material";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { tokens } from "../../theme";

const CustomTooltip = ({
  title,
  placement = "bottom",
  disableHoverListener = false,
  disableTouchListener = false,
  children,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const TooltipStyle = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(() => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: colors.blueAccent[600],
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: colors.blueAccent[600],
    },
    [`&.${tooltipClasses.popper}[data-popper-placement*="right"] .${tooltipClasses.tooltip}`]:
      {
        marginLeft: "0px",
      },
  }));

  return (
    <TooltipStyle
      title={title}
      placement={placement}
      disableHoverListener={disableHoverListener}
      disableTouchListener={disableTouchListener}
    >
      {children}
    </TooltipStyle>
  );
};
export default CustomTooltip;
