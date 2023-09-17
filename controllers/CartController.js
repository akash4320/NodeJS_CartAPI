const cartService = require('../Services/CartService');
 
exports.getAllCartItems = async (req, res) => {
  try {
    const cartItems = await cartService.getAllCartItems();
    res.json({ data: cartItems, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.createCartItem = async (req, res) => {
  try {
    const cartItem = await cartService.createCartItem(req.body);
    res.json({ data: cartItem, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};