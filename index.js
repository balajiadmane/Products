var express = require('express')
var bodyParser = require('body-parser')
var product = require('./routes/product')
var app = express()
var cors = require('cors')
var multer = require('multer')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use(cors())


app.use("/api",product);

app.listen(8088,()=>console.log("api started"))