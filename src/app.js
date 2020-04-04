const express = require("express");
const config = require("./utils/config");
const dbInterface = require("./controllers/dbInterface");

const startServer = async () => {
  const app = express();
  dbInterface(app);
  app.listen(config.PORT, (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Server is running on Port:", config.PORT);
  });
};

startServer();
