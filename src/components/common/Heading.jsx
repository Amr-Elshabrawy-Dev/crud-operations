import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";

const Heading = ({
  title,
  subtitle,
  textAlign = "left",
  direction = "column",
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      sx={{
        mb: 2,
        display: "flex",
        flexDirection: direction,
        alignItems: direction === "column" ? "flex-start" : "center",
        justifyContent: "space-between",
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: 18, sm: 25 },
          color: colors.grey[100],
          fontWeight: "bold",
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: 12, sm: 18 },
          color: colors.greenAccent[400],
        }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};
export default Heading;
