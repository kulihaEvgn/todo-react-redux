import { configureStore, combineReducers } from "@reduxjs/toolkit";
import todoReduser from './slices/todoSlice'


const redusers = combineReducers({
    todoList: todoReduser
})

export const store = configureStore({
    reducer: redusers
})

