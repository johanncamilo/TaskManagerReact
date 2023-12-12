import React from 'react'
import './TodoSearch.css'
import { TodoContext } from '../Context/TodoContext'

export const TodoSearch = () => {
  const { searchValue, setSearchValue, loading } = React.useContext(TodoContext)
  return (
    <>
      {loading && <></>}
      {!loading && (
        <input
          className='TodoSearch'
          placeholder='Search Todos'
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value)
          }}
        />
      )}
    </>
  )
}
