import { GET_CART_DATA, GET_CART_ERROR, GET_CART_LOADING } from "./actionTypes"


export const getCartData = (payload) => {
    type: GET_CART_DATA,
        payload
}

export const getCartLoading = (payload) => {
    type: GET_CART_LOADING
}

export const getCartError = (payload) => {
    type: GET_CART_ERROR
}