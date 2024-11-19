import { useState } from "react";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import DataTable from "../../components/ui/DataTable";
import CustomToolbar from "../../components/ui/CustomToolbar";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [selectedUsers, setSelectedUsers] = useState([]);
  const [contactsData, setContactsData] = useState(mockDataContacts);

  // Update selected users on row selection
  const handleSelectionChange = (selectionModel) => {
    setSelectedUsers(selectionModel);
  };

  // Delete selected users
  const handleDeleteUsers = () => {
    setContactsData((prevData) =>
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
      field: "registrarId",
      headerName: "Registrar ID",
      width: 100,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "Name",
      width: 200,
      cellClassName: "name-column--cell",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 100,
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
      field: "address",
      headerName: "Address",
      width: 200,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "city",
      headerName: "City",
      width: 100,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "zipCode",
      headerName: "ZipCode",
      width: 100,
      align: "center",
      headerAlign: "center",
    },
  ];
  return (
    <>
      <DataTable
        rows={contactsData}
        columns={columns}
        title="Contacts"
        subtitle="List of Contacts for Future Reference"
        checkboxSelection={true}
        renderCellContent
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
export default Contacts;
