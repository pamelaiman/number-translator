import { useState } from "react";
import Button from "./Components/Button";
import "./App.css";

const translations = [
  { count: 0, english: "zero", japanese: "rei (れい)" },
  { count: 1, english: "one", japanese: "いち (ichi)" },
  { count: 2, english: "two", japanese: "に (ni)" },
  { count: 3, english: "three", japanese: "さん (san)" },
  { count: 4, english: "four", japanese: "よん (yon)" },
  { count: 5, english: "five", japanese: "ご (go)" },
  { count: 6, english: "six", japanese: "ろく (roku)" },
  { count: 7, english: "seven", japanese: "なな (nana)" },
  { count: 8, english: "eight", japanese: "はち (hachi)" },
  { count: 9, english: "nine", japanese: "きゅう (kyuu)" },
  { count: 10, english: "ten", japanese: "じゅう (juu)" },
];

function App() {
  const [count, setCount] = useState(0);

  function previousNumber() {
    if (count >= 1) {
      setCount((count) => count - 1)
    } else {
      setCount(0)

    }
  }

  function nextNumber() {
    setCount((count) => count + 1);
  }

  return (
    <div>
      <h1>Language Practice - Counting</h1>
      <p>{count}</p>
      {/* <button onClick={nextNumber}>Add one</button> */}
      <Button callbackFn={previousNumber} buttonText={"⬅️"} />
      <Button callbackFn={nextNumber} buttonText={"➡️"} />

      <Button buttonText={"Show/Hide English"} />
      <Button buttonText={"Show/Hide Japanese"} />

      <Button buttonText={"Random (English)"} />
      <Button buttonText={"Random (Japanese)"} />

      <p>English: </p>
      <p>Japanese: </p>
    </div>
  );
}

export default App;
