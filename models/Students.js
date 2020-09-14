const mongoose = require('mongoose');


const StudentSchema=new mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,    
  },
  level: String
});

// table should be called students
module.exports = mongoose.model('Student' , StudentSchema);