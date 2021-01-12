const getResourcePermissionsMap = require('../get-resource-permissions-map')
const authResources = require('../auth-resources')
const isAllowed = require('../is-allowed')

module.exports = (event, botId, permissions = []) => {
  const resource = authResources.botResource(botId)
  const resourcePermissionsMap = getResourcePermissionsMap(event)

  return isAllowed(resourcePermissionsMap, resource, permissions)
}