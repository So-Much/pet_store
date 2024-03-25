// Routes
const userRoute = require("./userRoute");
const productRoute = require("./productRoute");
const authRoute = require("./authRoute");

module.exports = function routes(app) {
  app.use("/auth", authRoute);
  app.use("/api/user", userRoute);
  app.use("/api/product", productRoute);
};
