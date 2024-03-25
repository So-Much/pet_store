const User = require("../models/User");
const jwt = require("jsonwebtoken");

module.exports  = {
  // ROUTE : [POST]: /auth/login
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const token = jwt.sign({ email }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      req.session.token = token;

      res.json({ token });
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  },

  // ROUTE : [GET]: /auth/logout
  logout: async (req, res) => {
    try {
        delete req.session.token;
        res.status(200).json({ message: 'Logged out successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  },
};

