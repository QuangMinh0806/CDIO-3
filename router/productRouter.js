const productRouter = require("express").Router();
const {getHomePage, createProduct} = require("../controller/productController");


productRouter.get("/", getHomePage);
productRouter.post("/", createProduct);

module.exports = productRouter;