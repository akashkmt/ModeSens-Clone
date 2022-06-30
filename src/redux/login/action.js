import { GET_USER_DATA, GET_USER_ERROR, GET_USER_LOADING } from "./actionTypes"

export const getUserLoading = () => {
    return {

        type: GET_USER_LOADING
    };

}

export const getUserError = () => {
    return {

        type: GET_USER_ERROR
    };
}

export const getUserData = (payload) => {
    return {

        type: GET_USER_DATA,
        payload
    };
}