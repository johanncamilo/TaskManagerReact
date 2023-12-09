import React from 'react'

import { useLocalStorage } from './Hooks/useLocalStorage'
import { AppUI } from './AppUI'

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

  /** ESTADOS */

  // call my custom hook ⚓
  const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('TODOS_V1', [])

  const [searchValue, setSearchValue] = React.useState('')

  /** ESTADOS DERIVADOS */
  const completedTodos = todos.filter((todo) => todo.completed).length
  const totalTodos = todos.length
  const felicitaciones = completedTodos === totalTodos ? true : false

  const searchedTodos = todos.filter(({ text }) => {
    return normalize(text).includes(normalize(searchValue))
  })

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
    <AppUI
      loading={loading}
      error={error}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      felicitaciones={felicitaciones}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      checkTodo={checkTodo}
      deleteTodo={deleteTodo}
    />
  )
}

export default App
