const express = require("express");
const connectDB = require('./config/db');
const app = express();

//connect database
connectDB();


// Init Middleware
app.use(express.json({extended: false}));

app.get('/', (req, res) => res.send('API running'));
  
  // const coordinators = [
  //   { id: 1, firstName: "Rania", lastName: "" },
  //   { id: 2, firstName: "Richard", lastName: "" },
  //   { id: 3, firstName: "Radhika", lastName: "Rajgiri" },
  // ];
  // res.json(coordinators);

  //define routes
  app.use('/api/users',require('./routes/api/users'));
  app.use('/api/auth', require('./routes/api/auth'));
  app.use('/api/profile', require('./routes/api/profile'));
  app.use('/api/notes', require('./routes/api/notes'));

 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started  on port ${PORT}`));
