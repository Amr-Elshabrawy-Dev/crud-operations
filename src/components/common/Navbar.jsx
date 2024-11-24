import { Box, Divider, IconButton, InputBase, useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";
import { useContext } from "react";
import SearchIcon from "@mui/icons-material/Search";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NavbarActions from "../ui/NavbarActions";

const Navbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const actionButtons = [
    {
      title: theme.palette.mode === "dark" ? "Light Mode" : "Dark Mode",
      icon:
        theme.palette.mode === "dark" ? (
          <LightModeOutlinedIcon />
        ) : (
          <DarkModeOutlinedIcon />
        ),
      handleClick: colorMode.toggleColorMode,
    },
    { title: "Notifications", icon: <NotificationsOutlinedIcon /> },
    { title: "Settings", icon: <SettingsOutlinedIcon /> },
    {
      title: "Profile",
      icon: <PersonOutlineIcon />,
      options: ["signIn", "signUp"],
    },
  ];

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: colors.primary[400],
          px: 2,
          ...theme.mixins.toolbar,
        }}
      >
        {/* SEARCH BAR */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: colors.primary[900],
            borderRadius: "5px",
            px: 1,
          }}
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

        {/* Action Buttons */}
        <Box display="flex" alignItems="center" gap={1}>
          {actionButtons.map((button, idx) => (
            <NavbarActions
              key={idx}
              title={button.title}
              icon={button.icon}
              options={button.options}
              handleClick={button.handleClick}
            />
          ))}
        </Box>
      </Box>
      <Divider />
    </>
  );
};

export default Navbar;
