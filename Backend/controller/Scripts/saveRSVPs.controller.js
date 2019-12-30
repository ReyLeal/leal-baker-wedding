import RSVPs from '../../model/RSVPs.model'
import RSVPCodes from '../../model/RSVPCodes.model'
const mongoose = require('mongoose');
const getSecret = require('../../secrets.js');

//DATABASE
const checkDuplicateRSVP = async (rsvpCode) => {
  let valid = true;
  let message = '';

  mongoose.connect(getSecret('dbUri'));
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));

  await RSVPs.find({rsvpCode}, (err, response) => {
    if (err) valid = false;
    response.map(rsvp => {
      console.log(rsvp.rsvpCode, rsvpCode);
      if(rsvp.rsvpCode.toString() === rsvpCode.toString()) {
        valid = false;
        message = 'You have already submitted a RSVP'
      }
      return true;
    });
  });

  await RSVPCodes.find({rsvpCode}, (err, response) => {
    if (err) valid = false;
    if(response.length < 1) {
      valid = false;
      message = 'Invalid RSVP Code';
    }
  });

  return {valid, message};
};

const saveRSVP = async ({firstName, lastName, message, wholeParty, rsvpCode, guestCount}) => {
  const dupeCheck = await checkDuplicateRSVP(rsvpCode);
  if(dupeCheck.valid === false) {
    return {success: false, message: dupeCheck.message}
  }


  mongoose.connect(getSecret('dbUri'));
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));

  const rsvpModel = new RSVPs();

  rsvpModel.firstName = firstName;
  rsvpModel.lastName = lastName;
  rsvpModel.message = message;
  rsvpModel.wholeParty = wholeParty;
  rsvpModel.rsvpCode = rsvpCode;
  rsvpModel.guestCount = guestCount;

  await rsvpModel.save(err => {
    if (err) console.log('Database Error: ', err);
    else console.log(`Success: { ${firstName} : ${lastName} }`);
  });

  return {success: true, message: `Thank you! Looking forward to see you there, ${firstName}!`}
};

module.exports = saveRSVP;