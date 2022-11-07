const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema(
  {
    message: { type: String, require: true, trim: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  },
  { timestamps: true }
);

const Message = mongoose.model("messages", MessageSchema);

module.exports = Message;
