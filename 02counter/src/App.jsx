import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(14);
  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    } else {
      alert("Counter cannot go above 20");
    }
  };
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      alert("Counter cannot go below 0");
    }
  };
  return (
    <>
      <h1>Counter Project</h1>
      <p>counter value {counter}</p>
      <button onClick={addValue}>Add +1</button>
      &nbsp;
      <button onClick={removeValue}>Subtract -1</button>
    </>
  );
}

export default App;
