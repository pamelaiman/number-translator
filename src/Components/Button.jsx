export default function Button(props) {
  return <button onClick={props.callbackFn}>{props.buttonText}</button>;
}
