const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/test")
  .then(() => {
    console.log("Mongo Db Connected!");

    app.listen(3000, () => {
      console.log(`Connection is running on port 3000`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.get("/", (req, res) => {
  res.send("Hello node api");
});

app.get("/blog", (req, res) => {
  res.send("Hello node blog");
});
