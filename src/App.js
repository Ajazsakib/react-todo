import React, { useState, useEffect } from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import './App.css';

function App()
{
  const [todos, setTodos] = useState([])
  const [updateTodoId, setUpdateTodoId] = useState(null);
  const fetchTodos = async () =>
  {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json()
    setTodos(data)
  }

  const updateTodo = (id) =>
  {
    setUpdateTodoId(id)
  }

  const deleteTodo = async (id) =>
  {
    await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "DELETE",
    })

  }

  useEffect(() =>
  {
    fetchTodos()
  }, [])

  return (
    <div className="App">
      <h1>TODO List</h1>

      <AddTodo todos={todos} setTodos={setTodos} updateTodoId={updateTodoId} setUpdateTodoId={setUpdateTodoId} />
      <Todos todos={todos} updateTodo={updateTodo} updateTodoId={updateTodoId} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
