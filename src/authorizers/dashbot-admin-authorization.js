const getUser = require("../get-user");

module.exports = (event) => {
  const user = getUser(event);
  return user.admin === 1;
};
