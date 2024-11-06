import { Box, IconButton, InputBase, useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";
import { useContext } from "react";
import SearchIcon from "@mui/icons-material/Search";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import RenderIconButton from "../ui/RenderIconButton";

const Navbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        alignItems="center"
        bgcolor={colors.primary[400]}
        borderRadius="3px"
        px={1}
      >
        <InputBase
          sx={{ ml: 1, flex: 1, color: colors.grey[100] }}
          placeholder="Search"
          inputProps={{ "aria-label": "search" }}
        />
        <IconButton
          type="button"
          aria-label="search"
          sx={{ p: 1, color: colors.grey[100] }}
        >
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex" alignItems="center" gap={1}>
        <RenderIconButton
          label={theme.palette.mode === "dark" ? "Light Mode" : "Dark Mode"}
          onClick={colorMode.toggleColorMode}
        >
          {theme.palette.mode === "dark" ? (
            <LightModeOutlinedIcon />
          ) : (
            <DarkModeOutlinedIcon />
          )}
        </RenderIconButton>
        <RenderIconButton label={"Notifications"}>
          <NotificationsOutlinedIcon />
        </RenderIconButton>
        <RenderIconButton label={"Settings"}>
          <SettingsOutlinedIcon />
        </RenderIconButton>
        <RenderIconButton label={"Profile"}>
          <PersonOutlineIcon />
        </RenderIconButton>
      </Box>
    </Box>
  );
};

export default Navbar;
