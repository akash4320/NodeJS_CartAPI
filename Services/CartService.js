const CartModel = require("../models/Cart");
 
exports.getAllCartItems = async () => {
  return await CartModel.find();
};

exports.createCartItem = async (item) => {
    return await CartModel.create(item);
  };