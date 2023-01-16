export const organizeStatements = (listOfStatements) => {
  const output = {};
  // Extract the subjects
  listOfStatements.forEach((statement) => (output[statement.subject] = []));
  // Populate the subjects
  listOfStatements.forEach((statement) => output[statement.subject].push(statement));
  // Return an object containing subject : [...., ....]
  return output;
};
