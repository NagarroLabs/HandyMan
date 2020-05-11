const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 60
  },
  phone: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  birthDate: {
    type: Date,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  handyManId: {
    type: mongoose.Types.ObjectId,
    ref: 'HandyMan'
  },
  employedHandyMen: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'HandyMan'
    }
  ]
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);
