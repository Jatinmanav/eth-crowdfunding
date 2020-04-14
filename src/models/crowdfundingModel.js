const mongoose = require("mongoose");

const crowdfundingSchema = new mongoose.Schema({
  campaignID: {
    type: Number,
    required: true,
  },
  campaignName: {
    type: String,
    minlength: 2,
    required: true,
  },
  targetAmount: {
    type: Number,
    required: true,
  },
  currentAmount: {
    type: Number,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
});

const Crowdfunding = mongoose.model("Crowdfunding", crowdfundingSchema);

module.exports = Crowdfunding;
