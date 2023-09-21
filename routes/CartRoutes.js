const express = require("express");
const {
    getAllCartItems,
    createCartItem,
    getCartItemById,
    updateCartById,
    deleteCartById,
} = require("../controllers/CartController");

const router = express.Router();

router.route("/")
    .get(getAllCartItems).post(createCartItem);

router.route("/:id")
    .get(getCartItemById).put(updateCartById).delete(deleteCartById)

module.exports = router;