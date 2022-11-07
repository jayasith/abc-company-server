const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    username: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true },
    role: { type: String, required: true, trim: true, enum: ['manager', 'worker'] },
  },
  { timestamps: true }
);

const User = mongoose.model('users', UserSchema);

module.exports = User;
