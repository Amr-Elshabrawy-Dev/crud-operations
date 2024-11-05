import { useState } from "react";
import { Sidebar as ProSidebar } from "react-pro-sidebar";
import { Menu } from "react-pro-sidebar";
import { Box, Typography, useTheme } from "@mui/material";
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
import SidebarHeader from "../helpers/SidebarHeader";
import SidebarProfile from "../helpers/SidebarProfile";
import SidebarItem from "../helpers/SidebarItem";

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
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
    <Box
      sx={{
        "& .ps-sidebar-root": {
          border: "none !important",
          height: "100%",
        },
        "& .ps-menu-button": {
          backgroundColor: "transparent !important",
          transition: "all 0.2s ease-in-out",
          height: "45px !important",
        },
        "& .ps-menu-button:hover": {
          color: `${colors.blueAccent[400]} !important`,
        },
        "& .ps-menu-button.active": {
          color: `${colors.blueAccent[500]} !important`,
        },
      }}
    >
      <ProSidebar
        collapsed={isCollapsed}
        transitionDuration={500}
        backgroundColor={colors.primary[400]}
      >
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <SidebarHeader
            isCollapsed={isCollapsed}
            handleToggle={handleToggle}
          />
          {/* USER PROFILE */}
          <Box>
            <SidebarProfile isCollapsed={isCollapsed} colors={colors} />
          </Box>
          {/* SIDEBAR ITEM */}
          <Box pl={isCollapsed ? undefined : "10%"}>
            <SidebarItem title="Dashboard" to="/" icon={<HomeIcon />} />
            {/* SIDEBAR SECTIONS */}
            {sections.map((section, index) => (
              <Box key={index} mt={2}>
                <Typography
                  variant="h6"
                  color={colors.grey[300]}
                  sx={{ m: "15px 0 5px 20px" }}
                >
                  {section.title}
                </Typography>
                {section.items.map((item, idx) => (
                  <SidebarItem
                    key={idx}
                    title={item.title}
                    to={item.to}
                    icon={item.icon}
                  />
                ))}
              </Box>
            ))}
            {/* SIDEBAR SECTIONS */}
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};
export default Sidebar;
