const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require('cors');
const session = require("express-session");
const { sessionOptions } = require("./passport");


module.exports = function useParser(app) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
  }));
  app.use(cookieParser());
  app.use(session(sessionOptions));
  // app.use(upload.any());
};
