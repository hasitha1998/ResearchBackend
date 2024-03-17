const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const campSchema = new mongoose.Schema({
  organizerName: String,
  mobile: String,
  email: String,
  place: String,
  staff: {
    type: Number,
    default: 0
  },
  requiredItems: {
    type: Number,
    default: 0
  },
  date: {
    type: Date,
    default: Date.now
  },
  marketingSlip: String,
});

const Camp = mongoose.model('campaign', campSchema);

module.exports = Camp;