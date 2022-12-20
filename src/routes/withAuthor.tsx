import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../core/provider/AuthProvider";
import Unauthorized from "../modules/unauthorized";
import { PERMISSIONS } from "../utils/permissions-map";
import { ListPageWithAuthorize } from "../utils/listPage";

interface Props {
  componentName: string;
}

// group_id, position_job, username
const WithAuthorize: React.FC<Props> = ({ componentName }) => {
  const { userInfo, isAuthen } = useAuth();
  const location = useLocation();

  if (isAuthen) {
    const { Component, allowedPosition, allowedWarehouse, allowedUsername } =
      ListPageWithAuthorize[componentName];

    const isAllowed =
      allowedPosition.includes(userInfo.position) ||
      allowedWarehouse.includes(userInfo.warehouse) ||
      allowedUsername.includes(userInfo.username);

    if (isAllowed) {
      return (
        <Component
          permission={PERMISSIONS[userInfo.position]}
          isAllowed={(permissionRequired) =>
            PERMISSIONS[userInfo.position].includes(permissionRequired)
          }
        />
      );
    }

    return <Unauthorized />;
  }

  return <Navigate to="/login" state={{ path: location.pathname }} replace />;
};

export default WithAuthorize;
