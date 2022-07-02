import { ADD_COUNT } from "./action"


export const cartCountReducer = (state = {count : 0},{type}) =>{
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