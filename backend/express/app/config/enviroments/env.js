const dotenv = require("dotenv");
dotenv.config();

const env = {
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
  CLIENT_CALLBACK_URL: process.env.CLIENT_CALLBACK_URL,
  CLIENT_URL: process.env.CLIENT_URL,
  COOKIE_SECRET: process.env.COOKIE_SECRET,
  NODE_ENV: process.env.NODE_ENV,
  GOOGLE_DEFAULT_PASSWORD_FOR_NEW_USER: process.env.GOOGLE_DEFAULT_PASSWORD_FOR_NEW_USER,
};

module.exports = env;
