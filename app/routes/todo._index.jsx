import { useLoaderData, Link } from '@remix-run/react'
import { db } from '.././utils/db.server'
import React from 'react'

export const loader =  async () => {
    const data = {
        todos: await db.todo.findMany({
            take: 20,
            select: {id: true, title: true}
        }),
    }
    return data
}

function TodoList() {
    const {todos} = useLoaderData()
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