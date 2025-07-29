
import './App.css'
import { useState } from 'react';
function App() {
  const [counter, setCounter] = useState(5);
  const addVal = () => {
    setCounter(counter + 1);
    console.log('Counter incremented:', counter + 1);
  }
  const removeVal = () => {
    if(counter>0){
      setCounter(counter - 1);
      console.log('Counter decremented:', counter - 1);
    }
    else{
      console.log('Counter is already at 0');
    }
  }


  return (
    <>
      <h1>Counter App</h1>
      <p>Click the button to increment the counter.</p>
      <button onClick={addVal}>Increment</button>
      <p>Counter: {counter}</p>
      <p>Click the button to decrement the counter.</p>
      <button onClick={removeVal}>Decrement</button>
      <p>Counter: {counter}</p>
      <p>Click the button to reset the counter.</p>
      <button onClick={() => setCounter(0)}>Reset</button>
      <p>Counter: {counter}</p>

    </>
  )
}

export default App
