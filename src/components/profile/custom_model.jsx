
import React from 'react'
import { Modal } from 'react-bootstrap'

const CustomModal = ({  isShow, disMiss }) => {
    return (
        <Modal
            size='lg'
            aria-labelledby='contained-modal-title-vcenter'
            show={isShow}
            >
            <Modal.Header closeButton onClick={() => disMiss(false)} />
            <Modal.Body>
                <h2>play</h2>
                <h2>playman</h2>
                <h2>Alex</h2>
            </Modal.Body>
        </Modal>
    )
}

export default CustomModal