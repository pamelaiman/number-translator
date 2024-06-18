export default function Button(props) {
  return (
    <button className="buttonLook" onClick={props.callbackFn}>
      {props.buttonText}
    </button>
  );
}
