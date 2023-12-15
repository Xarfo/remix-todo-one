import { useLoaderData, Link } from '@remix-run/react';
import { db } from '.././utils/db.server';
import React, { useState } from 'react';

export const loader = async () => {
  const data = {
    todos: await db.todo.findMany({
      take: 20,
      select: { id: true, title: true, done: true },
    }),
  };
  return data;
};

function TodoList() {
  const { todos: initialTodos } = useLoaderData();
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = async (id) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    });

    setTodos(updatedTodos);

    await db.todo.update({
      where: { id },
      data: { done: !todos.find(todo => todo.id === id).done },
    });
  };

  const handleToggle = (id) => {
    toggleTodo(id);
  };

  return (
    <div>
      <div className="page-header">
        <h1>Todo</h1>
        <Link to="/todo/new" className="btn">
          Add Todo
        </Link>
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} onClick={() => toggleTodo(todo.id)} style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
            <Link to={`/todo/${todo.id}`}>
              <h3>{todo.title}</h3>
            </Link>
            <div>
            <button onClick={() => handleToggle(todo.id)}>
              {todo.done ? 'Undone' : 'Done'}
            </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
