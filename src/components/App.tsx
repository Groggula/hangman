import { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import Keyboard from "./Keyboard";

function App() {
  const [secretWord, setSecretWord] = useState("hangman");
  const [key, setKey] = useState();

  function handleClick(x) {
    console.log("Key: " + generateKeyboard() + " clicked");
  }

  function generateKeyboard() {
    const keyboardArr = [];
    const alpha: number[] = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabet: string[] = alpha.map((x) => String.fromCharCode(x));

    return {
      value: alphabet,
      id: nanoid(),
    };
  }

  const keyboardElements = alphabet.map((x: string) => (
    <Keyboard
      key={x.id}
      value={x.value}
      handleClick={() => handleClick(x.id)}
    />
  ));

  return (
    <main>
      <h1 className="title">Hangman</h1>
      <p className="instructions">Find the right word or he will hang!</p>
      <h1>_ _ _ _ _ _ _</h1>
      <div className="keyboard-container">{keyboardElements}</div>
    </main>
  );
}

export default App;
