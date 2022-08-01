import { ADD_COUNT, DECREASE_COUNT, START_COUNT } from "./action"


export const cartCount = (state = {count : 0},{type,payload}) =>{
    // console.log(state)
    switch(type){
        case ADD_COUNT :
        return {
          count : payload,
        }
        case START_COUNT : 
        return {
            count : 0,
        }
        case DECREASE_COUNT : 
        return {
            count : state.count-1,
        }
        default : {
            return state;
        }
    }
}