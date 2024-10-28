import { Box, Stack, useTheme } from "@mui/material";
import Heading from "../../components/common/Heading";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.5,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "registrarId",
      headerName: "Registrar ID",
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
      field: "age",
      headerName: "Age",
      type: "number",
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
      field: "address",
      headerName: "Address",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "zipCode",
      headerName: "ZipCode",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
  ];
  return (
    <Stack m={2}>
      <Heading
        title="Contacts"
        subtitle="List of Contacts for Future Reference"
      />
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
          rows={mockDataContacts}
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
export default Contacts;
