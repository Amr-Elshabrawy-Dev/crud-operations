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
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  return (
    <DrawerHeader>
      <Box>
        <Collapse in={!isCollapsed} orientation="horizontal">
          <Typography
            variant="h4"
            sx={{
              p: 1,
              color: colors.grey[100],
            }}
          >
            MENU
          </Typography>
        </Collapse>
      </Box>
      <IconButton
        onClick={handleToggle}
        sx={{
          "&.MuiIconButton-root:hover,&.MuiIconButton-root:active": {
            backgroundColor: "transparent !important",
            color: `${colors.blueAccent[500]} !important`,
            transition: "all 0.5s ease-in-out",
          },
        }}
      >
        {isCollapsed ? <MenuOutlinedIcon /> : <ChevronLeftIcon />}
      </IconButton>
    </DrawerHeader>
  );
};
export default SidebarHeader;
