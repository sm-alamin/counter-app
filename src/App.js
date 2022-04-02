import { useState } from 'react';
import './App.css';


function App() {
  const [count, setCount] = useState(20);

  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>My Age is:  {count}</h2>
      <button className='button1' onClick={ ()=>{
          setCount(count +1);
      }}>+</button>
      <button className='button2' onClick={ ()=>{
          setCount(count -1);
      }}>-</button>
      
      
    </div>
  );
}

export default App;
