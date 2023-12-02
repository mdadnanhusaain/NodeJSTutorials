const fs = require("fs");
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const data = fs.readFileSync("index.html");
  res.send(data.toString());
});
app.get("/about", (req, res) => {
  res.send("This is an about page in Express");
});
app.get("/hello", (req, res) => {
  res.send("Hello World in ExpressJS!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
