const cartService = require('../Services/CartService');

exports.getAllCartItems = (req, res) => {
  cartService.getAllCartItems().then((cartItems) => {
    res.json({ data: cartItems, status: "success" });
  }).catch((err) => {
    res.status(500).json({ error: err });
  })
};

exports.createCartItem = (req, res) => {
  cartService.createCartItem(req.body).then((cartItem) => {
    res.json({ data: cartItem, status: "success" });
  }).catch((err) => {
    res.status(500).json({ error: err });
  })
};

exports.getCartItemById = (req, res) => {
  cartService.getCartItemById(req.params.id).then((cartItem) => {
    res.json({ data: cartItem, status: "success" });
  }).catch((err) => {
    res.status(500).json({ error: err });
  })
};

// updateCartById
exports.updateCartById = (req, res) => {
  cartService.updateCartById(req.params.id,req.body).then((respone) => {
    res.json({ data: respone, status: "success" });
  }).catch((err) => {
    res.status(500).json({ error: err });
  })
};

// deleteCartById
exports.deleteCartById = (req, res) => {
  cartService.deleteCartById(req.params.id).then((respone) => {
    res.json({ data: respone, status: "success" });
  }).catch((err) => {
    res.status(500).json({ error: err });
  })
};