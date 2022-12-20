import { RouteObject } from "react-router-dom";
import DefaultLayout from "../layouts/default";
import Home from "../modules/home";
import Login from "../modules/login";
import Profile from "../modules/profile";
import PrivateRoute from "./PrivateRoute";
import WithAuthorize from "./withAuthor";

export const routes: RouteObject[] = [
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/manager-content",
        element: <WithAuthorize componentName="ManagerContent" />,
      },
      {
        path: "/admin-content",
        element: <WithAuthorize componentName="AdminContent" />,
      },
      {
        path: "/user-content",
        element: <WithAuthorize componentName="UserContent" />,
      },
      {
        path: "/cod-content-1",
        element: <WithAuthorize componentName="CODContent1" />,
      },
      {
        path: "/cod-content-2",
        element: <WithAuthorize componentName="CODContent2" />,
      },
    ],
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];
