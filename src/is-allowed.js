/**
 * Checks if the given user is allowed to access the resource for the given permissions
 * (note: it must fulfill all the permissions).
 *
 * @param resourcePermissionsMap
 * @param resource resource to ask permissions for
 * @param permissions asked permissions
 */
module.exports = (resourcePermissionsMap, resource, permissions = []) => {
  const resourcePermissions = resourcePermissionsMap[resource] || [];

  if (resourcePermissions.length === 0) {
    return false;
  }

  return permissions.reduce(
    (prev, value) => resourcePermissions.includes(value) && prev,
    true
  );
};
