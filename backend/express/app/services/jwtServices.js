const jwt = require("jsonwebtoken");

const {
  JWT_SECRET,
  TOKEN_EXPIRE_TIME,
  REFRESH_TOKEN_EXPIRE_TIME,
} = require("../config/enviroments/env");

module.exports = {
  generateToken: (user) => {
    return jwt.sign(user.toJSON(), JWT_SECRET, {
      expiresIn: TOKEN_EXPIRE_TIME,
    });
  },
  authencationToken: (allowRoles) => {
    return (req, res, next) => {
      const authHeader = req.headers["authorization"];
      // console.log(req.cookies);
      // next();
      const token = authHeader && authHeader.split(" ")[1];
      // console.log(token);
      if (token == null) return res.sendStatus(401);
      jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        if (allowRoles && !allowRoles.includes(user.role)) {
          return res.sendStatus(403);
        }
        req.user = user;
        next();
      });
    }
  },
};
