const getResourcePermissionsMap = require("../get-resource-permissions-map");
const authResources = require("../auth-resources");
const isAllowed = require("../is-allowed");
const dashbotAdminAuthorization = require("./dashbot-admin-authorization");
const constants = require("../permission-contstants");

module.exports = (event, botId, permissions = [], options = {}) => {
  if (dashbotAdminAuthorization(event)) {
    return true;
  }

  const resource = authResources.botResource(botId);
  const resourcePermissionsMap = getResourcePermissionsMap(event);
  const { permissionsMode = constants.PERMISSION_MODE_ALL } = options;

  return isAllowed(
    resourcePermissionsMap,
    resource,
    permissions,
    permissionsMode
  );
};
