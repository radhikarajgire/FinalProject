const mongoose = require("mongoose");

const MultiQuizSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.ObjectId,
    ref: "Teacher",
  },
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  wrongAnswers: [String],
  level: String,
});

// db table called multiQuizzes
module.exports = mongoose.model("MultiQuiz", MultiQuizSchema);
