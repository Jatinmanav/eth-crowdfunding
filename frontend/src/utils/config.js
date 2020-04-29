require("dotenv").config();

const BASE_URL = process.env.BASE_URL || "http://localhost:3450";

module.exports = {
  BASE_URL,
};
