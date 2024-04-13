const mongoose = require('mongoose');

const ContributorWaterSchema = new mongoose.Schema({
    user_name: {
        type: String,
        required: true
    },
    user_docx: {
        type: String
    },
    user_sex: {
        type: String,
        required: true
    },
    user_liveaddress: {
        type: String,
        required: true
    },
    date_time: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    status: {
        type: String,
        enum: ['Pending', 'Approved', 'Rejected'],
        default: 'Pending'
    }
});

module.exports = mongoose.model('contributor', ContributorWaterSchema);
