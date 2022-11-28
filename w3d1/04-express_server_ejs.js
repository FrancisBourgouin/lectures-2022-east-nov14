// Basic express server w/ EJS

const express = require("express");
const app = express(); // http.createServer
const port = 3000;

const { generateBackgroundColor } = require("./helpers");

app.set("view engine", "ejs");

app.get("/:name", (req, res) => {
  const someRandomNumber = Math.floor(Math.random() * 9);

  const templateVars = {
    someRandomNumber,
    name: req.params.name,
    background: generateBackgroundColor(),
  };

  res.render("index", templateVars);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
