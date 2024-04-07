const {
  CLIENT_ID,
  CLIENT_SECRET,
  CLIENT_CALLBACK_URL,
  GOOGLE_DEFAULT_PASSWORD_FOR_NEW_USER,
  COOKIE_SECRET,
} = require("../config/enviroments/env");

const ggOptionsStrategy = {
  clientID: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  callbackURL: CLIENT_CALLBACK_URL,
};

const localOptions = {
  usernameField: "email",
  passwordField: "password",
  passReqToCallback: true,
};

const sessionOptions = {
  secret: COOKIE_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
};
module.exports = {
  ggOptionsStrategy,
  localOptions,
  GOOGLE_DEFAULT_PASSWORD_FOR_NEW_USER: GOOGLE_DEFAULT_PASSWORD_FOR_NEW_USER,
  sessionOptions,
};
