import { json, redirect } from '@remix-run/node'
import { Link } from '@remix-run/react'




export const action = async ({ request }) => {
  //console.log(123)
  const form = await request.formData()
  //console.log(form)
  const title = form.get('title')
  const body = form.get('body')
  
  const fields = { title, body }
  // console.log(fields)
 // @todo -submit to database
  return redirect(`/todo`)
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
              id='title'
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
