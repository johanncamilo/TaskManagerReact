import React from 'react'
import { TodoIcon } from './TodoIcon'

export const CheckIcon = ({ completed, onComplete }) => {
  return <TodoIcon type='check' color={completed ? '#0ae98a' : 'gray'} onClick={onComplete} />
}
