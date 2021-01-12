const get = require("./get");

module.exports = (event) =>
  get(event, "requestContext.authorizer.lambda.user", {});
