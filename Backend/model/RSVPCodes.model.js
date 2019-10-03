const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RSVPCodesSchema = new Schema({
  rsvpCode: String,
  count: Number,
  name: String,
}, {timestamps: true});

module.exports = mongoose.model('RSVPCodes', RSVPCodesSchema);