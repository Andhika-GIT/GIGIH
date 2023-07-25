require("dotenv").config();
const express = require("express");

// routes
import router from "./routes/routes";

// setup connection
const mongoose = require("mongoose");
const DB_URL = process.env.DB_URL;

mongoose.connect(DB_URL);
const db = mongoose.connection;

db.on("error", (err) => {
  console.log(err);
});

db.on("connected", () => {
  console.log("connected!");
});

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use("/api/v1", router);

app.listen(process.env.PORT, (req, res) => {
  console.log("server is running");
});
