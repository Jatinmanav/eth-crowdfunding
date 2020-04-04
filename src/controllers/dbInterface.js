const Crowdfunding = require("../models/crowdfundingModel");
const bodyParser = require("body-parser");
const cors = require("cors");

module.exports = function (app) {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(cors());

  app.get("/", function (req, res) {
    res.send("Hello World");
  });
};
