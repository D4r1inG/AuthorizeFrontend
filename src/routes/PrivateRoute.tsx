import React, { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../core/provider/AuthProvider";
import { isEmpty } from "lodash";

interface Props {
  children: ReactNode;
}

const PrivateRoute: React.FC<Props> = ({ children }) => {
  const { userInfo, isAuthen } = useAuth();
  const location = useLocation();

  if (!isAuthen) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }

  return <div>{children}</div>;
};

export default PrivateRoute;
