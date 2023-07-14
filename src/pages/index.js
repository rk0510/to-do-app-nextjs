import { useState } from 'react'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'

function generateId() {
  return Math.floor(Math.random() * 100000)
}

export default function Home() {
  const [todos, setTodos] = useState([])

  const handleAddTodo = (text) => {
    const newTodo = {
      id: generateId(),
      text,
    }
    setTodos([...todos, newTodo])
  }

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const handleUpdateTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    )
  }

  return (
    <div className='container'>
      <div className='app-wrapper'>
      <h1 className='header'>Todo App</h1>
      <AddTodo onAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        onDeleteTodo={handleDeleteTodo}
        onUpdateTodo={handleUpdateTodo}
      />
      </div>
    </div>
  )
}
