const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const cartSchema = new Schema({
  id: Number,
  title: String,
  description: String,
  price: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Specifying the DB name in Schema to handle multiple DB
const cartDB = mongoose.connection.useDb('Cart');
 
module.exports = cartDB.model("CartModel", cartSchema,"CartCollection");