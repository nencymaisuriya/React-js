import  { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 100) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };


  return (
    <div className="counter-container">
      <h1>React Counter App</h1>
      <h2>Count: {count}</h2>
      <div className="buttons">
        <button onClick={decrement} disabled={count === 0}>-Decrement</button>
        <button onClick={increment} disabled={count === 100}>+Increment</button>
      </div>
    </div>
  );
}

export default App;
