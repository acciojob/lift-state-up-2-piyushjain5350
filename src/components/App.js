
import React ,{useState}from "react";
import './../styles/App.css';

const App = () => {
  let[input,setInput]=useState('')
  function handlingFn(value){
        setInput(value);
  };
  return (
    <div style={{backgroundColor:'green',padding:'10px'}}>
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
        {/* <div className="textContainer">{input}</div> */}
        {
          (input)&&<p>{input}</p>
        }
        <Child handlingFn={handlingFn}/>
    </div>
  )
}

const Child =({handlingFn})=>{
  function valueInput(event){
    handlingFn(event.target.value);
  }
  return(
    <div style={{backgroundColor:'darkorange',padding:'5px'}}>
      <h1>Child Component</h1>
      <input type="text" placeholder="Write Something" onChange={()=>{valueInput(event);}}/>
    </div> 
  )
}
export default App
