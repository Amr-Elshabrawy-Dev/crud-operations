import { Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { NavLink } from "react-router-dom";
import { MenuItem } from "react-pro-sidebar";
const SidebarItem = ({ title, to, icon }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      component={<NavLink to={to} />}
      icon={icon}
      title={title}
      style={{
        color: colors.grey[100],
      }}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};
export default SidebarItem;
