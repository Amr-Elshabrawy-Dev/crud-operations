import { Box } from "@mui/material";
import Heading from "../../components/common/Heading";
import ChartPieCompo from "../../components/charts/ChartPieCompo";

const PieChart = () => {
  return (
    <Box m={2}>
      <Heading title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box
        height="75vh"
        sx={{
          "& svg": {
            width: "100% !important",
            willChange: "width",
            shapeRendering: "auto",
          },
        }}
      >
        <ChartPieCompo />
      </Box>
    </Box>
  );
}
export default PieChart