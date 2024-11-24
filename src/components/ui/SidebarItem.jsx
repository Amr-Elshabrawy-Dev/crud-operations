import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import CustomTooltip from "./CustomTooltip";
import { tokens } from "../../theme";
import { NavLink } from "react-router-dom";
const SidebarItem = ({ title, to, icon, isCollapsed }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <CustomTooltip
      title={title}
      placement="right"
      disableHoverListener={!isCollapsed}
      disableTouchListener={!isCollapsed}
    >
      <ListItem
        disablePadding
        sx={{
          "&:hover .MuiListItemIcon-root , &:hover .MuiListItemText-root": {
            backgroundColor: "transparent !important",
            color: `${colors.blueAccent[400]} !important`,
          },
          "& .active .MuiListItemIcon-root, & .active .MuiListItemText-root": {
            backgroundColor: "transparent !important",
            color: `${colors.blueAccent[500]} !important`,
          },
        }}
      >
        <ListItemButton
          component={NavLink}
          to={to}
          sx={{
            height: "50px",
            transition: "0.3s",
            "&:hover": {
              backgroundColor: "transparent !important",
            },
          }}
        >
          <ListItemIcon sx={{ transition: "all 0.3s ease-in-out" }}>
            {icon}
          </ListItemIcon>
          <ListItemText
            sx={{ transition: "all 0.3s ease-in-out" }}
            primary={title}
          />
        </ListItemButton>
      </ListItem>
    </CustomTooltip>
  );
};

export default SidebarItem;
