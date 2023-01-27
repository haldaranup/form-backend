const express = require("express");
const userRoute = require("./routes/user.route.js");
const home = require("./routes/home.route.js");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
require('dotenv').config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to MongoDB");
});

app.use("/myStore/api/user", userRoute);
app.use("/", home);


app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is up and running on port http://localhost:5000`);
});
