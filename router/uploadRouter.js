const uploadRouter = require("express").Router();
const upload = require("../config/cloudinary");
const {uploadController} = require("../controller/uploadController");


uploadRouter.post("/", upload.array("images", 100), uploadController);


module.exports = uploadRouter;