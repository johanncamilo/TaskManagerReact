import React from 'react'
import ReactDOM from 'react-dom'

/**
 * @Modal creado para Portals, expone contenido a teletrasportar
 * @param {children} param0
 */
export const Modal = ({ children }) => {
  return ReactDOM.createPortal(<div className='Modal'>{children}</div>, document.getElementById('modal'))
}
