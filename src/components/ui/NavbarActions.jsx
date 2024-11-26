import { memo, useCallback, useState } from "react";
import { Button, IconButton, Menu, MenuItem, useTheme } from "@mui/material";
import CustomTooltip from "./CustomTooltip";
import { tokens } from "../../theme";
import { Link } from "react-router-dom";

const NavbarActions = memo(({ title, icon, options = null, handleClick }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const isMenuOpen = Boolean(menuAnchorEl);

  const handleMenuClick = useCallback(
    (event) => {
      setMenuAnchorEl(event.currentTarget);
    },
    [setMenuAnchorEl]
  );

  const handleMenuClose = useCallback(() => {
    setMenuAnchorEl(null);
  }, [setMenuAnchorEl]);

  const menuPaperStyle = {
    backgroundColor: colors.primary[400],
    filter: `drop-shadow(0px 2px 8px ${colors.primary[900]})`,
    mt: 2,
  };

  return (
    <>
      <div>
        <Button
          component={"div"}
          variant="text"
          sx={{
            minWidth: "auto",
            p: 0,
          }}
          id="basic-button"
          aria-controls={isMenuOpen ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={isMenuOpen ? "true" : undefined}
          onClick={options ? handleMenuClick : handleClick}
        >
          <CustomTooltip title={title}>
            <IconButton
              sx={{
                transition: "all 0.3s ease-in-out",
                "&:hover": { backgroundColor: colors.blueAccent[600] },
              }}
            >
              {icon}
            </IconButton>
          </CustomTooltip>
        </Button>
        {options && (
          <Menu
            id="basic-menu"
            anchorEl={menuAnchorEl}
            open={isMenuOpen}
            onClose={handleMenuClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            slotProps={{
              paper: {
                sx: menuPaperStyle,
              },
            }}
          >
            {Array.isArray(options) ? (
              options.map((option, idx) => (
                <MenuItem
                  key={idx}
                  component={Link}
                  to={option}
                  onClick={handleMenuClose}
                >
                  {option}
                </MenuItem>
              ))
            ) : (
              <MenuItem component={Link} to={options} onClick={handleMenuClose}>
                {options}
              </MenuItem>
            )}
          </Menu>
        )}
      </div>
    </>
  );
});
export default NavbarActions;
