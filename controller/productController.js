const ProductsService = require("../service/productService");

const getHomePage = async (req, res) => {
    try {
        const homePage = await ProductsService.getHomePage();
        res.status(200).json(homePage);
    } catch (error) {
        res.status(500).json(error);
    }
}

const createProduct = async (req, res) => {
    try {
        if(req.body.VariantsProduct && req.body.Image){
            req.body.VariantsProduct = JSON.stringify(req.body.VariantsProduct);
            req.body.Image = JSON.stringify(req.body.Image);
        }
        const newProducts = await ProductsService.createProduct(req.body);
        if(newProducts == -1){
            res.status(404).json({
                succes : false,
                message : "Sản phẩm đã có trong cửa hàng"
            })
        }
        else if(!newProducts){
            res.status(404).json({
                succes : false,
                message : "Thêm sản phẩm không thành công"
            })
        }
        else{
            res.status(201).json({
                succes : true,
                message : "Thêm sản phẩm thành công",
                newProducts
            })
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

const getDetailProduct = async (req, res) => {
    
}


module.exports = {getHomePage, createProduct};