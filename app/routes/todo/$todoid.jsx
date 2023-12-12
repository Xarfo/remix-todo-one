import React from 'react'
import { useParams } from '@remix-run/react'

function Todo() {
  return (
    <div>
        <h1>{useParams.todoId}</h1>
    </div>
  )
}

export default Todo