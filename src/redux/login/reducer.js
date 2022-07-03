import { GET_USER_DATA, GET_USER_ERROR, GET_USER_LOADING } from "./actionTypes"

const initState = {
    user: [],
    isLoading: false,
    isError: false
}

const loginReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_USER_LOADING:
            return {
                ...state,
                user: [],
                isLoading: true,
                isError: false
            }
        case GET_USER_ERROR:
            return {
                ...state,
                user: [],
                isLoading: false,
                isError: true
            }
        case GET_USER_DATA:
            return {
                ...state,
                user: [...payload],
                isLoading: false,
                isError: true
            }
        default:
            return state;
    }
}

export default loginReducer;