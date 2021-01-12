const constants = require("./permission-contstants");

/**
 * Checks if the given user is allowed to access the resource for the given permissions
 *
 * @param resourcePermissionsMap
 * @param resource resource to ask permissions for
 * @param permissions asked permissions
 * @param permissions mode any must fulfill at least one all must fulfill all default is all
 */
module.exports = (
  resourcePermissionsMap,
  resource,
  permissions = [],
  mode = constants.PERMISSION_MODE_ALL
) => {
  const resourcePermissions = resourcePermissionsMap[resource] || [];

  if (resourcePermissions.length === 0) {
    return false;
  }

  if (mode === "any") {
    return permissions.reduce(
      (prev, value) => resourcePermissions.includes(value) || prev,
      false
    );
  }

  return permissions.reduce(
    (prev, value) => resourcePermissions.includes(value) && prev,
    true
  );
};
