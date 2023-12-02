import './TodoCounter.css'

export const TodoCounter = ({ total, completed, felicitaciones }) => {
  if (felicitaciones)
    return (
      <h1 className='TodoCounter'>
        <span>🥳 FELICITACIONES YA COMPLETASTE TODOS LOS TODOS!!! 🥳</span>
      </h1>
    )

  return (
    <h1 className='TodoCounter'>
      Has completado <span>{completed}</span> de <span>{total}</span> TODOS
    </h1>
  )
}
