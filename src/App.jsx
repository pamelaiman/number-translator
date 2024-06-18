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
  const [showEnglish, setShowEnglish] = useState(true);
  const [showJapanese, setShowJapanese] = useState(true);
  const [checkRandom, setCheckRandom] = useState(false);

  const message = language(count, translations);
  const randomMessage = randomEnglish(translations);

  function language(number, objects) {
    return objects[number];
  }

  function randomEnglish(objects) {
    const randomNumber = Math.floor(Math.random() * objects.length);
    return objects[randomNumber];
  }

  function previousNumber() {
    if (count >= 1) {
      setCount((count) => count - 1);
    } else {
      setCount(0);
    }
  }

  function nextNumber() {
    if (count !== 10) {
      setCount((count) => count + 1);
    }
  }

  function randomCheck() {
    setCheckRandom(!checkRandom);
  }

  function showEnglishOnScreen() {
    setShowEnglish(!showEnglish);
  }

  function showJapaneseOnScreen() {
    setShowJapanese(!showJapanese);
  }

  return (
    <div>
      <h1>Language Practice - Counting</h1>

      <Button callbackFn={previousNumber} buttonText={"⬅️"} />
      <Button callbackFn={nextNumber} buttonText={"➡️"} />

      <Button
        callbackFn={showEnglishOnScreen}
        buttonText={"Show/Hide English"}
      />
      <Button
        callbackFn={showJapaneseOnScreen}
        buttonText={"Show/Hide Japanese"}
      />

      <Button callbackFn={randomCheck} buttonText={"Random (English)"} />
      <Button callbackFn={randomCheck} buttonText={"Random (Japanese)"} />

      <body>
        {checkRandom ? (
          <div style={{ border: "solid black 2px", padding: 10 }}>
            <p>Random English: {randomMessage.english}</p>
            <p>Random Japanese: {randomMessage.japanese}</p>
          </div>
        ) : (
          <div style={{ border: "solid black 2px", padding: 10 }}>
            {showEnglish ? <p>English: {message.english}</p> : "❓"}
            {showJapanese ? <p>Japanese: {message.japanese}</p> : "❓"}
          </div>
        )}

        <br />
      </body>
    </div>
  );
}

export default App;
