import { Box, Stack, Typography, useTheme } from "@mui/material";
import Heading from "../../components/common/Heading";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => {
        <Typography color={colors.greenAccent[500]}>
          ${params.row.cost}
        </Typography>
      }
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
  ];
  return (
    <Stack m={2}>
      <Heading title="Invoices" subtitle="List of Invoices Balances" />
      <Box
        mt={5}
        display="grid"
        gridTemplateColumns="1fr"
        sx={{
          height: "75vh",
          width: "100%",
          mx: "auto",
          "& > div": {
            gridColumn: "span 1",
          },
          "& .MuiDataGrid-root": { border: "0" },
          "& .MuiDataGrid-cell": { border: "0" },
          "& .name-column--cell": { color: colors.greenAccent[300] },
          "& .MuiDataGrid-row--borderBottom": {
            backgroundColor: `${colors.blueAccent[700]} !important`,
          },
          "& .MuiDataGrid-columnHeader": {
            borderBottom: "0 !important",
          },
          "& .MuiDataGrid-iconSeparator": {
            color: colors.primary[400],
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "0 !important",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataInvoices}
          columns={columns}
          checkboxSelection
          components={{ toolbar: GridToolbar }}
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
          sx={{
            backgroundColor: colors.primary[400],
            "& .MuiDataGrid-toolbarContainer": {
              "& .MuiButtonBase-root": {
                color: `${colors.grey[100]} !important`,
              },
            },
          }}
        />
      </Box>
    </Stack>
  );
};
export default Invoices;
