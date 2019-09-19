var AWS = require("aws-sdk");

AWS.config.update({
    accessKeyId: 'AKIAIMSWRMIHYXNBRTAA',
    secretAccessKey: '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',
    region: "ap-south-1"
});

var docClient = new AWS.DynamoDB.DocumentClient();

var params = {
    TableName : "ProductInfo",
    Key:{
            "Product_id":122,
            "Product_title":"test",
          
    }
};

docClient.get(params, function(err, data) {
    if (err) {
        console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
    }
});