// Basic express server wo/ EJS

// CRUD => Create Read Update Delete

// GET    => GIMME THE DATA
// POST   => HERE IS SOME DATA
// PUT    => I WANT TO UPDATE DATA
// DELETE => I WANT TO DELETE SOMETHING

const express = require("express");
const app = express(); // http.createServer
// const app2 = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
  // res.statusCode(201).send("...")
});

app.get("/cool-page", (req, res) => {
  console.log("yeah.");
  const someRandomNumber = Math.floor(Math.random() * 9000);
  res.send(`<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <title>Some Page</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
    <body>
      <h1>TITLE OF PAGE</h1>
      <p>${someRandomNumber}</p>
    </body>
  </html>`);
});

app.get("/bob", (req, res) => {
  res.send("A MESSAGE");
});

app.get("/secret", (req, res) => {
  res.send("SHHH IT'S A SECRET PAGE!");
});

app.get("/secreter", (req, res) => {
  res.redirect("/");
});

app.get("/data.json", (req, res) => {
  res.json({ over: 9000 });
});

app.get("/:something", (req, res) => {
  console.log("They asked for: ", req.params);

  res.redirect("/");
});
// app.post("/")

// app.put("/")

// app.delete("/")

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// app2.listen(3001, () => {
//   console.log("WOW ANOTHER SERVER!");
// });
