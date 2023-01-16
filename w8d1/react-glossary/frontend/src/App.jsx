import StatementList from "./components/StatementList";
import SubjectForm from "./components/SubjectForm";
import StatementForm from "./components/StatementForm";
import Header from "./components/Header";

import useGlossary from "./hooks/useGlossary";

import "./App.css";

function App() {
  const { statements, subjects, addStatement, addSubject } = useGlossary();

  const listOfStatementLists =
    Array.isArray(subjects) &&
    subjects.map((subject) => {
      return (
        <StatementList key={subject} statements={statements[subject]} title={subject} />
      );
    });

  return (
    <div className="App">
      <Header />
      <main>
        <StatementForm onSubmit={addStatement} subjects={subjects} />
        <SubjectForm onSubmit={addSubject} />
        {listOfStatementLists}
      </main>
    </div>
  );
}

export default App;
