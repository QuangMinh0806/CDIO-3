const  {User}  = require("../model/userModel");
const sendMail = require("../config/sendEmail");
const activeToken = require("../middleware/activeToken");
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");

const registerUser = async (userData) => {
    try {
        const user = await User.findOne({
            where : {
                Email : userData.Email
            }
        });
        if(user){
            return null;
        }
        else{
            const user = {
                UserName : userData.UserName,
                Email    : userData.Email,
                Password : userData.Password
            }
            const token = activeToken(user);
            const otp = token.code;
            try {
                sendMail({
                    email : userData.Email,
                    subject : "Xác nhận đăng ký tài khoản",
                    message : otp
                })
                return token;
            } catch (error) {
                console.log(error);
            }
        }
    } catch (error) {
        console.log(error);
    }
};

const activeUser = async (userData) => {
    try {
        const users = jwt.verify(userData.token, process.env.JWT);
        if(users.code != userData.code){
            return null;
        }
        const newUser = await User.create(users.user);
        return newUser;
    } catch (error) {
        console.log(error);
    }
}

const loginUser  = async (userData) => {
    try {
        const users = await User.findOne({
            where : {
                Email : userData.Email
            }
        })
        if(!users){
            return -1;
        }
        else{
            const check = await bcryptjs.compare(userData.Password, users.Password);
            if(!check){
                return -2;
            }
            else{
                return users;
            }

        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = { registerUser, activeUser, loginUser};