import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //useState(defaultvalue can be true,{object},(function))
  //it will return arr with two values one counter,setCounter (setCounter is function)
  // counter and setCounter are just noation such that setCounter will control counter
  let [counter,setCounter]=useState(5)//it will work such way that if counter is updated then it is updated all over page

  // let counter = 5;
  const addValue =()=>{
    // console.log("Value Added ",Math.random())
    setCounter(counter+1);
  }
  const removeValue=()=>{
    if(counter-1>=0){
      setCounter(counter-1);
    }else{
      setCounter(0);
    }
  }
  return (
    <>
      <h1>Hello Ritesh!</h1>
      <h2>counter value:{counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>decrease Value</button>
    </>
  )
}

export default App
