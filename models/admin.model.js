const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    username: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

const Admin = mongoose.model('admins', AdminSchema);

module.exports = Admin;
