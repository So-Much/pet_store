const bcrypt = require("bcrypt");

module.exports = {
  verifyPassword: async (password, user) => {
    try {
      const result = await bcrypt.compare(password, user.password);
      return result;
    } catch (error) {
        console.log(error);
        return false;
    }
  },
};
