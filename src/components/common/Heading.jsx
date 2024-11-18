import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";

const Heading = ({ title, subtitle, textAlign="left" }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      sx={{
        mb: 2,
        textAlign,
      }}
    >
      <Typography
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ mb: "5px", fontSize: { xs: 20, sm: 32 } }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: 12, sm: 16 },
          color: colors.greenAccent[400],
        }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};
export default Heading;
