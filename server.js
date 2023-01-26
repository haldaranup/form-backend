const express = require("express");
const connectDB = require("./config/db");
const userRoute = require("./routes/user.route.js");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/myStore/api/user", userRoute);


app.listen(5000, async () => {
  try {
    connectDB()
  } catch (error) {
    console.log(error);
  }
  console.log(`Server is up and running on port http://localhost:5000`);
});
