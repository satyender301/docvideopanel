const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/croxxDB', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})

var conn = mongoose.connection

var doctorvideoinfoSchema = new mongoose.Schema({
     file:String,
    title: String,
    keyword: String,

    summary: String,
 
  
})

var doctorvideoinfoModel = mongoose.model('doctorstubevideoinfotable', doctorvideoinfoSchema)

module.exports = doctorvideoinfoModel
