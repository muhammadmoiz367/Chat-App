import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGIN_USER, LOGOUT_USER, SET_CURRENT_USER, SET_TOKEN, SIGNUP_FAILURE, SIGNUP_SUCCESS, SIGNUP_USER } from "../constants";

const initialState={
    loading: false,
    isAuthenticated:false,
    error:null,
    user:{},
    token:null
}

const authReducer=(state=initialState,action)=>{
    switch(action.type){
        case SIGNUP_USER:
            return{
                ...state,
                loading: true
            }
        case SIGNUP_SUCCESS: 
            return{
                ...state,
                loading: false,
                error: null,
                isAuthenticated:true,
                user:action.payload,
                // token:action.payload.token
            }
        case SIGNUP_FAILURE:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        case LOGIN_USER:
            return{
                ...state,
                loading: true
            }
        case LOGIN_SUCCESS: 
            console.log(action.payload, "action.payload");
            localStorage.setItem('token',JSON.stringify(action.payload));
            return{
                ...state,
                loading: false,
                error: null,
                isAuthenticated:true,
                user:action.payload,
                // token:action.payload.token
            }
        case LOGIN_FAILURE:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        case LOGOUT_USER: 
            localStorage.removeItem('token')
            return{
                ...state,
                loading: false,
                error: null,
                isAuthenticated:false,
                user:{},
                token:null
            }
        case SET_CURRENT_USER:
            return{
                ...state,
                isAuthenticated: true,
                user:action.payload
            }
        case SET_TOKEN:
            return{
                ...state,
                token:action.payload
            }
        default:
            return state;
    }
}

export default authReducer;