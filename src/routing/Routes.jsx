import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Wrapper from "../layout/Wrapper";
import Home from "../pages/home/Home";
import AboutPage from "../pages/about/AboutPage";
import Menu from "../pages/Menu";
import Blog from "../pages/Blog/Blog";
import Chef from "../pages/Chef/Chef";
import SingleBlog from "../pages/SingleBlog/SingleBlog";
import Reservation from "../pages/Reservation/Reservation";
import ContactUs from "../pages/Contact/ContactUs";

import Login from "../pages/Login";
import AddToCard from "../pages/AddToCard/AddToCard";
import Singup from "../pages/Singup";
import Protectedroute from "../components/Protectrout";
import DynamicLoading from "../components/DynamicLoading";
import WrapperAdmin from "../layout/admin/WrapperAdmin";
import AddProduct from "../pages/admin/AddProduct";
import ErrorBoundery from "../components/ErrorBoundery";
import Dashboard from "../pages/admin/Dashboard";
import Addchef from "../pages/admin/Addchef";
import Userlist from "../pages/admin/Userlist";
import Product from "../pages/admin/Product";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "AboutUs",
        element: <AboutPage />,
      },
      {
        path: "OurMenu",
        element: <Menu />,
      },
      {
        path: "OurBlog",
        element: <Blog />,
      },
      {
        path: "SingleBlog",
        element: <SingleBlog />,
      },
      {
        path: "OurChef",
        element: <Chef />,
      },
      {
        path: "Reservation",
        element: <Reservation />,
      },
      // {
      //   path: "AddToCard",
      //   element: <AddToCard/>
      // },

      {
        path: "ContactUs",
        element: <ContactUs />,
      },
    ],
  },
  {
    path: "singup",
    element: <Singup />,
  },
  {
    path: "login",
    element: <Login />,
  },

  {
    path: "AddToCard",
    element: <Protectedroute />,
    children: [
      {
        path: "",
        // element: <Cart />,
        element: (
          <Suspense fallback={<DynamicLoading />}>
            <AddToCard />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/admin",
    element: <Protectedroute />,
    children: [
      {
        path: "",
        element: <WrapperAdmin />,
        children: [
          {
            path: "dashboard",
            element: <Dashboard />,
            errorElement: <ErrorBoundery />,
          },
          {
            path: "product/add",
            element: <AddProduct />,
          },

          { element: <Product/>, path: "productlist" },
          { element: <Addchef />, path: "addchef" },
          { element: <Userlist />, path: "userlist" },
        ],
      },
    ],
  },
]);

export default Routes;

//         {
//   path: "/admin",
//   element: <Protectedroute />,
//   children: [
//     {
//       path: "",
//       element: <WrapperAdmin />,
//       children: [
//         {
//           path: "dashboard",
//           element: <Dashboard />,
//           errorElement: <ErrorBoundery />,
//         },
//         {
//           path: "product",
//           element: <Product />,
//         },
//         {
//           path: "product/add",
//           element: <AddProduct />,
//         },
//         {
//           path: "product/edit/:id",
//           element: <AddProduct />,
//         },
//       ],
//     },
//   ],
// },
