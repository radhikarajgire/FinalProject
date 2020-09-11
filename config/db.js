const mongoose = require("mongoose");
const config = require("config");
const db= config.get("mongoURI");


const connectDB = async () => {
//   const options = {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: true,
//     useUnifiedTopology: true
//   };

//   const conn = await mongoose.connect(dbURI, options);
//   //conn.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
  
//   console.log(`Mongo DB connected ${conn.connection.host}`);
// }
try{
  await mongoose.connect(db,{useNewUrlParser: true,
    useCreateIndex: true,
        
        useUnifiedTopology: true});
console.log('Mongo DB connected');
}
catch(err){
  console.error(err.message);
  process.exit(1);
}
}
module.exports = connectDB;