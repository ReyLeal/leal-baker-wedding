const mongoose = require('mongoose');
import RSVPs from '../../model/RSVPs.model'
const getSecret = require('../../secrets.js');

//DATABASE
mongoose.connect(getSecret('dbUri'));
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const checkDuplicateRSVP = async (firstName, lastName) => {
  let valid = true;

  await RSVPs.find({firstName, lastName}, (err, response) => {
    if (err) return {valid: false};
    response.map(rsvp => {
      if(rsvp.firstName === firstName && rsvp.lastName === lastName) {
        valid = false
      }
      return true;
    });
  });

  return {valid};
};

const saveRSVP = async ({firstName, lastName, message, wholeParty}) => {
  const dupeCheck = await checkDuplicateRSVP(firstName, lastName);

  if(dupeCheck.valid === false) {
    return {success: false, message: 'You have already submitted a RSVP'}
  }
  const rsvpModel = new RSVPs();

  rsvpModel.firstName = firstName;
  rsvpModel.lastName = lastName;
  rsvpModel.message = message;
  rsvpModel.wholeParty = wholeParty;

  await rsvpModel.save(err => {
    if (err) console.log('Database Error: ', err);
    else console.log(`Success: { ${firstName} : ${lastName} }`);
  });

  return {success: true, message: `Thank you! Looking forward to see you there, ${firstName}!`}
};

module.exports = saveRSVP;