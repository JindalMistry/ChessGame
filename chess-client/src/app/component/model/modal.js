import React from 'react'
import CloseIcon from '../../../asset/modal-close-icon.svg';
import './modal.css'

export default function Modal({
    label,
    onClose,
    children
}) {
  return (
    <div className='modal-wrapper'>
        <div className='modal'>
        <header>
            <p>{label}</p>
            <div className='close-modal'>
                <img src={CloseIcon} alt='close-icon'/>                
            </div>
        </header>
        {children}
        </div>
    </div>
  )
}

Modal.defaultProps = {
    label : '',
    onClose : () => {},
}