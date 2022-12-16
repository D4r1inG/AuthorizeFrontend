import { lazy } from "react";
import { NavLink, RouteObject } from "react-router-dom";
import DefaultLayout from "../layouts/default";
import AdminContent from "../modules/AdminContent";
import Cod1Content from "../modules/CODcontent/COD1";
import CODcontent2 from "../modules/CODcontent/COD2";
import Home from "../modules/home";
import Login from "../modules/login";
import Manager from "../modules/ManagerContent";
import Profile from "../modules/profile";
import UserContent from "../modules/UserContent";
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
        element: (
          <WithAuthorize
            allowedposition={["manager"]}
            renderContent={<Manager />}
          />
        ),
      },
      {
        path: "/admin-content",
        element: (
          <WithAuthorize
            allowedposition={["admin", "manager"]}
            renderContent={<AdminContent />}
          />
        ),
      },
      {
        path: "/user-content",
        element: (
          <WithAuthorize
            allowedposition={["admin", "user"]}
            renderContent={<UserContent />}
          />
        ),
      },
      {
        path: "/cod-content-1",
        element: (
          <WithAuthorize
            allowedposition={["cod"]}
            allowedwarehouse="Kho1"
            renderContent={<Cod1Content />}
          />
        ),
      },
      {
        path: "/cod-content-2",
        element: (
          <WithAuthorize
            allowedposition={["cod"]}
            allowedwarehouse="Kho2"
            renderContent={<CODcontent2 />}
          />
        ),
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
