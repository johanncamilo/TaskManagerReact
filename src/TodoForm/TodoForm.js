import React from 'react'
import './TodoForm.css'
import { TodoContext } from '../Context/TodoContext'

export const TodoForm = () => {
  const { setOpenModal, addTodo } = React.useContext(TodoContext)
  const [niuTodoValue, setNiuTodoValue] = React.useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    addTodo(niuTodoValue)
    setOpenModal(false)
  }

  const onCancel = (e) => {
    setOpenModal(false)
  }

  const onChange = (e) => {
    setNiuTodoValue(e.target.value)
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>

      <textarea placeholder='ej: ir al gym' cols='30' rows='10' value={niuTodoValue} onChange={onChange}></textarea>
      <div className='TodoForm-buttonContainer'>
        <button type='button' onClick={onCancel} className='TodoForm-button TodoForm-button--cancel'>
          Cancelar
        </button>
        <button type='submit' className='TodoForm-button TodoForm-button--add'>
          Añadir
        </button>
      </div>
    </form>
  )
}
