const express = require('express');
const bodyParser = require('body-parser');
const getSecret = require('./secrets');
const saveRSVPs = require("./controller/Scripts/saveRSVPs.controller");
const getCount = require("./controller/Scripts/getRSVPs.controller");
const logger = require('morgan');
const mongoose = require('mongoose');
const path = require("path");

const app = express();
const router = express.Router();

const API_PORT = process.env.PORT || 8000;

mongoose.connect(getSecret('dbUri'), { useNewUrlParser: true } );
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(logger('dev'));

router.get('/', (req, res) => {
  res.json({message: 'Hello, World!'});
});

router.post('/saveRSVP', (req, res) => {
  const params = {...req.body};
  saveRSVPs(params)
    .then(({success, message}) => {
      return res.json({success, message})
    })
    .catch(err =>  res.json({success: false, error: err}));
});


router.post('/getGuestCount', async (req, res) => {
  const {rsvpCode} = {...req.body};
  getCount(rsvpCode)
    .then((count) => {
      console.log(count);
      return res.json({success: true, maxGuests: count})
    })
    .catch(err =>  res.json({success: false, error: err}));
});


app.on('listening',function(){
  console.log('ok, server is running');
});

app.use('/api', router);

app.use(express.static(path.join(__dirname, "client", "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(API_PORT, () => console.log(`listening on port: ${API_PORT}`));