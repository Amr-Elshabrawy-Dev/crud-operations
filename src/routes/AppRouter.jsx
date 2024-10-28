import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Admin from "../layouts/Admin";
import Dashboard from "../pages/Dashboard";
import Error from "../pages/Error";
import Team from "../pages/Team";
import Invoices from "../pages/Invoices";
import Contacts from "../pages/Contacts";
import Form from "../pages/Form";
import BarChart from "../pages/BarChart";
import LineChart from "../pages/LineChart";
import PieChart from "../pages/PieChart";
import FAQ from "../pages/FAQ";
import GeographyChart from "../pages/GeographyChart";
import Calendar from "../pages/Calendar";
// import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Admin />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "team",
        element: <Team />,
      },
      {
        path: "invoices",
        element: <Invoices />,
      },
      {
        path: "contacts",
        element: <Contacts />,
      },
      {
        path: "bar",
        element: <BarChart />,
      },
      {
        path: "form",
        element: <Form />,
      },
      {
        path: "line",
        element: <LineChart />,
      },
      {
        path: "pie",
        element: <PieChart />,
      },
      {
        path: "faq",
        element: <FAQ />,
      },
      {
        path: "geography",
        element: <GeographyChart />,
      },
      {
        path: "calendar",
        element: <Calendar />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};
export default AppRouter;
