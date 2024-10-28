import { Box } from "@mui/material";
import Heading from "../../components/common/Heading";
import ChartBarCompo from "../../components/charts/ChartBarCompo";

const BarChart = () => {
  return (
    <Box m={2}>
      <Heading title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <ChartBarCompo />
      </Box>
    </Box>
  )
};
export default BarChart;
