import './App.css'
import React from 'react'
import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList'
import { TodoItem } from './TodoItem'
import { CreateTodoButton } from './CreateTodoButton'

const defaultTodos = [
  { text: 'cortar cebolla', completed: true },
  { text: 'pelar papas', completed: false },
  { text: 'lavar arroz', completed: false },
  { text: 'fritar carne', completed: false },
]

const App = () => {
  return (
    <React.Fragment>
      <TodoCounter completed={16} total={25} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(({ text, completed }) => (
          <TodoItem key={text} text={text} completed={completed} />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  )
}

export default App
