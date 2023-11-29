import './TodoItem.css'

export const TodoItem = ({ text, completed }) => {
  return (
    <li className='TodoItem'>
      {/* <span>{completed}</span> */}
      <span className='Icon Icon-check Icon-check--active'>V</span>
      <p className='TodoItem-p TodoItem-p--complete'>{text}</p>
    </li>
  )
}
