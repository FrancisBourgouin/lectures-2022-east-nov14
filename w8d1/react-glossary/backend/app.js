const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

const statements = [
  {
    id: 1,
    subject: "components",
    content: "Components are the building blocks of react",
  },
  {
    id: 2,
    subject: "components",
    content:
      "Take a functionality of a small piece of your application and encapsulated its own isolated container",
  },
  {
    id: 3,
    subject: "props",
    content:
      "Props are to components what attributes are to an HTML element (the 'src' tag in an <img> is needed to make the image work)",
  },
  {
    id: 4,
    subject: "props",
    content:
      "Props are accessible in an object in the first argument of a functional component",
  },
];

const fetchAllStatements = () => {
  return Promise.resolve(statements);
};

app.get("/api/v1/statements", (req, res) => {
  fetchAllStatements().then((statements) => {
    res.json(statements);
  });
});
app.post("/api/v1/statements", (req, res) => {
  const { subject, content } = req.body;
  console.log(req.body);

  const newStatement = { subject, content, id: statements.length + 1 };
  statements.push(newStatement);

  res.json(newStatement);
});
app.get("/api/v1/subjects", (req, res) => {
  const subjects = new Set();

  statements.forEach((statement) => subjects.add(statement.subject));

  res.json(Array.from(subjects));
});

module.exports = app;
