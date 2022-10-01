const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: false,
      },
    guest: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Guest",
        required: false,
      },
    message: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });
  
  module.exports = mongoose.model("Feedback", FeedbackSchema);