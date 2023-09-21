const CartModel = require("../models/Cart");
 
exports.getAllCartItems = () => {
  return new Promise((resolve,reject)=> {
    CartModel.find()
    .then((response)=> resolve(response))
    .catch((err)=> reject(err))
  });
};

exports.createCartItem = (item) => {
    return new Promise((resolve,reject)=> {
      CartModel.create(item)
      .then((response)=> resolve(response))
      .catch((err)=> reject(err))
    });
};

exports.getCartItemById = (cart_id) => {
  return new Promise((resolve,reject)=> {
    CartModel.findOne({"id": cart_id})
    .then((response)=> resolve(response))
    .catch((err)=> reject(err))
  });
};

exports.updateCartById = (cart_id,data) => {
  return new Promise((resolve,reject)=> {
    CartModel.updateOne({"id": cart_id},data)
    .then((response)=> {
      resolve(response)
    })
    .catch((err)=> reject(err))
  });
};

exports.deleteCartById = (cart_id) => {
  return new Promise((resolve,reject)=> {
    CartModel.deleteOne({"id": cart_id})
    .then((response)=> {
      resolve(response)
    })
    .catch((err)=> reject(err))
  });
};