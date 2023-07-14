import Todo from './Todo'

function TodoList({ todos, onDeleteTodo, onUpdateTodo }) {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li  key={todo.id}>
            <Todo
              id={todo.id}
              text={todo.text}
              onDeleteTodo={onDeleteTodo}
              onUpdateTodo={onUpdateTodo}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
