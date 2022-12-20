export const POSITION = {
  manager: "manager",
  admin: "admin",
  user: "user",
  cod: "cod",
};

export const SCOPES = {
  canView: "view",
  canCreate: "create",
  canEdit: "edit",
  canDelete: "delete",
};

export const PERMISSIONS = {
  [POSITION.user]: [SCOPES.canView],
  [POSITION.cod]: [SCOPES.canView],
  [POSITION.admin]: [SCOPES.canView, SCOPES.canEdit],
  [POSITION.manager]: [
    SCOPES.canView,
    SCOPES.canEdit,
    SCOPES.canDelete,
    SCOPES.canCreate,
  ],
};
