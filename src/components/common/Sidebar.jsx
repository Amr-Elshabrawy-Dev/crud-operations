import { useState } from "react";
import {
  Box,
  Typography,
  useTheme,
  Drawer,
  List,
  Divider,
} from "@mui/material";
import { tokens } from "../../theme";
import {
  BarChartOutlined as BarChartIcon,
  CalendarTodayOutlined as CalendarIcon,
  ContactsOutlined as ContactsIcon,
  HelpOutlineOutlined as HelpIcon,
  HomeOutlined as HomeIcon,
  MapOutlined as MapIcon,
  PeopleOutlined as PeopleIcon,
  PersonOutlined as PersonIcon,
  PieChartOutlineOutlined as PieChartIcon,
  ReceiptOutlined as ReceiptIcon,
  TimelineOutlined as TimelineIcon,
} from "@mui/icons-material";
import SidebarHeader from "../ui/SidebarHeader";
import SidebarProfile from "../ui/SidebarProfile";
import SidebarItem from "../ui/SidebarItem";

const drawerWidth = 250;

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(true);
  // Define handleToggle Collapsed function
  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Define sections and items as data objects
  const sections = [
    {
      title: "Data",
      items: [
        { title: "Manage Team", to: "team", icon: <PeopleIcon /> },
        {
          title: "Contacts Information",
          to: "contacts",
          icon: <ContactsIcon />,
        },
        { title: "Invoices Balances", to: "invoices", icon: <ReceiptIcon /> },
      ],
    },
    {
      title: "Pages",
      items: [
        { title: "Profile Form", to: "form", icon: <PersonIcon /> },
        { title: "Calendar", to: "calendar", icon: <CalendarIcon /> },
        { title: "FAQ Page", to: "faq", icon: <HelpIcon /> },
      ],
    },
    {
      title: "Charts",
      items: [
        { title: "Bar Chart", to: "bar", icon: <BarChartIcon /> },
        { title: "Pie Chart", to: "pie", icon: <PieChartIcon /> },
        { title: "Line Chart", to: "line", icon: <TimelineIcon /> },
        { title: "Geography Chart", to: "geography", icon: <MapIcon /> },
      ],
    },
  ];

  return (
    <Box>
      <Drawer
        variant="permanent"
        open={isCollapsed}
        sx={{
          height: "100%",
          width: `calc(${theme.spacing(7)} + 1px)`,
          transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: !isCollapsed
              ? theme.transitions.duration.leavingScreen
              : theme.transitions.duration.enteringScreen,
          }),
          [`& .MuiDrawer-paper`]: {
            overflowX: "hidden",
            backgroundColor: colors.primary[400],
            width: isCollapsed
              ? `calc(${theme.spacing(7)} + 1px)`
              : drawerWidth,
            boxSizing: "border-box",
            transition: "all 0.3s ease-in-out",
          },
        }}
      >
        {/* MENU ICON */}
        <SidebarHeader isCollapsed={isCollapsed} handleToggle={handleToggle} />
        <Divider />
        {/* USER PROFILE */}
        <Box>
          <SidebarProfile isCollapsed={isCollapsed} colors={colors} />
        </Box>
        <Divider />
        <List sx={{ py: "0px" }}>
          {/* SIDEBAR ITEM */}
          <Box sx={{
            pl: isCollapsed ? undefined : "10px",
            transition: "0.3s",
          }}>
            <SidebarItem
              title="Dashboard"
              to="/"
              icon={<HomeIcon />}
              isCollapsed={isCollapsed}
            />
            {/* SIDEBAR SECTIONS */}
            {sections.map((section, index) => (
              <Box key={index}>
                <Typography
                  variant="h6"
                  color={colors.grey[300]}
                  sx={{
                    m: isCollapsed ? "0" : "5px 20px 0",
                    textAlign: isCollapsed ? "center" : "left",
                  }}
                >
                  {section.title}
                </Typography>

                {section.items.map((item, idx) => (
                  <SidebarItem
                    key={idx}
                    title={item.title}
                    to={item.to}
                    icon={item.icon}
                    isCollapsed={isCollapsed}
                  />
                ))}
              </Box>
            ))}
            {/* SIDEBAR SECTIONS */}
          </Box>
        </List>
      </Drawer>
    </Box>
  );
};
export default Sidebar;
