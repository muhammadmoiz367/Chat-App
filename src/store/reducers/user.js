import { GET_USER, GET_USERS, GET_USERS_FAILURE, GET_USERS_SUCCESS, GET_USER_SUCCESS, SET_CURRENT_USER } from "../constants"

const initialState = {
    loading: false,
    users: [],
    currentUser: {},
}

const UserReducer= (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                loading: true,
            }
        case GET_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload,
            }
        case GET_USERS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case GET_USER:
            return {
                ...state,
                currentUser: action.payload,
            }
        case GET_USER_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
            }
        
        default:
            return state;
    }
}

export default UserReducer;