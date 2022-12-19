import React, { ReactElement, ReactNode, useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../core/provider/AuthProvider";
import Unauthorized from "../modules/unauthorized";

interface Props {
  renderContent: ReactElement;
  allowedposition: string[];
  allowedwarehouse?: string;
}

const WithAuthorize: React.FC<Props> = ({
  renderContent,
  allowedposition,
  allowedwarehouse,
}) => {
  const { userInfo, isAuthen } = useAuth();
  const location = useLocation();

  if (isAuthen) {
    let isAllowed = allowedposition.includes(userInfo.position);
    if (allowedwarehouse) {
      isAllowed =
        allowedposition.includes(userInfo.position) &&
        allowedwarehouse === userInfo.warehouse;
    }

    return isAllowed ? renderContent : <Unauthorized />;
  }

  return <Navigate to="/login" state={{ path: location.pathname }} replace />;
};

export default WithAuthorize;
