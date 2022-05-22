import { SET_CURRENT_USER, SET_TOKEN } from "../constants";

const initialState={
    isAuthenticated:false,
    user:{},
    token:null
}

const authReducer=(state=initialState,action)=>{
    switch(action.type){
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