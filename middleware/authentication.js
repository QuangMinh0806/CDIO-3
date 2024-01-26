const jwt = require("jsonwebtoken");

const authentication = async (req, res, next) => {
    const {token} = req.cookies;
    const user = jwt.verify(token, process.env.JWT);
    req.user = user;
    next();
}

module.exports = authentication;