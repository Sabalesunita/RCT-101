import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Add ,subtract , Multiply , Divide} from "./store/action";

function App() {
  const dispatch = useDispatch();

  const [value , setValue] = useState(0);

  const state = useSelector((state) => state)

  return (
    <div className="App">
        <h1>Calculator :  {state.count}</h1>
      <div className='cal'>
        <input type="Number" onChange={e => setValue(e.target.value)}/>
        <br />
        <br />
        <button onClick={() => dispatch(subtract(value))}>-</button>
        <br />
        <button onClick={() => dispatch(Add(value))}>+</button>
        <br />
        <button onClick={() => dispatch(Divide(value))}>/</button>
        <br />
        <button onClick={() => dispatch(Multiply(value))}>*</button>
      </div>
    </div>
  );
}

export default App;