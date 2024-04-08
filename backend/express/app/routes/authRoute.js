const router = require("express").Router();
const passport = require("passport");
const { generateToken } = require("../services/jwtServices");

const {
  CLIENT_URL
} = require('../config/enviroments/env')

// ROUTE : []: /auth
// router.post('/login',passport.authenticate("local"), authController.login);
router.post(
  "/login",
  (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      if (err) {
        console.log(err);
        return next(err);
      }
      if (!user) {
        return res.status(400).send([user, "Cannot log in", info]);
      }
      req.login(user, (err) => {
        // Remove property password from user
        const { password, ...userWithoutPassword } = user._doc;
        if (err) {
          return next(err);
        }
        const token = generateToken(user);
        // Set cookie token for client
        // res.cookie("token", token, {
        //   httpOnly: true,
        //   secure: false,
        //   sameSite: "none",
        // });
        userWithoutPassword.token = token;
        return res.status(200).json({ user: userWithoutPassword });
      });
    })(req, res, next);
  },
  (req, res, next) => {
    // Log in Failed
    return res.status(500).json({ message: "Internal Server Error" });
  }
);

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL)
  res.status(200).json({ message: "Logout successfully" });
} );

router.get("/google/callback",passport.authenticate('google-oauth2',{
  successRedirect: CLIENT_URL,
  failureRedirect: CLIENT_URL+'/signin',


}));

module.exports = router;
