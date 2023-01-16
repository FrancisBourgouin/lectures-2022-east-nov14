import { useState, useEffect } from "react";
import axios from "axios";

import { organizeStatements } from "../helpers/statementHelpers";

export default function useGlossary() {
  const [listOfStatements, setListOfStatements] = useState([]);
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const calls = [axios.get("/api/v1/statements"), axios.get("/api/v1/subjects")];
    Promise.all(calls)
      .then(([statements, subjects]) => {
        // console.log(statements, subjects);
        setListOfStatements(statements.data);
        setSubjects(subjects.data);
      })
      .catch(() => console.log("OH NO."));
  }, []);

  const statements = organizeStatements(listOfStatements);

  const addStatement = (formData) => {
    axios.post("/api/v1/statements", formData).then((res) => {
      setListOfStatements([...listOfStatements, res.data]);
    });
    const id = listOfStatements.length + 1;
  };

  const addSubject = (formData) => {
    setSubjects([...subjects, formData.subject]);
  };

  return { statements, subjects, addStatement, addSubject };
}
