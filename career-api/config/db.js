var mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
var url = process.env.DB_HOST;

mongoose
  .connect(url, {
    authSource: "admin",
    // user: process.env.DB_USER,
    // pass: process.env.DB_PASSWORD,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log("Database not connected", err));
