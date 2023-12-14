import { Outlet, useLoaderData } from '@remix-run/react'

function Todo() {

  const { todo } = useLoaderData()
  return (
    <>
    {todo.title}
    
    </>
  )
}

export default Todo