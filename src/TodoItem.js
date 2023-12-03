import React from 'react'
import { CheckIcon } from './CheckIcon'
import { DeleteIcon } from './DeleteIcon'

import './TodoItem.css'

export const TodoItem = ({ text, completed, onComplete, onDelete }) => {
  return (
    <li className='TodoItem'>
      {/* <span className={`Icon Icon-check ${completed && 'Icon-check--active'}`} onClick={onComplete}>
        {completed ? '✔' : 'X'}
      </span> */}
      <CheckIcon completed={completed} onComplete={onComplete} />
      <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>{text}</p>
      {/* <span className='Icon Icon-delete' onClick={onDelete}>
        X
      </span> */}
      <DeleteIcon onDelete={onDelete} />
    </li>
  )
}
