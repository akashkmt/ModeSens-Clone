import { GET_CART_DATA, GET_CART_ERROR, GET_CART_LOADING } from "./actionTypes"

const initState = {
    cart: [],
    isLoading: false,
    iserror: false
}

const cartReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_CART_LOADING:
            return {
                ...state,
                cart: [],
                isLoading: true,
                isError: false
            }
        case GET_CART_ERROR:
            return {
                ...state,
                cart: [],
                isLoading: false,
                isError: true
            }
        case GET_CART_DATA:
            return {
                ...state,
                cart: [...payload],
                isLoading: false,
                isError: true
            }
        default:
            return state;
    }
}

export default cartReducer;