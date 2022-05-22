import { combineReducers } from "redux";
import AuthReducer from "./auth";
import ChatsReducer from "./chats";

export default combineReducers({
    chats: ChatsReducer,
    auth: AuthReducer
    // users: usersReducer,
}); 