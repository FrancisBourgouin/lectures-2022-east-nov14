const initialStatements = [
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
const subjects = {
  components: ["...", "..."],
  props: ["...", "..."],
};

const organizeStatements = (listOfStatements) => {
  const output = {};
  // Extract the subjects
  listOfStatements.forEach((statement) => (output[statement.subject] = []));
  // Populate the subjects
  listOfStatements.forEach((statement) =>
    output[statement.subject].push(statement.content)
  );
  // Return an object containing subject : [...., ....]
  return output;
};

const result = organizeStatements(initialStatements);

console.log(result);
