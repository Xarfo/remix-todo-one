import React from 'react'
import { Link, useLoaderData } from '@remix-run/react'
import { redirect } from '@remix-run/node'
import { db } from '../utils/db.server'


export const loader = async ({ params }) => {
  const todo = await db.todo.findUnique({
    where: { id: params.id },
  })
  if (!todo) throw new Error('Todo not found')
  const data = { todo }
  return data
}

  export const action = async ({ request, params }) => {
    const form = await request.formData()
    if (form.get('_method') === 'delete') {
  
      const todo = await db.todo.findUnique({
        where: { id: params.id },
      })
      if (!todo) throw new Error('Todo not found')
        await db.todo.delete({ where: { id: params.id } })
      return redirect('/todo')
    }
  }
function TodoId() {
  const { todo } = useLoaderData()
  return (
    <div>
      <div className='page-header'>
        <h1>{todo.title}</h1>
        <Link to='/todo' className='btn btn-reverse'>
          Back
        </Link>
      </div>

      <div className='page-content'>
        {todo.body}
        </div>
        <div className='page-footer'>
            <form method='POST'>
              <input type='hidden' name='_method' value='delete' />
              <button className='btn btn-delete'>Delete</button>
            </form>
        </div>
    </div>
  )
}
export default TodoId