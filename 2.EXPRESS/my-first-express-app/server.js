const express = require("express");

//! instance

const app = express();

// Create the PORT

const PORT = 8082;

// Define the Router handler
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

console.log(app);
