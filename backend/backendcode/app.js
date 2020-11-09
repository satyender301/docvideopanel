const express = require('express');
var bodyParser = require('body-parser')
var path = require('path');

var cors = require("cors")
PORT = 5000

var indexRouter = require('./routes/index');

const app= express();
bodyParser.urlencoded({ extended: true });
var router = express.Router();


app.use(express.static(path.join(__dirname, 'public')));


app.use(bodyParser.json());

app.use(express.json());

app.use(cors());

app.use('/', indexRouter);



 app.listen(PORT,()=>{
    console.log('server started... at PORT ' +PORT);
})  