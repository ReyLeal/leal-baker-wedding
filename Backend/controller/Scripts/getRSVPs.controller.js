const mongoose = require('mongoose');
import RSVPCodes from '../../model/RSVPCodes.model'
const getSecret = require('../../secrets.js');

const getCount = async (rsvpCode) => {
  let count = 0;

  mongoose.connect(getSecret('dbUri'));
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));

  await RSVPCodes.find({rsvpCode}, (err, response) => {
    console.log(response);
    if(response.count) {
      count = response.count;
    }
  });

  return count;
};

module.exports = getCount;