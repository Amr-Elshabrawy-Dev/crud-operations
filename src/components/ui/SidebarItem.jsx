import { styled, Typography, useTheme } from "@mui/material";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { tokens } from "../../theme";
import { NavLink } from "react-router-dom";
import { MenuItem } from "react-pro-sidebar";
const SidebarItem = ({ title, to, icon, isCollapsed }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const CustomTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(() => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: colors.blueAccent[500],
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: colors.blueAccent[500],
    },
  }));

  return (
    <CustomTooltip
      title={title}
      placement="right"
      disableHoverListener={!isCollapsed}
      disableTouchListener={!isCollapsed}
    >
      <MenuItem
        component={<NavLink to={to} />}
        icon={icon}
        style={{
          color: colors.grey[100],
        }}
      >
        <Typography>{title}</Typography>
      </MenuItem>
    </CustomTooltip>
  );
};

export default SidebarItem;
