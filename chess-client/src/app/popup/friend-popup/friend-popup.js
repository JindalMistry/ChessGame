import React from 'react'
import Modal from '../../component/model/modal'

export default function FriendPopup({ show, onClose }) {
    return (
        <Modal
            label={"Play against AI"}
            onClose={onClose}
            show={show}
        >

        </Modal>
    )
}
