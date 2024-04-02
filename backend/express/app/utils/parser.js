const bodyParser = require("body-parser");
const cors = require('cors');


module.exports = function useParser(app) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());
  // app.use(upload.any());
};
