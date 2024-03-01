import React from 'react'
import CloseIcon from '../../../asset/modal-close-icon.svg';
import './modal.css'

export default function Modal({
    label,
    onClose,
    children,
    show
}) {
    return (
        show && <div className='modal-wrapper'>
            <div className='modal'>
                <header>
                    <p>{label}</p>
                    <div className='close-modal' onClick={onClose}>
                        <img src={CloseIcon} alt='close-icon' />
                    </div>
                </header>
                {children}
            </div>
        </div>
    )
}

Modal.defaultProps = {
    label: '',
    onClose: () => { },
}