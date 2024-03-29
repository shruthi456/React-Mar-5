import { createStore } from "redux";
import {composeWithDevTools} from '@redux-devtools/extension'
import {MessageReducer} from './Message/Message.reducer'

let store=createStore(MessageReducer,composeWithDevTools());
console.log(store)

export {store}