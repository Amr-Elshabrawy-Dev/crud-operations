import { Avatar, Box, Collapse, Typography } from "@mui/material";

const SidebarProfile = ({ isCollapsed, colors }) => {
  return (
    <Collapse orientation="vertical" in={!isCollapsed} timeout={500}>
      <Box
        mb={2}
        sx={{
          color: colors.grey[100],
        }}
      >
        <Box display="flex" justifyContent="center" alignItems="center">
          <Avatar
            alt="profile-user"
            src={`../../assets/user.png`}
            sx={{ cursor: "pointer", height: "80px", width: "80px" }}
          />
        </Box>
        <Box textAlign="center">
          <Typography
            variant="h2"
            color={colors.grey[100]}
            fontWeight="bold"
            sx={{ m: "10px 0 0 0" }}
          >
            Amr
          </Typography>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            VP Fancy Admin
          </Typography>
        </Box>
      </Box>
    </Collapse>
  );
}
export default SidebarProfile