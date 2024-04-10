const mongoose = require('mongoose');

const RewardsClaimSchema = new mongoose.Schema({
  user_name: {
    type: String,
    required: true
  },
  user_docx: {
    type: String, 
    
  },
  user_email: {
    type: String,
    required: true,
    unique: true // Assuming email addresses should be unique
  },
  user_sex: {
    type: String,
    required: true
  },
  user_address: {
    type: String,
    required: true
  },
  user_zip: {
    type: String,
    required: true
  },
  user_city: {
    type: String,
    required: true
  },
  user_state: {
    type: String,
    required: true
  },
  user_district: {
    type: String,
    required: true
  },
  user_phone: {
    type: String,
    required: true
  },
  user_liveaddress: {
    type: String,
    required: true
  },
  user_emergencyphneno: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('RewardsClaimUser', RewardsClaimSchema);
