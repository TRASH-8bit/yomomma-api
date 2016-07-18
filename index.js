var express = require("express");
var fs = require("fs");
var logfmt = require("logfmt");

var app = express();
var jokes = fs.readFileSync("jokes.txt").toString().split("\n");

app.use(logfmt.bodyParserStream());

app.get("/", function(req, res) {
  res.json({ joke: jokes[Math.floor(Math.random() * jokes.length)] });
});

app.listen(process.env.PORT || 3000);
