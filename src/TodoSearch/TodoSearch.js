import React from 'react'
import './TodoSearch.css'
import { TodoContext } from '../Context/TodoContext'

export const TodoSearch = () => {
  const { searchValue, setSearchValue } = React.useContext(TodoContext)
  return (
    <input
      className='TodoSearch'
      placeholder='cortar cebolla'
      value={searchValue}
      onChange={(e) => {
        setSearchValue(e.target.value)
      }}
    />
  )
}
