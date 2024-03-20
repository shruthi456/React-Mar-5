import React,{useState} from 'react'
const Counter =()=>{
    let [counter,setCounter] = useState("1")
    return(
        <div>
            <h1>MSG:{counter}</h1>
            <button onClick={()=>{setCounter("Counter+1")}}>+1</button>
            <button onClick={()=>{setCounter("Counter-1")}}>-1</button>
        </div>
    ) 
}
export default Counter