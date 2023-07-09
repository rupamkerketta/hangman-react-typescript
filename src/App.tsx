import { useState, useEffect } from "react";

// Word List --------------------------------------------------------
import wordList from "./data/wordList.json";
// ------------------------------------------------------------------

// Containers and Components ----------------------------------------
import { HangmanDrawing } from "@root/components/HangmanDrawing";
// ------------------------------------------------------------------

// Styles -----------------------------------------------------------
import "./App.css";
// ------------------------------------------------------------------

function App() {
  const [wordToGuess, setWordToGuess] = useState<string>("");
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  useEffect(() => {
    setWordToGuess(() => wordList[Math.floor(Math.random() * wordList.length)]);
  }, []);

  return (
    <div className="hangman-container">
      <h1>Hangman</h1>
      <h2>{wordToGuess}</h2>
      <HangmanDrawing />
    </div>
  );
}

export default App;
