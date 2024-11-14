import React from "react";
import { Box, Stack, useTheme } from "@mui/material";
import Heading from "../../components/common/Heading";
import { tokens } from "../../theme";
import { DataGrid } from "@mui/x-data-grid";

const DataTable = ({
  rows,
  columns,
  title,
  subtitle,
  slots,
  slotProps,
  checkboxSelection,
  onSelectionChange,
  customStyles = {},
  renderCellContent,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Merge custom styles with default styles
  const dataGridStyles = {
    height: "75dvh",
    width: "100%",
    mx: "auto",
    mt: 5,
    "& .MuiDataGrid-columnHeaderTitle": { fontWeight: "bold" },
    "& .MuiDataGrid-cell": { border: 0 },
    "& .MuiDataGrid-columnHeader": {
      borderBottom: `3px solid ${colors.redAccent[600]}`,
    },
    "& .MuiDataGrid-iconSeparator": { color: colors.primary[400] },
    "& .MuiDataGrid-virtualScroller": { backgroundColor: colors.primary[400] },
    "& .MuiDataGrid-footerContainer": {
      borderTop: 0,
      backgroundColor: colors.blueAccent[700],
      "& .MuiTablePagination-root": {
        overflowY: "hidden !important",
      },
    },
    "& .MuiCheckbox-root": { color: `${colors.greenAccent[200]} !important` },
    "& .MuiDataGrid-row--borderBottom": {
      backgroundColor: `${colors.blueAccent[700]} !important`,
    },
    ...customStyles, // apply custom styles here
  };

  return (
    <Stack sx={{ m: 2 }}>
      <Heading title={title} subtitle={subtitle} />
      <Box sx={dataGridStyles}>
        <DataGrid
          rows={rows}
          columns={columns.map((col) =>
            col.field === "access" && renderCellContent
              ? { ...col, renderCell: renderCellContent }
              : col
          )}
          checkboxSelection={checkboxSelection}
          slots={slots}
          slotProps={slotProps}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          autoPageSize={false}
          pageSizeOptions={[10, 25, 50]}
          disableRowSelectionOnClick
          disableDensitySelector
          onRowSelectionModelChange={onSelectionChange}
        />
      </Box>
    </Stack>
  );
};

// DataGrid.propTypes = {
//   rows: PropTypes.array.isRequired,
//   columns: PropTypes.array.isRequired,
//   title: PropTypes.string,
//   subtitle: PropTypes.string,
//   toolbarOptions: PropTypes.object,
//   checkboxSelection: PropTypes.bool,
//   customStyles: PropTypes.object,
//   renderCellContent: PropTypes.func, // for custom cell rendering
// };

export default DataTable;
