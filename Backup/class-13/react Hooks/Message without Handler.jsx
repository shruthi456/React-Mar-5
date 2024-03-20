import React,{useState} from 'react'
const Message = ()=>{
    let [variable,setVariable] =useState("Hello")

return(
    <div>
        <h1>msg:{variable}</h1>
        <button onClick={()=>{ setVariable("GoodMorning") }}>GM</button>
        <button onClick={()=>{setVariable("GoodNight")}}>GN</button>
    </div>
)
}
export default Message