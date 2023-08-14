import React from "react";


const Input=({handlingfn})=>{


    function clicked(event){
       handlingfn(event.target.value)
    }

    return (
        <div>
            <input type="text" onChange={()=>{
                clicked(event)
            }} placeholder="Write Something Here"></input>
        </div>
    )
}
export default Input