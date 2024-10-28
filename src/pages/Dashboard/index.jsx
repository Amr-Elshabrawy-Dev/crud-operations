import { Box } from "@mui/material"
import Heading from "../../components/common/Heading"

const Dashboard = () => {
  return (
    <Box m={2}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Heading title="Dashboard" subtitle="Welcome to your dashboard"/>
      </Box>
    </Box>
  )
}
export default Dashboard