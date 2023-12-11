import React from 'react'
import { TodoCounter } from './TodoCounter/TodoCounter'
import { TodoSearch } from './TodoSearch/TodoSearch'
import { TodoList } from './TodoList/TodoList'
import { TodoItem } from './TodoItem/TodoItem'
import { CreateTodoButton } from './CreateTodoButton/CreateTodoButton'
import { TodosLoading } from './TodosLoading/TodosLoading'
import { TodosError } from './TodosError/TodosError'
import { EmptyTodos } from './EmptyTodos/EmptyTodos'
import { TodoContext } from './Context/TodoContext'

export const AppUI = () => {
  const { loading, error, searchedTodos, checkTodo, deleteTodo } = React.useContext(TodoContext)
  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {loading && (
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        )}
        {error && <TodosError />}
        {!loading && searchedTodos.length === 0 && <EmptyTodos />}

        {searchedTodos.map(({ text, completed }) => (
          <TodoItem key={text} text={text} completed={completed} onComplete={() => checkTodo(text)} onDelete={() => deleteTodo(text)} />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  )
}
