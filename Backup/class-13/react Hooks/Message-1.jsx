import React ,{useState} from "react"
const Message=()=>{
 
 let[variable,setVariable] = useState ("Hello")
 let gmHandler =()=>{
    setVariable("GoodMorning")
 }
 let gnHandler =()=>{
    setVariable("GoodNight")

 }
 return(
    <div>
        <h1>Wish Message :{variable}</h1>
        <button onClick = {gmHandler}>GM</button>
        <button onClick = {gnHandler}>Gn</button>
    </div>
 )
}
export default Message
   
                   