const mongoose = require('mongoose');

// Create user schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  industry: { type: String },
  gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
  qualification: { type: String },
  experience: { type: String },
  skills: { type: String },
  passion: { type: String },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }, 
});

// Create User model
const User = mongoose.model('User', userSchema);

module.exports = User;
