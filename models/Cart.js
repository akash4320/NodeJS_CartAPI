const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const cartSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
 
module.exports = mongoose.model("Cart", cartSchema);