import { Box } from "@mui/material";
import Heading from "../../components/common/Heading";
import ChartLineCompo from "../../components/charts/ChartLineCompo";

const LineChart = () => {
  return (
    <Box m={2}>
      <Heading title="Line Chart" subtitle="Simple Line Chart" />
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
        <ChartLineCompo isDashboard={false} />
      </Box>
    </Box>
  );
};
export default LineChart;
