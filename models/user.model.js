const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    username: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true },
    type: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

const User = mongoose.model('users', UserSchema);

module.exports = User;
