const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.get("/urls", (req, res) => {
  //...
});
app.get("/urls/new", (req, res) => {
  //...
});
app.get("/urls/:short_url/edit", (req, res) => {
  //...
});
app.get("/urls/:short_url", (req, res) => {
  //...
});
app.get("/urls/:short_url/delete", (req, res) => {
  //...
});
app.put("/urls/:short_url", (req, res) => {
  //...
});
app.delete("/urls/:short_url", (req, res) => {
  //...
});
app.post("/urls", (req, res) => {
  //...
});

app.get("/login", (req, res) => {
  //...
});
app.get("/register", (req, res) => {
  //...
});
app.post("/login", (req, res) => {
  //...
});
app.post("/register", (req, res) => {
  //...
});
app.post("/logout", (req, res) => {
  //...
});

module.exports = app;
