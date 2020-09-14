const mongoose = require("mongoose");

const LearnPathSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  author: {
    type: mongoose.Schema.ObjectId,
    ref: "Teacher"
  },
  items: [{ type: mongoose.Schema.ObjectId }]
});

// db collection should be called learnPaths
module.exports = mongoose.model("LearnPath", LearnPathSchema);
