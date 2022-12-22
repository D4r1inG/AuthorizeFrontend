import AdminContent from "../modules/AdminContent";
import Cod1Content from "../modules/CODcontent/COD1";
import COD2content from "../modules/CODcontent/COD2";
import Manager from "../modules/ManagerContent";
import UserContent from "../modules/UserContent";
import { IListPage, IPage } from "./interfacePage";

export const ListPageWithAuthorize: IListPage<IPage> = {
  ManagerContent: {
    Component: Manager,
    allowedPosition: ["manager"],
    allowedWarehouse: ["GHTK building"],
    allowedUsername: ["manager"],
  },
  AdminContent: {
    Component: AdminContent,
    allowedPosition: ["manager", "admin"],
    allowedWarehouse: ["GHTK building"],
    allowedUsername: ["admin", "manager"],
  },
  UserContent: {
    Component: UserContent,
    allowedPosition: ["manager", "admin", "user"],
    allowedWarehouse: ["GHTK building"],
    allowedUsername: ["admin", "manager", "user"],
  },
  CODContent1: {
    Component: Cod1Content,
    allowedPosition: ["manager", "cod"],
    allowedWarehouse: ["Kho1"],
    allowedUsername: ["cod1", "cod2"],
  },
  CODContent2: {
    Component: COD2content,
    allowedPosition: ["manager", "cod"],
    allowedWarehouse: ["Kho2"],
    allowedUsername: ["manager", "cod2"],
  },
};
