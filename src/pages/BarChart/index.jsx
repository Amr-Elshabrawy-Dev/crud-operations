import { Box } from "@mui/material";
import Heading from "../../components/common/Heading";
import ChartBarCompo from "../../components/charts/ChartBarCompo";

const BarChart = () => {
  return (
    <Box m={2}>
      <Heading title="Bar Chart" subtitle="Simple Bar Chart" />
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
        <ChartBarCompo />
      </Box>
    </Box>
  );
};
export default BarChart;
