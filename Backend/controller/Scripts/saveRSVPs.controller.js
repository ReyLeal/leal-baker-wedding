const mongoose = require('mongoose');
const RSVPs = require('../../model/RSVPs.model');
const getSecret = require('../../secrets.js');

//DATABASE
mongoose.connect(getSecret('dbUri'));
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const checkDuplicateRSVP = (firstName, lastName) =>
  RSVPs.find({firstName, lastName}, (err, response) => {
    console.log(response, err);
    if (err) return {valid: false};
    let valid = true;
    console.log(response);
    response.map(rsvp => {
      if(firstName === rsvp.firstName && lastName === rsvp.lastName) {
        valid = false
      }
      return true;
    });
    console.log('validation', valid);
    return {valid};
  });

//SAVE SUMMONER DATA TO THE DATABASE
const saveRSVP = async ({firstName, lastName, message, wholeParty}) => {
  if(!checkDuplicateRSVP(firstName, lastName).valid) {
    return {success: false, message: 'You have already submitted a RSVP'}
  }
  const rsvpModel = new RSVPs();

  RSVPs.firstName = firstName;
  RSVPs.lastName = lastName;
  RSVPs.message = message;
  RSVPs.wholeParty = wholeParty;

  await rsvpModel.save(err => {
    if (err) console.log('Database Error: ', err);
    else console.log(`Success: { ${firstName} : ${lastName} }`);
  });

  return {success: true, message: `Thank you! Looking forward to see you there, ${firstName}!`}
};


module.exports = saveRSVP;
