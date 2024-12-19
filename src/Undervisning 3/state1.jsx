// State - Hva er state?
// useState - en React hook
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount((c) => c + 1);
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  }
  function handleDecrement() {
    setCount(count - 1);
  }
  function handleReset() {
    setCount(0);
  }
  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleIncrement}>Increment</button>
    </>
  );
}
