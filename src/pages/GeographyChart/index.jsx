import { Box } from "@mui/material";
import Heading from "../../components/common/Heading";
import ChartGeographyCompo from "../../components/charts/ChartGeographyCompo";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
const GeographyChart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m={2}>
      <Heading title="Geography Chart" subtitle="Simple Geography Chart" />
      <Box
        height="75vh"
        border={`1px solid ${colors.primary[200]}`}
        borderRadius={"4px"}
        sx={{
          "& svg": {
            width: "100% !important",
            willChange: "width",
            shapeRendering: "auto",
          },
        }}
      >
        <ChartGeographyCompo isDashboard={false} />
      </Box>
    </Box>
  );
};
export default GeographyChart;
