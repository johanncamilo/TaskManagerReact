import React from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'

/**
 * @Modal creado para Portals, expone contenido a teletrasportar
 * @param {children} param0
 * lo teletransporta en el #modal
 */
export const Modal = ({ children }) => {
  return ReactDOM.createPortal(<div className='ModalBackground'>{children}</div>, document.getElementById('modal'))
}
