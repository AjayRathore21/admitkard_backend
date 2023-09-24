const mongoose = require("mongoose");

// Define the User schema
const userSchema = new mongoose.Schema({
  phone: {
    type: Number,
    required: true, // Make 'phone' a required field
    unique: true, // Ensure 'phone' is unique
  },
  otp: {
    type: Number,
    required: true, // Make 'otp' a required field
  },
});

// Create and export the User model
module.exports = mongoose.model("User", userSchema);
