const UserService = require("../service/userService");
const tokenCookie = require("../middleware/cookie");

const registerUser = async(req, res) => {
    try {
        const newUser = await UserService.registerUser(req.body);
        if(newUser){
            res.status(201).json({
                message : `Kiểm tra email : ${req.body.Email}`,
                token : newUser.token,
                otp : newUser.code
            }) 
        }
        else{
            res.status(404).json({
                status : false,
                message : "Email đã tồn tại"
            })
        }
    }catch (error) {
        res.status(500).json(error);
    }
}

const activeUser = async(req, res) => {
    try {
        const user = await UserService.activeUser(req.body);
        if(user){
            res.status(201).json("Đăng ký thành công");
        }
        else{
            res.status(404).json("Mã OTP sai");
        }
    } catch (error) {
        res.status(500).json(error); 
    }

}


const loginUser = async (req, res) => {
    const user = await UserService.loginUser(req.body);
    if(user == -1){
        res.status(404).json({
            success : false,
            message : "Không tìm thấy email"
        });
    }
    else if(user == -2){
        res.status(404).json({
            success : false,
            message : "Sai mật khẩu"
        });
    }
    else{
        tokenCookie(user, 200, res);
    }
}



module.exports = {registerUser, activeUser, loginUser};