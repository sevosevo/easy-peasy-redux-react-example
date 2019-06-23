import React from 'react'
import Todo from './Todo';

const Todos = ({todos}) => (
    <table className="table table-dark">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Body</th>
                <th scope="col">DELETE</th>
                <th scope="col">Mark completed</th>
            </tr>
        </thead>
        <tbody>
            {
                todos.map(todo => <Todo key={todo.id} todo={todo} />)
            }
        </tbody>
    </table>
)


export default Todos
