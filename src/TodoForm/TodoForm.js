import React from 'react'
import './TodoForm.css'

export const TodoForm = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label for=''>Escribe tu nuevo TODO</label>

      <textarea placeholder='ej: ir al gym' name='' id='' cols='30' rows='10'></textarea>
      <div className='TodoForm-buttonContainer'>
        <button type='button' className='TodoForm-button TodoForm-button--cancel'>
          Cancelar
        </button>
        <button type='submit' className='TodoForm-button TodoForm-button--add'>
          Añadir
        </button>
      </div>
    </form>
  )
}
