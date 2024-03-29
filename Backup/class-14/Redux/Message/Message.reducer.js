import {GM,GA,GN} from './Message.action'

let initialState={msg:"Hello Rahul Gandhi"}

let MessageReducer = (state=initialState,action)=>{
    console.log(action)
    console.log(action.type)
    switch(action.type){
        case GM:
            return {msg:"Good Morning"}
        case GA:
            return {msg:"Good Afternoon"}
        case GN:
            return {msg:"Good Night"}
        default:
            return state
    }
}


export {MessageReducer}


