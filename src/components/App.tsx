import { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import Keyboard from "./Keyboard";
// import Keyboard from 'simple-keyboard';
// import 'simple-keyboard/build/css/index.css';

function App() {
  // const alpha: number[] = Array.from(Array(26)).map((id, i) => i + 65);
  // const alphabet: string[] = alpha.map((x) => String.fromCharCode(x));
  const [secretWord, setSecretWord] = useState("HANGMAN");
  const [keyboard, setKeyboard] = useState(generateKeyboard());

  const keyId = keyboard.map((letter) => {
    const id = nanoid();
    return {
      letter,
      id: id,
    };
  });

  function handleClick(id: any) {
    keyId.map((key) => key.id === id);
    {
      console.log("key " + id.letter + " pressed");
    }
  }

  function generateKeyboard() {
    const keyboardArr: string[] = [];

    for (let i = 65; i <= 90; i++) {
      const char = String.fromCharCode(i);

      keyboardArr.push(char);
    }
    return keyboardArr;
  }

  const keyboardElements = keyId.map((x) => (
    <Keyboard key={x.id} value={x.letter} handleClick={() => handleClick(x)} />
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
