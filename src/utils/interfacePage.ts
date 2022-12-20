export interface IPage {
  permission: string[];
  isAllowed: (permission: string) => boolean;
}
