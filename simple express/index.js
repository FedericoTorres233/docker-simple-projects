const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hi");
});

app.listen(110, () => {
  console.log("Listening on port 110");
});
