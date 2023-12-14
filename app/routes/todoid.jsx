import React from 'react'
import { Link, useLoaderData } from '@remix-run/react'
import { redirect } from '@remix-run/node'
import { db } from '.././utils/db.server'

export const loader = async ({ params }) => {
 

  const todo = await db.todo.findUnique({
    where: { id: params.todoId },
  })

  if (!todo) throw new Error('Todo not found')

  const data = { todo }
  return data
}

export const action = async ({ request, params }) => {
  const form = await request.formData()
  if (form.get('_method') === 'delete') {
    
    const todo = await db.todo.findUnique({
      where: { id: params.todoId },
    })

    if (!todo) throw new Error('Todo not found')

    if (todo) {
      await db.post.delete({ where: { id: params.todoId } })
    }

    return redirect(`/todo`)
  }
}

function Todo() {
  const { todo, user } = useLoaderData()

  return (
    <div>
      <div className='page-header'>
        <h1>{todo.title}</h1>
        <Link to='/todo' className='btn btn-reverse'>
          Back
        </Link>
      </div>

      <div className='page-content'>{todo.body}</div>

      <div className='page-footer'>
        {user.id === todo.userId && (
          <form method='POST'>
            <input type='hidden' name='_method' value='delete' />
            <button className='btn btn-delete'>Delete</button>
          </form>
        )}
      </div>
    </div>
  )
}

export default Todo