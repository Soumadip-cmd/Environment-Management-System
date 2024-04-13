
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

  user_liveaddress: {
    type: String,
    required: true
  },
  user_emergencyphneno: {
    type: String,
    required: true
  },
  work_type:{
    type:String,
    required:true
  },
  other_worktype:{
    type:String,
    
  },
  date_time:{
    type:String,
    required:true
  },
  description:{
    type:String,
    
  },
  status: {
    type: String,
    enum: ['Pending', 'Approved', 'Rejected'], 
    default: 'Pending' 
  }
});

module.exports = mongoose.model('RewardsClaimUser', RewardsClaimSchema);
