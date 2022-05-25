import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGIN_USER, LOGOUT_USER, SIGNUP_FAILURE, SIGNUP_SUCCESS, SIGNUP_USER } from "../constants"
import * as api from "../api";

export const signIn = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.loginAPI(formData);
        console.log("🚀 ~ file: auth.js ~ line 7 ~ signIn ~ data", data)
        dispatch({ type: LOGIN_USER });
        dispatch({
            type: LOGIN_SUCCESS,
            payload: data.data
        });
    } catch (error) {
        console.log("errorrrrrrr", error.response.data.error.message);
      if (error.response) {
        dispatch({
          type: LOGIN_FAILURE,
          payload: error.response.data.error.message,
        });
      } else {
        dispatch({
          type: LOGIN_FAILURE,
          payload: { message: "something went wrong" },
        });
      }
    }
  };

export const signUp = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signupAPI(formData);
        console.log("🚀 ~ file: auth.js ~ line 28 ~ signUp ~ data", data)
        dispatch({ type: SIGNUP_USER });
        dispatch({
            type: SIGNUP_SUCCESS,
            payload: data.data
        });
        // history.push("/");
    } catch (error) {
        console.log("errorrrrrrr", error.response.data.error.message);
        dispatch({
            type: SIGNUP_FAILURE,
            payload: error.response.data.error.message,
        });
    }
}

export const logout=()=>(dispatch)=>{
    dispatch({
        type:LOGOUT_USER
    })
}