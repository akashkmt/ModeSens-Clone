import { legacy_createStore as createStore } from "redux";
import { reducer } from "./reducer";



export const store = createStore(reducer);
console.log(store.subscribe(() =>{
    console.log("store Change ", store.getState())
}))