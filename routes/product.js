var express = require('express')

var router = express.Router();  
var product = require('../model/productModel');

router.get("/products", (req, res) => {


})

router.post("/addNewProduct", (req, res) => {
    var message = [];
    if(req.body.Product_name === ""){
       message.push({message:"Please enter message"});
    } if(req.body.Product_descr === "") {
        message.push({message:"Please enter description"});
    } if(req.body.Product_price ===""){
        message.push({message:"Please enter product price"});
    }

    if(message.length > 0){
        res.status(403).json(message);
    }else{
        product(req.body,res); 
    }
})



module.exports = router;