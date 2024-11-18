import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  useTheme,
} from "@mui/material";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { tokens } from "../../theme";
import { NavLink } from "react-router-dom";
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
    [`&.${tooltipClasses.popper}[data-popper-placement*="right"] .${tooltipClasses.tooltip}`]:
      {
        marginLeft: "0px",
      },
  }));

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
            color: `${colors.blueAccent[500]}`,
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
