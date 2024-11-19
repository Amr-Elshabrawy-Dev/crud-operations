import { useState } from "react";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import CustomToolbar from "../../components/ui/CustomToolbar";
import DataTable from "../../components/ui/DataTable";

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [selectedUsers, setSelectedUsers] = useState([]);
  const [invoicesData, setInvoicesData] = useState(mockDataInvoices);

  // Update selected users on row selection
  const handleSelectionChange = (selectionModel) => {
    setSelectedUsers(selectionModel);
  };

  // Delete selected users
  const handleDeleteUsers = () => {
    setInvoicesData((prevData) =>
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
      cellClassName: "name-column--cell",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      width: 150,
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
      field: "cost",
      headerName: "Cost",
      width: 100,
      cellClassName: "name-column--cell",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "date",
      headerName: "Date",
      width: 200,
      align: "center",
      headerAlign: "center",
    },
  ];
  return (
    <>
      <DataTable
        rows={invoicesData}
        columns={columns}
        title="Invoices"
        subtitle="List of Invoices Balances"
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
export default Invoices;
