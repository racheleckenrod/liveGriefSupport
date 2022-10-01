const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Guest",
        required: true,
    
      },
    comment: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      required: true,
    },
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
   
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });
  
  module.exports = mongoose.model("Feedback", FeedbackSchema);