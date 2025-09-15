import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const styles = {
    buttons: {
      color: "blue",
      backgroundColor: "#f0f0f0",
      padding: "10px 15px",
      margin: "5px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      cursor: "pointer",
    },
  };
  return (
    <div className="App">
      <p>{counter}</p>
      <button style={styles.buttons} onClick={decrement}>
        Decrement
      </button>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
