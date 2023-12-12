import { useLoaderData, Link } from '@remix-run/react'
import React from 'react'
// import { useLoaderData } from 'react-router-dom';

export const loader = () => {
    // console.log(123)
    // hard code data to see what is rendered
    const data = {
        todos: [
            {id:1, title: 'Todo 1', body: 'This is a test todo'},
            {id:2, title: 'Todo 2', body: 'This is a test todo'},
            {id:3, title: 'Todo 3', body: 'This is a test todo'},
            {id:4, title: 'Todo 4', body: 'This is a test todo'}
        ]
    }
    return data
}

function TodoItem() {
    // const data = useLoaderData() destructured as below
    const {todos} = useLoaderData()

  return (
    <div>
        <div className="page-header">
            <h1>Todo</h1>
            <Link to='/todo/new' className='btn'>
                Add Todo
            </Link>
        </div>
        <h1>Todo</h1>
        <ul className="todo-list">
            {todos.map((todo) => (
                <li key={todo.id}>
                    <Link to={todo.id}>
                        <h3>{todo.title}</h3>
                    </Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default TodoItem