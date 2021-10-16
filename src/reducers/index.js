import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import booksReducer from "./booksReducer";
import errorReducer from "./errorReducer";

const rootReducer = combineReducers({
    books: booksReducer,
    errors: errorReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))