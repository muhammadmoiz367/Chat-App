import { SET_CHATS, SET_CURRENT_CHAT } from "../constants";

const initialState = {
    chats: [],
    currentChat: {},
    currentUser: {},
    currentMessage: {},
    currentChatMessages: [],
    currentChatUsers: [],
}

const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CHATS:
            return {
                ...state,
                chats: action.payload,
            }
        case SET_CURRENT_CHAT:
            return {
                ...state,
                currentChat: action.payload,
            }
        default:
            return state;
    }   
}

export default chatsReducer;