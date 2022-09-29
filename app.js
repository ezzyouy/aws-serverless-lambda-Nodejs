const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.get("/time", (req, res) => {
  let timeNow = Date(Date.now);
  res.status(200).send(timeNow.toString());
});

app.post("/logthis", (req, res) => {
  let name = req.body.name;
  let tolog = `\n >> My Name is ${name} <<`;
  console.info(tolog);
  res.status(200).send(tolog);
});

const port = 8000;
module.exports = app;
