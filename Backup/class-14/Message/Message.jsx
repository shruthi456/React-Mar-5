import React from 'react'
import { gmAction,gaAction,gnAction } from '../Redux/Message/Message.action'
import {useDispatch,useSelector} from 'react-redux'

const Message=()=>{
 
let dispatch=useDispatch();

let msg_state=useSelector((state)=>{
    console.log(state)
    return state
})
    return<>
    <h2>Message Component</h2>
    <pre>{JSON.stringify(msg_state)}</pre>
    value:{msg_state.msg}
        
  <br/><br/>
  <button onClick={()=>{dispatch(gmAction())}}>GM</button>
  <button onClick={()=>{dispatch(gaAction())}}>GA</button>
  <button onClick={()=>{dispatch(gnAction())}}>GN</button>
    </>
}
export default Message