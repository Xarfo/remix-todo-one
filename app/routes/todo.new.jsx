import { redirect } from '@remix-run/node'
import { Link } from '@remix-run/react'
import { db } from '.././utils/db.server'




export const action = async ({ request }) => {
  
  const form = await request.formData()

  const title = form.get('title')
  const body = form.get('body')
  
  const fields = { title, body }

  const todo = await db.todo.create({data: fields})
  
  return redirect(`/todo/${todo.id}`)
}


function TodoForm() {
  return (
    <>
      <div className='page-header'>
        <h1>New Todo</h1>
        <Link to='/todo/new' className='btn btn-reverse'>
          Back
        </Link>
      </div>

      <div className='page-content'>
        <form method='POST'>
          <div className='form-control'>
            <label htmlFor='title'>Title</label>
            <input
              type='text'
              name='title'
              id='id'
            />
          <div className='form-control'>
            <label htmlFor='body'>Add Task</label>
            <textarea
              name='body'
              id='body'
            />
         </div>
          </div>
          <button type='submit' className='btn btn-block'>
            Create Task
          </button>
        </form>
      </div>
    </>
  )
}

export default TodoForm
