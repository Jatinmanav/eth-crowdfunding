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

  app.get("/api/crowdfunding/get_all_campaigns", function (req, res) {
    Crowdfunding.find(
      { completed: false },
      {
        campaignImage: false,
        completed: false,
      }
    )
      .then((objects) => {
        res.json(["Success", objects]);
      })
      .catch((error) => {
        res.json[("Error", error)];
      });
  });

  app.get("/api/crowdfunding/get_one_campaign/:id", function (req, res) {
    Crowdfunding.findOne({ campaignName: req.params.id })
      .then((object) => res.json(["Success", object]))
      .catch((error) => res.json(["Error", error]));
  });

  app.post("/api/crowdfunding/invest_campaign", function (req, res) {
    Crowdfunding.findOneAndUpdate(
      { campaignName: req.body.campaignName },
      { $inc: { currentAmount: req.body.amount } },
      {
        projection: { campaignName: 1, currentAmount: 1 },
      }
    )
      .then((updatedObject) => res.json(["success", updatedObject]))
      .catch((error) => res.json(["error", error]));
  });

  app.post("/api/crowdfunding/admin/stop_campaign", function (req, res) {
    Crowdfunding.findOneAndUpdate(
      { campaignName: req.body.campaignName },
      { completed: true }
    )
      .then((updatedObject) => res.json(["success", updatedObject]))
      .catch((error) => res.json(["error", error]));
  });
};
