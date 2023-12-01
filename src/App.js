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
  { text: 'usar estados derivados', completed: false },
]

const App = () => {
  /** ESTADOS */
  const [todos, setTodos] = React.useState(defaultTodos)
  const [searchValue, setSearchValue] = React.useState('')
  console.log('💀 ~ file: App.js:19 ~ App ~ searchValue ->', searchValue)

  /** ESTADOS DERIVADOS */
  const completedTodos = todos.filter((todo) => todo.completed).length
  const totalTodos = todos.length

  const searchedTodos = todos.filter(({ text }) => {
    return text.toLowerCase().includes(searchValue.toLocaleLowerCase())
  })

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchedTodos.map(({ text, completed }) => (
          <TodoItem key={text} text={text} completed={completed} />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  )
}

export default App
