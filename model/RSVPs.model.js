const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RSVPsSchema = new Schema({
  rsvpCode: String,
  firstName: String,
  lastName: String,
  attending: Boolean,
  guestCount: Number,
  message: String,
}, {
  collection: 'rsvps',
  timestamps: true
});

module.exports = mongoose.model('RSVPs', RSVPsSchema);