const { Strategy: GoogleStrategy } = require("passport-google-oauth20");
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
const bcrypt = require("bcrypt");

const {
  ggOptionsStrategy,
  GOOGLE_DEFAULT_PASSWORD_FOR_NEW_USER,
  sessionOptions,
} = require("../../utils/passport");
const User = require("../../models/User");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");

const googleStrategy = new GoogleStrategy(
  ggOptionsStrategy,
  async (accessToken, refreshToken, profile, done) => {
    try {
      const user = await User.findOne({
        email: profile.emails[0].value,
      });
      if (user) {
        return done(null, user);
      } else {
        bcrypt.hash(
          GOOGLE_DEFAULT_PASSWORD_FOR_NEW_USER,
          10,
          async (err, hashedPassword) => {
            if (err) {
              console.log(err);
            } else {
              const newUser = new User({
                username: profile.displayName,
                email: profile.emails[0].value,
                avatar: profile.photos[0].value,
                password: hashedPassword,
              });
              const uSaved = await newUser.save();
              return done(null, uSaved);
            }
          }
        );
      }
    } catch (error) {
      console.log(error);
      return done(error);
    }
  }
);

module.exports = function passportConfig( app ) {
    app.use(cookieParser());
    app.use(session(sessionOptions));
    passport.serializeUser(async (id, done) => {
        try {
            const user = await User.findById(id);
            return done(null, user);
        } catch (error) {
            console.log(error);
            return done(error);
        }
    })
    app.use(passport.initialize());
    app.use(passport.session());
    return {
        message : 'Passport config successfully'
    }
}
