import React from 'react'
import { TodoContext } from '../Context/TodoContext'
import './TodoCounter.css'
import { CounterLoading } from '../TodosLoading/CounterLoading'

export const TodoCounter = () => {
  const { completedTodos, totalTodos, felicitaciones, loading } = React.useContext(TodoContext)

  return (
    <h1 className='TodoCounter'>
      {loading && <CounterLoading />}
      {felicitaciones && <span>🥳 FELICITACIONES YA COMPLETASTE TODOS LOS TODOS!!! 🥳</span>}
      {!loading && !felicitaciones && (
        <>
          Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOS
        </>
      )}
    </h1>
  )
}
