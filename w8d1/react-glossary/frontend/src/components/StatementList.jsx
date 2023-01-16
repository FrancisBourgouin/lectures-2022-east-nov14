import StatementListItem from "./StatementListItem";

export default function StatementList(props) {
  const { statements, title } = props;

  const parsedStatements =
    Array.isArray(statements) &&
    statements.map((statement) => (
      <StatementListItem key={statement.id} {...statement} />
    ));

  return (
    <section className="StatementList">
      <h2>Statements for {title}</h2>
      <ul>{parsedStatements}</ul>
    </section>
  );
}
