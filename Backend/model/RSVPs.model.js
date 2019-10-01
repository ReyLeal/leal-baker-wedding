const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RSVPsSchema = new Schema({
  firstName: String,
  lastName: String,
  wholeParty: Number,
  message: String,
}, {timestamps: true});

module.exports = mongoose.model('RSVPs', RSVPsSchema);