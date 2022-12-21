export interface IPage {
  permission: string[];
  isAllowed: (permission: string | string[]) => boolean;
}

export interface IListPage<T> {
  [page: string]: {
    Component: React.FC<T>;
    allowedPosition: string[];
    allowedWarehouse: string[];
    allowedUsername: string[];
  };
}
