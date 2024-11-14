import React from "react";
import {
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarFilterButton,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";
import { Button, useTheme } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { tokens } from "../../theme";

const CustomToolbar = ({ onDelete, isDeleteDisabled }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <GridToolbarContainer
      sx={{
        justifyContent: "space-between",
        backgroundColor: colors.primary[400],
        "& .MuiButtonBase-root": {
          color: `${colors.grey[100]}`,
        },
      }}
    >
      <div>
        <GridToolbarFilterButton />
        <Button
          variant="text"
          onClick={onDelete}
          disabled={isDeleteDisabled}
          sx={{
            fontSize: "11px",
            display: "inline-flex",
            alignItems: "center",
            columnGap: "5px",
            color: isDeleteDisabled
              ? `${colors.redAccent[300]} !important`
              : `${colors.redAccent[500]} !important`,
            transition: "color 0.5s ease-in-out",
          }}
        >
          <Delete />
          Delete
        </Button>
        <GridToolbarExport />
      </div>
      <div>
        <GridToolbarQuickFilter debounceMs={500} />
      </div>
    </GridToolbarContainer>
  );
};

// CustomToolbar.propTypes = {
//   onDelete: PropTypes.func.isRequired,
//   isDeleteDisabled: PropTypes.bool.isRequired,
// };

export default CustomToolbar;
