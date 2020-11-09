const express = require('express');
const fileUpload = require('express-fileupload');
var bodyParser = require('body-parser')
var doctorvideoinfoModel = require('../model/docvideoinfo')

var router = express.Router()

const fs = require('fs')
var cors = require("cors");

const app = express();
PORT = 5000
app.use(fileUpload());
app.use(cors());


var encoder = bodyParser.urlencoded({
  extended: true
})
bodyParser.urlencoded({ extended: true });

// Upload Endpoint
router.post('/upload',encoder, (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }console.log("line 26 "+req.body)
  console.log(req.body)
  console.log("before"+req);
  const file = req.files.file;

  console.log(req.files);

    const title =  req.body;

      console.log(req.body)



  file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
});



module.exports = router