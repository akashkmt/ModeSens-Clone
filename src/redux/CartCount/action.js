
export const ADD_COUNT = "ADD_COUNT";
export const START_COUNT = "START_COUNT";
export const DECREASE_COUNT = "DECREASE_COUNT";
const addCount = (payload) =>{
    return {
    type : ADD_COUNT,
    payload
    }
}

const startCount = () =>{
    return {
        type : START_COUNT,
        
        }
}
const decreaseCount = () =>{
    return {
        type : DECREASE_COUNT,
    }
}

export {addCount,startCount,decreaseCount};