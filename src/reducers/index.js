import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import booksReducer from "./booksReducer";

const rootReducer = combineReducers({
    books: booksReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))