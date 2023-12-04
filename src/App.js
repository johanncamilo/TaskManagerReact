import React from 'react'
import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList'
import { TodoItem } from './TodoItem'
import { CreateTodoButton } from './CreateTodoButton'

// const defaultTodos = [
//   { text: 'cortar cebolla', completed: true },
//   { text: 'pelar papas', completed: false },
//   { text: 'lavar arroz', completed: false },
//   { text: 'fritar carne', completed: false },
//   { text: 'usar estados derivados', completed: false },
//   { text: 'cántár úna kañción cañón', completed: false },
// ]

const App = () => {
  const normalize = (str) => {
    str = str || ''
    str = str.toLowerCase()

    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  }

  const localStorageTodos = localStorage.getItem('TODOS_V1')

  let parsedTodos

  if (!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]))
    parsedTodos = []
  } else {
    parsedTodos = JSON.parse(localStorageTodos)
  }

  /** ESTADOS */
  const [todos, setTodos] = React.useState(parsedTodos)

  const [searchValue, setSearchValue] = React.useState('')

  /** ESTADOS DERIVADOS */
  const completedTodos = todos.filter((todo) => todo.completed).length
  const totalTodos = todos.length
  const felicitaciones = completedTodos === totalTodos ? true : false

  const searchedTodos = todos.filter(({ text }) => {
    return normalize(text).includes(normalize(searchValue))
  })

  /** LOCAL STORAGE */
  const saveTodos = (newTodos) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos))
    setTodos(newTodos)
  }

  /** FN EVENTOS*/
  const checkTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex((todo) => todo.text === text)

    newTodos[todoIndex].completed = !newTodos[todoIndex].completed

    saveTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex((todo) => todo.text === text)

    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
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
