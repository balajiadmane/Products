var express = require('express')

var router = express.Router();


router.get("/products",(req,res)=>{

    res.json({
        name:"balaji",
        addr:"latur",
        phone:9823479502,
        id:"12zsa412asad"
    })
})



module.exports = router;