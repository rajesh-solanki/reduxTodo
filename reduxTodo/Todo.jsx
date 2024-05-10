
import React from 'react'
import '@fortawesome/fontawesome-free/css/all.css';
import { handleSubmit, handleChange, handleDelete, handleEdit } from './slice.js'
import { useDispatch, useSelector } from 'react-redux'

function Todo() {
    const dispatch = useDispatch();
    const initState = useSelector((state) => {
        return state.reduce;
    })
    return (
        <>
            <h1>Todo</h1>
            <form action="" onSubmit={(e) => {
                e.preventDefault()
                dispatch(handleSubmit())
            }}>
                <input type="text" value={initState.value} onChange={(e) => dispatch(handleChange(e.target.value))} />
                <button>Add Tasks</button>
            </form>
            <ul>
                {initState.tasks.map((task, index) => {
                    return <li
                        key={index}>{task}
                        <i className="fas fa-trash" onClick={(e) => dispatch(handleDelete(index))}></i>
                        <i className="fas fa-pencil" onClick={(e) => dispatch(handleEdit(index))}></i>
                    </li>
                })}
            </ul>
        </>
    )
}

export default Todo