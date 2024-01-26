const userRouter = require("express").Router();
const {registerUser, activeUser, loginUser} = require("../controller/userController");

userRouter.post("/", registerUser);
userRouter.post("/active", activeUser);
userRouter.post("/login", loginUser);

module.exports = userRouter;