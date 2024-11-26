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
  field,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const tableWidth = columns
    .map((col) => {
      return col.width;
    })
    .reduce((acc, col) => {
      return acc + Number(col);
    }, 60);
    
  // Merge custom styles with default styles
  const dataGridStyles = {
    height: "75dvh",
    width: "100%",
    maxWidth: tableWidth,
    mx: "auto",
    mt: 3,
    "& .MuiDataGrid-columnHeaderTitle": { fontWeight: "bold" },
    "& .MuiDataGrid-cell": { border: 0 },
    "& .MuiDataGrid-columnHeaders": {
      color: `${colors.greenAccent[600]} !important`,
    },
    "& .MuiDataGrid-iconSeparator": { color: colors.primary[400] },
    "& .MuiDataGrid-virtualScroller": {
      backgroundColor: colors.primary[400],
    },
    "& .MuiDataGrid-footerContainer": {
      borderTop: 0,
      backgroundColor: colors.primary[400],
      "& .MuiTablePagination-root": {
        overflowY: "hidden !important",
      },
    },
    "& .MuiCheckbox-root": { color: `${colors.greenAccent[200]} !important` },
    "& .MuiDataGrid-row--borderBottom": {
      backgroundColor: `${colors.primary[500]} !important`,
      borderTop: `1px solid ${colors.grey[600]}`,
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
            col.field === field && renderCellContent
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

export default DataTable;
