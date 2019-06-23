import React from 'react'

import { useActions } from 'easy-peasy';

const Todo = ({todo}) => {

    //SelectTodo 
    const [deleteTodo, mark] = useActions(actions=>[actions.todos.delete, actions.todos.mark]);

    return (
    <tr className={todo.completed ? "done" : null}>
        <th>{todo.id}</th>
        <td>{todo.title}</td>
        <td>{todo.body}</td>
        <td><button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>Delete</button></td>
        <td>
            <input className="form-check-input" type="checkbox" onChange={ () => mark(todo.id) }/>
        </td>
    </tr>
    )
}

export default Todo
