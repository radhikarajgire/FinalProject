const express = require("express");
const app = express();
app.get("/api/coordinators", (req, res) => {
  const coordinators = [
    { id: 1, firstName: "Rania", lastName: "" },
    { id: 2, firstName: "Richard", lastName: "" },
    { id: 3, firstName: "Radhika", lastName: "Rajgiri" },
  ];
  res.json(coordinators);
});
const port = 5000;
app.listen(port, () => console.log(`Server started  on port ${port}`));
