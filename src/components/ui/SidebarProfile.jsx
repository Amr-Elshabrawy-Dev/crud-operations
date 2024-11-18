import { Avatar, Box, Typography } from "@mui/material";

const SidebarProfile = ({ isCollapsed, colors }) => {
  return (
    <Box
      sx={{
        my: 1.5,
        color: colors.grey[100],
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Avatar
          alt="profile-user"
          src={`../../assets/user.png`}
          sx={{ cursor: "pointer", height: "60px", width: "60px" }}
        />
      </Box>
      <Box textAlign="center">
        <Typography
          variant="h3"
          sx={{
            color: colors.grey[100],
            fontWeight: "bold",
            fontSize: isCollapsed ? "0px" : undefined,
            transition: "0.3s",
          }}
        >
          Amr
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: colors.greenAccent[500],
            fontSize: isCollapsed ? "0px" : undefined,
            transition: "0.3s",
          }}
        >
          VP Fancy Admin
        </Typography>
      </Box>
    </Box>
  );
};
export default SidebarProfile;
