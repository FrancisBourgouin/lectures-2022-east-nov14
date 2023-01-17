export default function Result(props) {
  return <footer>{!props.result && <h2>Waiting for your choice !</h2>}</footer>;
}
