import express from 'express';
import bodyParser from 'body-parser';
import getSecret from './secrets';
import saveRSVPs from "./controller/Scripts/saveRSVPs.controller";
import getCount from "./controller/Scripts/getRSVPs.controller";
import logger from 'morgan';
import mongoose from 'mongoose';

const app = express();
const router = express.Router();

const API_PORT = process.env.PORT || 80;

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

app.listen(API_PORT, () => console.log(`listening on port: ${API_PORT}`));