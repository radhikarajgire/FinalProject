const express = require("express");
const connectDB = require('./config/db');
const app = express();

//connect database
connectDB();


// Init Middleware
app.use(express.json());


  //define routes
  app.use('/api/users',require('./routes/api/users'));
  app.use('/api/auth', require('./routes/api/auth'));
  app.use('/api/profile', require('./routes/api/profile'));
  app.use('/api/notes', require('./routes/api/notes'));

 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started  on port ${PORT}`));
const mongo = require('mongodb').MongoClient;
const client = require('socket.io').listen(4000).sockets;

// // Connect to mongo
// mongo.connect('mongodb://127.0.0.1/mongochat', function(err, db){
//     if(err){
//         throw err;
//     }

//     console.log('MongoDB connected...');

//     // Connect to Socket.io
//     client.on('connection', function(socket){
//         let chat = db.collection('chats');

//         // Create function to send status
//         sendStatus = function(s){
//             socket.emit('status', s);
//         }

//         // Get chats from mongo collection
//         chat.find().limit(100).sort({_id:1}).toArray(function(err, res){
//             if(err){
//                 throw err;
//             }

//             // Emit the messages
//             socket.emit('output', res);
//         });

//         // Handle input events
//         socket.on('input', function(data){
//             let name = data.name;
//             let message = data.message;

//             // Check for name and message
//             if(name == '' || message == ''){
//                 // Send error status
//                 sendStatus('Please enter a name and message');
//             } else {
//                 // Insert message
//                 chat.insert({name: name, message: message}, function(){
//                     client.emit('output', [data]);

//                     // Send status object
//                     sendStatus({
//                         message: 'Message sent',
//                         clear: true
//                     });
//                 });
//             }
//         });

//         // Handle clear
//         socket.on('clear', function(data){
//             // Remove all chats from collection
//             chat.remove({}, function(){
//                 // Emit cleared
//                 socket.emit('cleared');
//             });
//         });
//     });
// });