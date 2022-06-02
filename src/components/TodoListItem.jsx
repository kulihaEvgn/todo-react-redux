import React from 'react'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { changeNoteText, removeNote, toggleDoneNote } from '../redux/slices/todoSlice'

const TodoListItemsWrap = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-decoration: ${props => props.isDone && 'line-through'};
        .checkbox{
            height: 20px;
            width: 20px;  
            opacity: .3;
            :hover{
                opacity:.8;
            }
        }
        .text {
            padding: 10px 20px;
            width: 70%;
            background: transparent;
            outline: none;
            border:none;
            font-family:inherit;
            color:#fff;
            font-size:1.3rem;
            border-bottom:1px solid #ffffff10;
            :focus{
                border-bottom:1px solid #fffffff8;
            }
        }
        .btn_wrap{
            display: flex;
            align-items: center;
            column-gap: 20px;
                .edit{
                    width: 30px;
                    height: 40px;
                    fill: #09ff094c;
                    cursor: pointer;
                    :active{
                        transform: scale(0.9);
                    }
                    :hover{
                            fill: #09ff09ae;
                    }
                }
                .trash{
                    width: 30px;
                    height: 40px;
                    fill: #ff09098c;
                    cursor: pointer;
                        :active{
                            transform: scale(0.9);
                        }
                        :hover{
                            fill: #ff0909e6;
                        }
                }
                .save{
                    width: 30px;
                    height: 40px;
                    fill: #09ff09c0;
                    cursor: pointer;
                    :active{
                        transform: scale(0.9);
                    }
                    :hover{
                            fill: #09ff09;
                        }
                }
                
        }
        

`

const TodoListItem = ({ text, done, id }) => {
    let smallText;
    if (text.length > 40) {
        smallText = text.slice(0, 40) + ' . . .'
    }
    else {
        smallText = text
    }
    const dispatch = useDispatch()

    const inputRef = useRef()
    const [isEdit, setIsEdit] = React.useState(false)


    const deleteTask = id => dispatch(removeNote(id))

    const handelChange = (e, id) => {
        const value = e.target.value
        if (isEdit) {
            dispatch(changeNoteText({ value, id }))
        }
    }

    const editOpen = () => {
        setIsEdit(true)
        setTimeout(() => inputRef.current.focus(), 0)
    }

    const editClose = () => {
        setIsEdit(false)
    }

    return (
        <TodoListItemsWrap isDone={done}>
            <input
                className='checkbox'
                type="checkbox"
                checked={done}
                onChange={() => dispatch(toggleDoneNote(id))}
            />
            <input
                ref={inputRef}
                onChange={(e) => handelChange(e, id)}
                className='text'
                disabled={!isEdit}
                value={smallText}
                title={text}
            />
            <div className='btn_wrap'>
                {
                    isEdit
                        ? <svg onClick={editClose} className='save' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="32px" height="32px"><path d="M 7.5 1 C 3.917969 1 1 3.917969 1 7.5 C 1 11.082031 3.917969 14 7.5 14 C 11.082031 14 14 11.082031 14 7.5 C 14 3.917969 11.082031 1 7.5 1 Z M 7.5 2 C 10.542969 2 13 4.457031 13 7.5 C 13 10.542969 10.542969 13 7.5 13 C 4.457031 13 2 10.542969 2 7.5 C 2 4.457031 4.457031 2 7.5 2 Z M 10.144531 5.148438 L 6.5 8.792969 L 4.851563 7.148438 L 4.148438 7.851563 L 6.5 10.207031 L 10.855469 5.851563 Z" /></svg>
                        : <svg onClick={editOpen} className='edit' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="32px" height="32px"><path d="M 12.03125 2.023438 C 11.535156 2.023438 11.066406 2.269531 10.675781 2.65625 L 2.5625 10.726563 L 1.207031 14.785156 L 5.265625 13.433594 L 5.351563 13.351563 L 13.386719 5.367188 C 13.773438 4.976563 14.015625 4.507813 14.015625 4.011719 C 14.015625 3.515625 13.773438 3.046875 13.386719 2.65625 C 12.996094 2.269531 12.527344 2.023438 12.03125 2.023438 Z M 10.027344 4.710938 L 11.320313 6.007813 L 4.726563 12.5625 L 2.789063 13.207031 L 3.4375 11.265625 Z" /></svg>
                }
                <svg onClick={() => deleteTask(id)} className='trash' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="64px" height="64px"><path d="M24,41h77v63c0,9.37-7.63,17-17,17H44c-9.37,0-17-7.63-17-17V52c0-1.66-1.34-3-3-3s-3,1.34-3,3v52c0,12.68,10.32,23,23,23 h40c12.68,0,23-10.32,23-23V40.64c5.72-1.36,10-6.5,10-12.64c0-7.17-5.83-13-13-13H24c-7.17,0-13,5.83-13,13S16.83,41,24,41z M24,21h80c3.86,0,7,3.14,7,7s-3.14,7-7,7H24c-3.86,0-7-3.14-7-7S20.14,21,24,21z" /><path d="M49,7h30c1.66,0,3-1.34,3-3s-1.34-3-3-3H49c-1.66,0-3,1.34-3,3S47.34,7,49,7z" /><path d="M53,104V58c0-1.66-1.34-3-3-3s-3,1.34-3,3v46c0,1.66,1.34,3,3,3S53,105.66,53,104z" /><path d="M81,104V58c0-1.66-1.34-3-3-3s-3,1.34-3,3v46c0,1.66,1.34,3,3,3S81,105.66,81,104z" /></svg>
            </div>
        </TodoListItemsWrap>
    )
}

export default TodoListItem