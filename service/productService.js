const {Products} = require("../model/productsModel");
const {CategorySub} = require("../model/categorySubModel");
const {Category} = require("../model/categoryModel");
const {ProductCollections} = require("../model/productCollectionsModel");
const {Collections} = require("../model/collectionModel"); 
const {Needs} = require("../model/needsModel");
const {ProductNeeds} = require("../model/productNeedModel");
const { Sequelize } = require("sequelize");


const getHomePage = async () => {
    try {
        const sellingProducts = await Products.findAll({
            order : [["QuantitySell", "DESC"]],
            limit : 15,
        });

        const newProducts = await Products.findAll({
            order : [["CreateDate", "DESC"]],
            limit : 15,
        })

        const longPantProduct = await Products.findAll({
            attributes: { exclude: ['CategorySubId'] }, 
            include : [{
                model : CategorySub,
                where : {Name : "Dài"},
                include : [{
                    model : Category,
                    where : {Name : "Quần"},
                }]
            }],
            limit : 15
        })

        const winterProduct = await Products.findAll({
            attributes: { exclude: ['CategorySubId', 'CreateDate'] }, 
            include : [{
                model : ProductCollections,
                attributes: { exclude: ['ProductId', 'CollectionID']},
                include : [{
                    model : Collections,
                    where : {Name : "Đồ Thu Đông"}
                }]
            }],
            limit : 15
        })


        const runningProduct = await Products.findAll({
            attributes: { exclude: ['CategorySubId', 'CreateDate'] }, 
            include : [{
                model : ProductNeeds,
                attributes: { exclude: ['ProductID', 'NeedID']},
                include : [{
                    model : Needs,
                    where : {NeedName : "Chạy bộ"}
                }]
            }],
            limit : 15
        })
        return {sellingProducts, newProducts, longPantProduct, winterProduct, runningProduct};
    } catch (error) {
        console.log(1, error.message);
    }
}


const createProduct = async (productData) => {
    try {
        const check = await Products.findOne({
            where : {
                CodeProduct : productData.CodeProduct
            }
        })
        if(check){
            return -1;
        }
        const newProducts = await Products.create(productData);
        if(newProducts){
            return newProducts;
        }
        else{
            return null;
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = {getHomePage, createProduct};