import { combineReducers } from "redux";
import AuthReducer from "./auth";
import ChatsReducer from "./chats";
import UsersReducer from "./user";

export default combineReducers({
    chat: ChatsReducer,
    auth: AuthReducer,
    user: UsersReducer,
}); 