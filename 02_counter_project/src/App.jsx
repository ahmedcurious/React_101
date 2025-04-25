import "./App.css";
import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(5);

  const addValue = () => {
    if (counter < 20) setCounter((counter += 1));
  };

  const removeValue = () => {
    if (counter !== 0) setCounter((counter -= 1));
  };

  return (
    <>
      <h1>Counter Project</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
