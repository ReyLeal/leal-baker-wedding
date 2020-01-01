const mongoose = require('mongoose');
const RSVPCodes = require('../../model/RSVPCodes.model');
const RSVPs = require('../../model/RSVPs.model');
const getSecret = require('../../secrets.js');

mongoose.connect(getSecret('dbUri'));
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

async function getCount(rsvpCode) {
  let resp = 0;

  if (rsvpCode === 'SHOW_ALL_RSVPS_SUNJAMIN') {
    await RSVPs.find({'attending': true}, 'firstName lastName guestCount message', (err, response) => {
      if (response && response[0]) {
        resp = response;
      }
    });
  } else {
    await RSVPCodes.find({rsvpCode}, (err, response) => {
      if (response && response[0] && response[0].count) {
        resp = response[0].count;
      }
    });
  }
  return resp;
}

module.exports = getCount;