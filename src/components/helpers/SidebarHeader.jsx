import { Box, Collapse, IconButton, Typography, useTheme } from "@mui/material";
import { MenuItem } from "react-pro-sidebar";
import { tokens } from "../../theme";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const SidebarHeader = ({ isCollapsed, handleToggle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      onClick={handleToggle}
      title="Menu"
      style={{
        margin: "10px 0 20px 0",
        color: colors.grey[100],
      }}
    >
      <Box
        display="inline-flex"
        alignItems="center"
        gap={isCollapsed ? 0 : 8}
        ml={isCollapsed ? "0" : "15px"}
        sx={{ transition: "all 0.5s ease-in-out" }}
      >
        <Box>
          <Collapse in={!isCollapsed} orientation="horizontal" timeout={500}>
            <Typography
              variant="h3"
              sx={{
                color: colors.grey[100],
              }}
            >
              ADMINS
            </Typography>
          </Collapse>
        </Box>
        <IconButton
          onClick={handleToggle}
          my="10px"
          width="50%"
          sx={{
            "&.MuiIconButton-root:hover,&.MuiIconButton-root:active": {
              backgroundColor: "transparent !important",
              color: `${colors.blueAccent[500]} !important`,
              transition: "all 0.2s ease-in-out",
            },
          }}
        >
          <MenuOutlinedIcon />
        </IconButton>
      </Box>
    </MenuItem>
  );
};
export default SidebarHeader