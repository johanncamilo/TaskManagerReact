export const TodoItem = ({ text, completed }) => {
  return (
    <li>
      <span>{completed}</span>
      <p>{text}</p>
    </li>
  )
}
