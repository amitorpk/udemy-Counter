import './App.css';
import React,{ useState } from 'react';
import Counter from './components/counter';

function App() {
  const [count,setCount]=useState(0)
  
  return (
    <div className="App">
       <Counter setCount={setCount} count={count} />
    </div>
  );
}

export default App;
