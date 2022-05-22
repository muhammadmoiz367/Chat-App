import { createStore, applyMiddleware, combineReducers } from "redux"
import reducers from "./reducers/index"
import thunk from "redux-thunk"

//for normal store
const middleware = applyMiddleware(thunk)

export const store = createStore(reducers, {}, middleware)
