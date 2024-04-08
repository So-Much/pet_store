const GoogleStrategy = require("passport-google-oauth20").Strategy;
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
const LocalStrategy = require("passport-local").Strategy;

const { verifyPassword } = require("../../services/googleServices");

const {
  ggOptionsStrategy,
  localOptions,
  GOOGLE_DEFAULT_PASSWORD_FOR_NEW_USER,
  sessionOptions,
} = require("../../utils/passport");
const User = require("../../models/User");
const passport = require("passport");

module.exports = function passportConfig(app) {

  

  passport.serializeUser((user, done) => {
    done(null, user._id);
  });
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      return done(null, user);
    } catch (error) {
      console.log(error);
      return done(error);
    }
  });

  // local strategy
  passport.use(
    "local",
    new LocalStrategy(localOptions, async (req, email, password, done) => {
      try {
        const user = await User.findOne({ email });
        if (!user) return done(null, false);
        if (!verifyPassword(password, user)) {
          return done(null, false);
        }
        return done(null, user);
      } catch (err) {
        return done(err);
      }
    })
  );

  // google strategy
  passport.use(
    "google-oauth2",
    new GoogleStrategy(
      ggOptionsStrategy,
      async (accessToken, refreshToken, profile, done) => {
        try {
          const user = await User.findOne({ googleId: profile.id });
          if (!user) {
            const newUser = new User({
              googleId: profile.id,
              email: profile.emails[0].value,
              password: GOOGLE_DEFAULT_PASSWORD_FOR_NEW_USER,
              username: profile.displayName,
              avatar: profile.photos[0].value,
            });
            await newUser.save();
            return done(null, newUser);
          }
          return done(null, user);
        } catch (error) {
          return done(error);
        }
      }
    )
  );

  app.use(passport.initialize());
  app.use(passport.session());
  console.log("Passport config successfully");
  return {
    message: "Passport config successfully",
  };
};
