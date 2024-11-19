import { Box, Typography, useTheme } from "@mui/material";
import DataTable from "../../components/ui/DataTable";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import { useState } from "react";
import CustomToolbar from "../../components/ui/CustomToolbar";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [selectedUsers, setSelectedUsers] = useState([]);
  const [teamData, setTeamData] = useState(mockDataTeam);

  // Update selected users on row selection
  const handleSelectionChange = (selectionModel) => {
    setSelectedUsers(selectionModel);
  };

  // Delete selected users
  const handleDeleteUsers = () => {
    setTeamData((prevData) =>
      prevData.filter((user) => !selectedUsers.includes(user.id))
    );
    setSelectedUsers([]); // Clear selection after deletion
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 100,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "Name",
      width: 200,
      align: "center",
      headerAlign: "center",
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      width: 100,
      type: "number",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      width: 200,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "Access Level",
      width: 200,
      align: "center",
      headerAlign: "center",
      type: "singleSelect",
      valueOptions: ["admin", "manager", "user"],
      editable: true,
    },
  ];

  // Custom cell rendering function
  const renderAccessCell = ({ row: { access } }) => {
    const accessColor =
      access === "admin"
        ? colors.greenAccent[700]
        : access === "manager"
        ? colors.redAccent[700]
        : colors.blueAccent[700];

    const accessIcon =
      access === "admin" ? (
        <AdminPanelSettingsOutlinedIcon fontSize="inherit" />
      ) : access === "manager" ? (
        <SecurityOutlinedIcon fontSize="inherit" />
      ) : (
        <LockOpenOutlinedIcon fontSize="inherit" />
      );

    return (
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          p: "5px",
          m: "0.65rem auto 0",
          bgcolor: accessColor,
          borderRadius: "4px",
          fontSize: "clamp(10px, calc(1.367vw), 12px)",
          overflow: "hidden !important",
        }}
      >
        {accessIcon}
        <Typography
          sx={{
            fontSize: "inherit",
            color: colors.grey[100],
            ml: 0.5,
            textTransform: "capitalize",
            fontWeight: "500",
          }}
        >
          {access}
        </Typography>
      </Box>
    );
  };

  return (
    <>
      <DataTable
        rows={teamData}
        columns={columns}
        title="Team"
        subtitle="Managing The Team Members"
        checkboxSelection={true}
        field="access"
        renderCellContent={renderAccessCell}
        onSelectionChange={handleSelectionChange}
        customStyles={{
          "& .name-column--cell": { color: colors.greenAccent[300] },
        }}
        slots={{
          toolbar: CustomToolbar,
        }}
        slotProps={{
          toolbar: {
            onDelete: handleDeleteUsers,
            isDeleteDisabled: selectedUsers.length === 0,
          },
        }}
      />
    </>
  );
};

export default Team;
