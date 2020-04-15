const fs = require("fs");
const bodyParser = require("body-parser");
const cors = require("cors");
const Crowdfunding = require("../models/crowdfundingModel");

module.exports = function (app) {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(cors());

  app.post("/api/crowdfunding/create_campaign", function (req, res) {
    const body = req.body;
    const crowdFundingObject = new Crowdfunding({
      campaignName: body.campaignName,
      campaignDes: body.campaignDes,
      targetAmount: body.targetAmount,
      currentAmount: 0,
      completed: false,
    });
    fs.readFile(body.campaignImage, (error, data) => {
      data = data.toString("base64");
      crowdFundingObject.campaignImage = data;
      crowdFundingObject.campaignImage.contentType = "image/png";
      crowdFundingObject
        .save()
        .then((savedObject) => {
          res.json(["success", savedObject]);
        })
        .catch((error) => {
          res.json(["error", error]);
        });
    });
  });
};
