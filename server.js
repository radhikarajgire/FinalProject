const express = require("express");
const connectDB = require('./config/db');
const app = express();
//connect database
connectDB();
app.get('/', (req, res) => res.send('API running'));
  
  // const coordinators = [
  //   { id: 1, firstName: "Rania", lastName: "" },
  //   { id: 2, firstName: "Richard", lastName: "" },
  //   { id: 3, firstName: "Radhika", lastName: "Rajgiri" },
  // ];
  // res.json(coordinators);
  

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started  on port ${PORT}`));
