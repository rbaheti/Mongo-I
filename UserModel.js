const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  // TODO: write your schema here
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  } ,
  // address: {
  //   street1: {
  //     type: String,
  //     required: true
  //   },
  //   street2: {
  //     type: String,
  //     required: false
  //   },
  //   city: {
  //     type: String,
  //     required: true
  //   },
  //   state: {
  //     type: String,
  //     required: true
  //   },
    // zip: {
    //   region: { type: Number, required: true},
    //   plus4: { type: Number, required: false} 
    // }
  // },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', UserSchema);