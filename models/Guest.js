const mongoose = require("mongoose");

const GuestSchema = new mongoose.Schema({
    userName: { type: String, unique: false },
    email: { type: String, unique: true },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  
  })

  module.exports = mongoose.model("Guest", GuestSchema);