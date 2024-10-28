import { Box, Stack, Typography, useTheme } from "@mui/material";
import Heading from "../../components/common/Heading";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";

const Team = () => {
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
      field: "access",
      headerName: "Access Level",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            height="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              width="80%"
              m="0 auto"
              p="5px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
              backgroundColor={
                access === "admin"
                  ? colors.greenAccent[600]
                  : colors.greenAccent[700]
              }
              borderRadius="4px"
            >
              {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
              {access === "manager" && <SecurityOutlinedIcon />}
              {access === "user" && <LockOpenOutlinedIcon />}
              <Typography color={colors.grey[100]} ml={0.5}>
                {access}
              </Typography>
            </Box>
          </Box>
        );
      },
    },
  ];
  return (
    <Stack m={2}>
      <Heading title="Team" subtitle="Managing The Team Members" />
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
          rows={mockDataTeam}
          columns={columns}
          checkboxSelection
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
export default Team;
