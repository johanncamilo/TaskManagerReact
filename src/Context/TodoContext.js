import React from 'react'
import { useLocalStorage } from '../Hooks/useLocalStorage'

export const TodoContext = React.createContext()

/**
 * @CONTEXTO_TodoProvider
 * @param {children} param0 componente hijo
 * @returns @value con todas las propiedades que voy a exponer
 * @returns @children que va a poder acceder a las propiedades de @TodoProvider
 * Provider personalizado
 */
export const TodoProvider = ({ children }) => {
  const normalize = (str) => {
    str = str || ''
    str = str.toLowerCase()

    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  }

  /** ESTADOS */

  // call my custom hook ⚓
  const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('TODOS_V1', [])

  const [searchValue, setSearchValue] = React.useState('')
  const [openModal, setOpenModal] = React.useState(false)

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
    <TodoContext.Provider value={{ loading, error, completedTodos, totalTodos, felicitaciones, searchValue, setSearchValue, searchedTodos, checkTodo, deleteTodo, openModal, setOpenModal }}>
      {children}
    </TodoContext.Provider>
  )
}
