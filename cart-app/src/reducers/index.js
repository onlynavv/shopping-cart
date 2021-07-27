import { combineReducers } from "redux";
import shoppingReducer from './shoppingReducer'

const rootReducer = combineReducers({
    shoppingReducer
})

export {rootReducer}