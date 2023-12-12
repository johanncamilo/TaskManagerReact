import React from 'react'
import { TodoContext } from '../Context/TodoContext'
import './TodoCounter.css'

export const TodoCounter = () => {
  const { completedTodos, totalTodos, felicitaciones, loading } = React.useContext(TodoContext)
  if (felicitaciones)
    return (
      <h1 className='TodoCounter'>
        <span>🥳 FELICITACIONES YA COMPLETASTE TODOS LOS TODOS!!! 🥳</span>
      </h1>
    )

  return (
    <h1 className='TodoCounter'>
      {loading && <>...</>}
      {felicitaciones && <span>🥳 FELICITACIONES YA COMPLETASTE TODOS LOS TODOS!!! 🥳</span>}
      {!loading && (
        <>
          Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOS
        </>
      )}
    </h1>
  )
}
