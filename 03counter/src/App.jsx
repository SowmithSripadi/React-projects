import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  const addCounter = () => {
    if (counter > 0 && counter < 20) {
      setCounter(counter + 1);
    } else alert("Cannot increment more");
  };
  const removeCounter = () => {
    if (counter > 0 && counter <= 20) {
      setCounter(counter - 1);
    } else alert("Cannot decrement more");
  };

  return (
    <>
      <h1>testing counter {counter}</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addCounter}>Add Value {counter}</button>
      <br />
      <button onClick={removeCounter}>Remove Value {counter}</button>
      <p>Footer : {counter}</p>
    </>
  );
}

export default App;
