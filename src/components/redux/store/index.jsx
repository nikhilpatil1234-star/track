import { createStore } from "redux";
import  { combineReducers } from "redux"
import { expenseReducer } from "../reducers/Expenses"
const reducer=combineReducers({
    expenses:expenseReducer
})
const initialState={}
const store=createStore(reducer,initialState);
export default store;