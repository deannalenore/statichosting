const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));

let counter = 0;

app.get("/reset", function (req, res, next) {
  counter = 0;
  let payload = JSON.stringify(counter);
  res.send(payload);
});

app.get("/increment", (req, res) => {
  counter++;
  let payload = JSON.stringify(counter);
  res.send(payload);
});

app.get("/decrement", (req, res) => {
  counter--;
  let payload = JSON.stringify(counter);
  res.send(payload);
});

app.listen(3000, function () {
  console.log("listening on port 3000");
});
