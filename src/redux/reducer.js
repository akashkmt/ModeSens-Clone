import { ADD_COUNT } from "./action"

let init = 0;
export const reducer = (state = {count : 0},{type}) =>{
    console.log(state)
    switch(type){
        case ADD_COUNT :
        return {
           ...state,  count : state.count+1,
        }
        default : {
            return state;
        }
    }
}