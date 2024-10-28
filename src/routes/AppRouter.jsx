import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Admin from "../layouts/Admin";
import Dashboard from "../pages/Dashboard";
import Error from "../pages/Error";
import Team from "../pages/Team";
import Invoices from "../pages/Invoices";
import Contacts from "../pages/Contacts";
import Bar from "../pages/Bar";
import Form from "../pages/Form";
import Line from "../pages/Line";
import Pie from "../pages/Pie";
import FAQ from "../pages/FAQ";
import Geography from "../pages/Geography";
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
        element: <Bar />,
      },
      {
        path: "form",
        element: <Form />,
      },
      {
        path: "line",
        element: <Line />,
      },
      {
        path: "pie",
        element: <Pie />,
      },
      {
        path: "faq",
        element: <FAQ />,
      },
      {
        path: "geography",
        element: <Geography />,
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
