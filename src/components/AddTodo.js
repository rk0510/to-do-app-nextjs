import { useState } from 'react'

function AddTodo({ onAddTodo }) {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onAddTodo && onAddTodo(text)
    setText('')
  }

  const handleChange = (e) => {
    setText(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} className='task-input' onChange={handleChange} />
      <button type="submit" className='add-btn'>Add</button>
    </form>
  )
}

export default AddTodo
