import { Box, Button, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Heading from "../../components/common/Heading";
// icons
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
// charts
import ChartLineCompo from "../../components/charts/ChartLineCompo";
import ChartBarCompo from "../../components/charts/ChartBarCompo";
import ChartGeographyCompo from "../../components/charts/ChartGeographyCompo";
// dashboard components
import ProgressCircle from "../../components/dashboardCompo/ProgressCircle";
import StatBox from "../../components/dashboardCompo/StatBox";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
const isNonMobile = useMediaQuery("(min-width:600px)");
  return (
    <Box m="20px">
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: { xs: "center", sm: "space-between" },
          alignItems: "center",
          mb:1
        }}
      >
        <Heading
          title="Dashboard"
          subtitle="Welcome to your dashboard"
          textAlign={isNonMobile ? "left" : "center"}
        />
        <Box>
          <Button
            variant="contained"
            startIcon={<DownloadOutlinedIcon />}
            sx={{
              textWrap: "nowrap",
              color: theme.palette.getContrastText(colors.blueAccent[600]),
              backgroundColor: colors.blueAccent[600],
              "&:hover": {
                backgroundColor: colors.blueAccent[700],
              },
            }}
          >
            Download Reports
          </Button>
        </Box>
      </Box>
      {/* Grid & Charts */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gridAutoRows: "130px",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {/* Row 1 */}
        <Box
          sx={{
            gridColumn: { xs: "span 12", md: "span 6", xl: "span 3" },
          }}
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,361"
            subtitle="Emails Sent"
            progress="0.75"
            increase="+14%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          sx={{
            gridColumn: { xs: "span 12", md: "span 6", xl: "span 3" },
          }}
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="431,225"
            subtitle="Sales Obtained"
            progress="0.5"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          sx={{
            gridColumn: { xs: "span 12", md: "span 6", xl: "span 3" },
          }}
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="31,421"
            subtitle="New Clients"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          sx={{
            gridColumn: { xs: "span 12", md: "span 6", xl: "span 3" },
          }}
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1,331,125"
            subtitle="Traffic Received"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        {/* Row 2 */}
        <Box
          sx={{
            gridColumn: { xs: "span 12", xl: "span 8" },
            gridRow: "span 2",
          }}
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt={1}
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                $59,342.32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" mt="-20px">
            <ChartLineCompo isDashboard={true} />
          </Box>
        </Box>
        {/* Transactions */}
        <Box
          sx={{
            gridColumn: { xs: "span 12", xl: "span 4" },
            gridRow: "span 2",
          }}
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            color={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                bgcolor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>
        {/* Row 3 */}
        <Box
          sx={{
            gridColumn: { xs: "span 12", md: "span 6", xl: "span 4" },
            gridRow: "span 2",
          }}
          backgroundColor={colors.primary[400]}
          p={3.75}
        >
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              $48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures & costs</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            gridColumn: { xs: "span 12", md: "span 6", xl: "span 4" },
            gridRow: "span 2",
          }}
          backgroundColor={colors.primary[400]}
          p={3.75}
        >
          <Typography variant="h5" fontWeight="600" mb={1.875}>
            Geography Based Traffic
          </Typography>
          <Box height="200px">
            <ChartGeographyCompo isDashboard={true} />
          </Box>
        </Box>
        <Box
          sx={{
            gridColumn: { xs: "span 12", md: "span 12", xl: "span 4" },
            gridRow: "span 2",
          }}
          backgroundColor={colors.primary[400]}
        >
          <Typography variant="h5" fontWeight="600" px={3.75} pt={3.75}>
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <ChartBarCompo isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Dashboard;
