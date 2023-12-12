import React from 'react'
import { Outlet } from "@remix-run/react";

function Todo() {
  return (
    <div>
        <h1>This is the todo route</h1>
        <Outlet />
    </div>
  )
}

export default Todo