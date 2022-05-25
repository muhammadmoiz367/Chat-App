import * as api from "../api";
import { GET_USERS, GET_USERS_FAILURE, GET_USERS_SUCCESS, GET_USER_SUCCESS } from "../constants";

export const getAllUsers = () => async (dispatch) => {
    try {
        dispatch({ type: GET_USERS });
        const { data } = await api.getAllUsersAPI();
        console.log("🚀 ~ file: auth.js ~ line 28 ~ signUp ~ data", data)
        dispatch({
            type: GET_USERS_SUCCESS,
            payload: data.data
        });
        // history.push("/");
    } catch (error) {
        console.log("errorrrrrrr", error.response.data.error.message);
        dispatch({
            type: GET_USERS_FAILURE,
            payload: error.response.data.error.message,
        });
    }
}