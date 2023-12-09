import { TodoCounter } from './TodoCounter/TodoCounter'
import { TodoSearch } from './TodoSearch/TodoSearch'
import { TodoList } from './TodoList/TodoList'
import { TodoItem } from './TodoItem/TodoItem'
import { CreateTodoButton } from './CreateTodoButton/CreateTodoButton'

import { TodosLoading } from './TodosLoading/TodosLoading'
import { TodosError } from './TodosError/TodosError'
import { EmptyTodos } from './EmptyTodos/EmptyTodos'

export const AppUI = ({ loading, error, completedTodos, totalTodos, felicitaciones, searchValue, setSearchValue, searchedTodos, checkTodo, deleteTodo }) => {
  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} felicitaciones={felicitaciones} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

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
