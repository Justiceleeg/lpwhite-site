const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const { dbConnectionString } = require('./config.js');

const port = 8000;

var app = module.exports = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('build'));

massive(dbConnectionString).then(db => {
    // db.create_seed()
    //   .then().catch(err => console.log(err))
    app.set('db',db)
}).catch((err)=> console.log(err))

var controller = require('./controller');

app.get('/api/about', function(req, res){
  controller.getAboutInfo(req, res)
})

app.get('/api/now', function(req, res) {
  controller.getNowInfo(req, res)
})

app.get('/api/writing', function(req, res){
  controller.getWritingInfo(req, res)
})

app.put('/api/about', function(req, res){
  controller.putAboutinfo(req, res)
})

app.put('/api/now', function(req, res){
  controller.putNowInfo(req, res)
})

app.put('/api/nav', function(req, res){
  controller.putNavPics(req, res)
})

app.post('/api/writing', function(req, res) {
  controller.postWritingInfo(req, res)
})

app.delete('/api/writing', function (req, res) {
  controller.deleteWritingInfo(req, res)
})


// app.get('/api/nav', function(req, res) {
//     controller.getNavPics(req, res)
// })

// app.post('/api/userInfo/:user/:score', function(req, res) {
//   controller.postUserInfo(req, res)
// })

app.listen(port, function(){
  console.log("Successfully listening on :",port)
})
