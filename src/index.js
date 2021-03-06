module.exports = {
  isAllowed: require("./is-allowed"),
  constants: require("./permission-contstants"),
  getPermissionsMap: require("./get-resource-permissions-map"),
  getUser: require("./get-user"),
  botAuthorization: require("./authorizers/bot-authorization"),
  partnerAuthorization: require("./authorizers/partner-authorization"),
  dashbotAdminAuthorization: require("./authorizers/dashbot-admin-authorization"),
};
