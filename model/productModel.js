var AWS = require("aws-sdk");
const uuidv1 = require('uuid/v1');
AWS.config.update({
    accessKeyId: 'AKIAIMSWRMIHYXNBRTAA',
    secretAccessKey: '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',
    region: "ap-south-1"
});
var docClient = new AWS.DynamoDB.DocumentClient();


var addNewProduct= (product,res)=>{
    product['Product_id']=uuidv1();
    product['Product_title']="12212";
    var params = {
        TableName:"ProductInfo",
        Item:product
    }
    docClient.put(params,(err,data)=>{
        if (err) {
           // console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
            res.status(403).json({ message: "Erro white adding new product" });
        } else {
           // console.log("Added item:", JSON.stringify(data, null, 2));
            res.status(201).json({ message: "Product added." });
        }
    });   
}



module.exports=  addNewProduct;