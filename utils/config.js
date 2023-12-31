require("dotenv").config();

const URL = process.env.MONGODB_URI;
const PORT = process.env.PORT;
const EMAIL_ADDRESS = process.env.EMAIL_ADDRESS;
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;
const SECRET = process.env.SECRET;
const FEURL = process.env.FEURL;
const BEURL = process.env.BEURL;

module.exports = {
  URL,
  PORT,
  EMAIL_ADDRESS,
  EMAIL_PASSWORD,
  SECRET,
  FEURL,
  BEURL,
};
