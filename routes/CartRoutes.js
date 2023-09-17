const express = require("express");
const {
    getAllCartItems,
    createCartItem,
} = require("../controllers/CartController");
 
const router = express.Router();
 
router.route("/").get(getAllCartItems).post(createCartItem);
 
module.exports = router;