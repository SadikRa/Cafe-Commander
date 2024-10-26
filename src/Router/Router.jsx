import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Contact from "../pages/Contact/Contact";
import DashBoard from "../Layout/DashBoard";
import Cart from "../pages/DashBoard/Cart/Cart";
import PrivateRoute from "./PrivateRoute";
import AddItems from "../pages/DashBoard/AddItems/AddItems";
import AllUsers from "../pages/DashBoard/AllUsers/AllUsers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/order/:category",
        element: <Order></Order>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
  {
    path: "/dashBoard",
    element: (
      <PrivateRoute>
        <DashBoard></DashBoard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashBoard/cart",
        element: <Cart></Cart>,
      },

      // admin route

      {
        path: "/dashBoard/addItems",
        element: <AddItems></AddItems>,
      },
      {
        path: "/dashBoard/users",
        element: <AllUsers></AllUsers>,
      },

      // admin only routes
      // {
      //   path: 'addItems',
      //   element: <AdminRoute><AddItems></AddItems></AdminRoute>
      // },
      // {
      //   path: 'manageItems',
      //   element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
      // },
      // {
      //   path: 'updateItem/:id',
      //   element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
      //   loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
      // },
      // {
      //   path: 'users',
      //   element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      // }
    ],
  },
]);
