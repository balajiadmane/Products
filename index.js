var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors');
var app = express();
var product = require('./routes/product')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 


app.use(product);
app.listen(8088);