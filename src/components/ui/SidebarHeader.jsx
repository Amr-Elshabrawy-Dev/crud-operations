import {
  Box,
  Collapse,
  IconButton,
  Typography,
  useTheme,
  styled,
} from "@mui/material";
// import { MenuItem } from "react-pro-sidebar";
import { tokens } from "../../theme";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const SidebarHeader = ({ isCollapsed, handleToggle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    cursor: "pointer",
    padding: theme.spacing(0, 1),
    transition: "all 0.3s ease-in-out",
    "&:hover, &:active": {
      color: `${colors.blueAccent[500]} !important`,
    },
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  return (
    <DrawerHeader onClick={handleToggle}>
      <Box>
        <Collapse in={!isCollapsed} orientation="horizontal">
          <Typography
            variant="h4"
            sx={{
              p: 1,
              color: "inherit",
            }}
          >
            MENU
          </Typography>
        </Collapse>
      </Box>
      <IconButton
        sx={{
          color: "inherit",
          "&.MuiIconButton-root:hover,&.MuiIconButton-root:active": {
            backgroundColor: "transparent !important",
            transition: "all 0.3s ease-in-out",
          },
        }}
      >
        {isCollapsed ? <MenuOutlinedIcon /> : <ChevronLeftIcon />}
      </IconButton>
    </DrawerHeader>
  );
};
export default SidebarHeader;
