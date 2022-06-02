import { createSlice } from "@reduxjs/toolkit";
import { v4 as myId } from "uuid";
const initialState = {
    todos: [],
    defaultvalue: ''
}

const sortArray = (state) => {
    const isDoneItems = state.todos.filter(todo => todo.done)
    const isNotDoneItems = state.todos.filter(todo => !todo.done)
    return state.todos = [...isNotDoneItems, ...isDoneItems]
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        setDefaultValue(state, action) {
            state.defaultvalue = action.payload
        },
        changeNoteText(state, action) {
            state.todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return todo.text = action.payload.value
                }
                return state
            })
        },
        addNote(state) {
            if (state.defaultvalue) {
                const newNote = { id: myId(), text: state.defaultvalue, done: false };
                state.todos.unshift(newNote)
                sortArray(state)
            }
            state.defaultvalue = ''


        },
        removeNote(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        toggleDoneNote(state, action) {
            state.todos.map(todo => {
                if (todo.id === action.payload) {
                    return todo.done = !todo.done
                }
                sortArray(state)
                return state
            })

        }

    }
})

export const { setDefaultValue, changeNoteText, addNote, removeNote, toggleDoneNote } = todoSlice.actions
export default todoSlice.reducer