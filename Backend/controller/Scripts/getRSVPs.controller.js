const mongoose = require('mongoose');
import RSVPCodes from '../../model/RSVPCodes.model'
const getSecret = require('../../secrets.js');

mongoose.connect(getSecret('dbUri'));
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

export default async function getCount (rsvpCode){
  let count = 0;

  await RSVPCodes.find({rsvpCode}, (err, response) => {
    if(response && response[0] && response[0].count) {
      count = response[0].count;
    }
  });

  return count;
};