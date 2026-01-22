import React, {useState} from "react";
import "./App.css"
import Row from "./Row";

const App = () => {
  const targetWord = "REACT";

  const [guesses, setGuesses] = useState([]);

  const [currentGuess, setCurrentGuess] = useState("");

  const handleInputChange = (event) => {
    setCurrentGuess(event.target.value.toUpperCase());
  }

  const handleGuess = () => {
    if(currentGuess.length !== 5)
    return;

    const updatedGuesses = [...guesses, currentGuess];
    setGuesses(updatedGuesses);

    if (currentGuess === targetWord || updatedGuesses.length >= MaxAttempts) {
      setIsGameOver(true);
    }
  }

  const MaxAttempts = 6;

  const [isGameOver, setIsGameOver] = useState(false);

  return (
    <div className="main-container">
      <h1>Wordle</h1>
      {guesses.map((guess, index) => {
        return <Row key={index} guess={guess} targetWord={targetWord} />
      })}
      {!isGameOver && (
      <>
      <input
        onChange={handleInputChange} 
        maxLength={targetWord.length} 
        placeholder={"Enter your guess"}
      />
      <button onClick={handleGuess}>Guess</button>
      </>
      )}
      {isGameOver && (currentGuess !== targetWord) && 
      (<p>{`Game over! The word was: ${targetWord}`}</p>)}
    </div>
  );
};

export default App;