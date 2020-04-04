const mongoose = require("mongoose");
const config = require("../utils/config");
const url = config.MONGODB_URI;

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((result) => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("error connecting to MongoDB:", error.message);
  });

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
