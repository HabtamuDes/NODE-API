const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter product name"],
    },
    quantity: {
      type: Number,
      required: [true, "Please enter product quantity"],
    },
    price: {
      type: Number,
      required: [true, "Please enter product price"],
    },
    image: {
      type: String,
      required: [true, "Please enter product image"],
    },
  },
  {
    timestamps: true,
  }
);



const product = mongoose.model("product", productSchema);

module.exports = product;