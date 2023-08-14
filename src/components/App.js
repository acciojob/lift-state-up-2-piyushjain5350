import React from "react";
import './../styles/App.css';
import { useState } from "react";
import Input from "./Input";
const App = () => {
  let[input,setInput]=useState('')
  function handlingfn(value){
        setInput(value)
  }
  return (
    <div className="parent">
         <h1>Parent Component</h1>
         {
          (input)&&<p>{input}</p>
         }
         <div className="child">
         <h2>Child component</h2>
         <Input handlingfn={handlingfn}/>
         </div>
    </div>
  )
}

export default App