import './CreateTodoButton.css'

export const CreateTodoButton = () => {
  return (
    <button className='CreateTodoButton' onClick={(e) => console.log('clickeaste', e.target)}>
      +
    </button>
  )
}
