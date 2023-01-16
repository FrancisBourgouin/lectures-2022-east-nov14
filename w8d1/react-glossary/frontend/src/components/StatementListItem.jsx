// const statement = {
//   id:1
//   subject:"component",
//   content:"something"
// }

export default function StatementListItem(props) {
  const { subject, content } = props;
  return (
    <li className="StatementListItem">
      <p>{content}</p>
    </li>
  );
}
