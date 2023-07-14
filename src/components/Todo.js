import React, { useEffect, useState } from "react";
import {MdOutlineDone} from "react-icons/md";
import {MdEdit} from "react-icons/md";
import {MdDelete} from "react-icons/md";
import {MdCancel} from "react-icons/md";
function Todo({ id, text, onDeleteTodo, onUpdateTodo }) {
    const [editing, setEditing] = useState(false)
    const [newText, setNewText] = useState(text)
  
    const handleDelete = () => {
      onDeleteTodo && onDeleteTodo(id)
    }
  
    const handleEdit = () => {
      setEditing(true)
    }
  
    const handleCancelEdit = () => {
      setEditing(false)
      setNewText(text)
    }
  
    const handleSaveEdit = () => {
      onUpdateTodo && onUpdateTodo(id, newText)
      setEditing(false)
    }
  
    const handleChange = (e) => {
      setNewText(e.target.value)
    }
  
    return (
      <div className='list-item'>
        {editing ? (
          <>
            <input type="text" 
             placeholder="Enter a task"
             className="task-input"
            value={newText} onChange={handleChange} />
          <div>
            <button onClick={handleSaveEdit} className='save-btn'>  <MdOutlineDone/></button>
            <button onClick={handleCancelEdit} className='cancel-btn'><MdCancel/></button>
            </div>
          </>
        ) : (
          <>
            <span>{text}</span>
            <div>
            <button onClick={handleEdit} className='edit-btn'> <MdEdit/></button>
            <button onClick={handleDelete} className='delete-btn'> <MdDelete/></button>
            </div>
          </>
        )}
      </div>
    )
  }
  
  export default Todo
  