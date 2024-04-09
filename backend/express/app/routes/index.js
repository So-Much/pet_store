// Routes
const userRoute = require("./userRoute");
const productRoute = require("./productRoute");
const authRoute = require("./authRoute");
const cartRoute = require("./cartRoute");
const orderRoute = require("./orderRoute");

module.exports = function routes(app) {
  app.use("/auth", authRoute);
  app.use("/api/user", userRoute);
  app.use("/api/product", productRoute);
  app.use('/api/cart', cartRoute);
  app.use('/api/order', orderRoute);
};
