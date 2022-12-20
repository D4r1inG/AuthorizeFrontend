export interface IPage {
  permission: string[];
  isAllowed: (permission: string | string[]) => boolean;
}
