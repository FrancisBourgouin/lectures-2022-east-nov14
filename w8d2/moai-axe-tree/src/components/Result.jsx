export default function Result(props) {
  return (
    <footer>
      {!props.winner && <h2>Waiting for your choice !</h2>}
      <h2 data-testid="resultMessage">{props.winner}</h2>
    </footer>
  );
}
