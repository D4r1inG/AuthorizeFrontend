import React, { useState } from "react";

import { IPage } from "../../utils/interfacePage";

const AdminContent: React.FC<IPage> = ({ permission, isAllowed }) => {
  return <div>Only admin & manager can see this content</div>;
};

export default AdminContent;
