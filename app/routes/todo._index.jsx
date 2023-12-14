import { useLoaderData, Link } from '@remix-run/react'
import { db } from '.././utils/db.server'
import React from 'react'
// import { useLoaderData } from 'react-router-dom';

export const loader =  async () => {
    // hard code data to see what is rendered
    const data = {
        todos: await db.todo.findMany({
            take: 20,
            select: {id: true, title: true}
        }),
    }
    return data
}

function TodoList() {
    // const data = useLoaderData() destructured as below
    const {todos} = useLoaderData()

  // @todo: add toggle on/off

  return (
    <div>
        <div className="page-header">
            {/* <h1>Todo</h1> */}
            <Link to='/todo/new' className='btn'>
                Add Todo
            </Link>
        </div>
        <h1>Todo</h1>
        <ul className="todo-list">
            {todos.map((todo) => (
                <li key={todo.id}>
                    <Link to={`/todo/${todo.id}`}>
                        <h3>{todo.title}</h3>
                    </Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default TodoList