const express = require("express");
const router = express.Router();

const itemController = require("../app/controllers/itemController");
const orderController = require("../app/controllers/orderController");
const deliverController = require("../app/controllers/deliverController");

//items
router.get("/items", itemController.list);
router.post("/items", itemController.create);
router.get("/items/:radio", itemController.show);
router.get("/items/search/:value", itemController.search);

//orders
router.get("/orders", orderController.list);
router.post("/orders", orderController.create);
router.delete("/orders/:id", orderController.destroy);

//deliverItems
router.get("/deliverItems", deliverController.list);
router.post("/deliverItems", deliverController.create);

module.exports = router;
