const express = require("express");
const mongoose = require("mongoose");
const Product  = require("./models/productModel")
const app = express();

app.use(express.json());
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


app.post("/product", async(req, res) => {
  try{
    const product = await Product.create(req.body);
    res.status(201).json({product});


  }catch(error){
    console.log(error.message);
    res.status(500).json({message: error.message});
  }
});


app.get("/blog", (req, res) => {
  res.send("Hello node blog");
});
