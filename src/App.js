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

  /** ESTADOS DERIVADOS */
  const completedTodos = todos.filter((todo) => todo.completed).length
  const totalTodos = todos.length
  const felicitaciones = completedTodos === totalTodos ? true : false

  const searchedTodos = todos.filter(({ text }) => {
    return text.toLowerCase().includes(searchValue.toLocaleLowerCase())
  })

  const checkTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex((todo) => todo.text === text)

    newTodos[todoIndex].completed = !newTodos[todoIndex].completed

    setTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex((todo) => todo.text === text)

    newTodos.splice(todoIndex, 1)
    setTodos(newTodos)
  }

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} felicitaciones={felicitaciones} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchedTodos.map(({ text, completed }) => (
          <TodoItem key={text} text={text} completed={completed} onComplete={() => checkTodo(text)} onDelete={() => deleteTodo(text)} />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  )
}

export default App
