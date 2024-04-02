const express = require("express");
const app = express();
const port = 8000;

// DB - Connect to MongoDB
const {
  mongoDBConnect
} = require('./config/index');
// Routes
const routes = require('./routes/index');
// Body Parsers
const useParser = require('./utils/parser')

const passportConfig = require('./config/resources/passportConfig')

// Connect to MongoDB
mongoDBConnect();
// apply Parsers
useParser(app);
// apply Routes
routes(app);
passportConfig(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
