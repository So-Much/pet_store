const bodyParser = require("body-parser");
const cors = require('cors');
const fileupload = require('express-fileupload');


module.exports = function useParser(app) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(
    fileupload({
      createParentPath: true,
    })
  );
  app.use(cors());
  // app.use(upload.any());
};
