import {useState } from 'react'

function App() {

  const[count, setCount]= useState(0);
  const handleIncrement=()=>{
    setCount(prevCount=> prevCount+1);

  }

  const handleDecrement=()=>{
    setCount(prevCount=> prevCount-1);

  }
  return (
    <div className="App">
    <div><h1>Counter App</h1></div>

    <div><p>Count: {count}</p></div>
    <div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
     
    </div>
  );
}

export default App;
