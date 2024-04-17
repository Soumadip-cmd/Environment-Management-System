const mongoose = require("mongoose");
const { Schema } = mongoose;
const garbageSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  date: {
    type: Date,
    default: Date.now,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
},
garbagetype: {
    type: String,
    required: true,
    
  },
  img: {
    data: Buffer,
    contentType: String
},

});
module.exports = mongoose.model("garbage", garbageSchema);
