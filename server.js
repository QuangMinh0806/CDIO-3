const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
require("dotenv").config();
const corsOptions = {
    origin: 'http://localhost:8080/'
};
const {connectToDB} = require("./config/mysqlConfig");




app.use(cors(corsOptions));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//Router
const userRouter = require("./router/userRouter");
const uploadRouter = require("./router/uploadRouter");
const productRouter = require("./router/productRouter");


//Api
app.use("/upload", uploadRouter);
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);





app.listen(process.env.PORT, async() => {
    await connectToDB();
})
