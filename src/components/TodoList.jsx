import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import TodoListItem from './TodoListItem'

const TodoListWrap = styled.ul`
    width: 100%;
    padding: 20px;
    background: #edecec1f;
    border-radius:10px;
    display: flex;
    flex-direction: column;
    row-gap:50px;
    h4{
        color:white;
        text-align: center;
        opacity:.3;
    }
`
const TodoList = () => {
    const todos = useSelector(state => state.todoList.todos)
    return (
        <TodoListWrap>
            {
                todos.length ?
                    todos.map(todo => {
                        return (
                            <TodoListItem key={todo.id} text={todo.text} done={todo.done} id={todo.id} />
                        )
                    })
                    : <h4>Заметок пока нет</h4>
            }
        </TodoListWrap>
    )
}

export default TodoList