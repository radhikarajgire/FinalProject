const mongoose = require("mongoose");

const StudentLearnPathSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.ObjectId,
    ref: "Student",
    required: true,
  },
  learnPathId: {
    type: mongoose.Schema.ObjectId,
    ref: "LearnPath",
    required: true,
  },
  startDate: {
    type: Date,
    default: Date.now,
  },
  expectedFinishDate: Date,
  completedItems: [{ type: mongoose.Schema.ObjectId }],
  finalResult: String
});

// db table called studentLearnPaths
module.exports = mongoose.model("StudentLearnPath", StudentLearnPathSchema);
