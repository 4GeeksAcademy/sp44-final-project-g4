import React from 'react'

export const Modal = ({ showModal, handleClose }) => {
    return (
        <div className="modal" tabIndex="-1" style={{ display: showModal ? 'block' : 'none' }}>

            <div className="modal-dialog">

                <div className="modal-content" id='modal-jumbotron'>

                    <div className="modal-header">
                        <h5 className="modal-title">Select your city</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}></button>
                    </div>

                    <div className="modal-body">

                        <div className="search">
                            <input type="text" className="search__input" placeholder="Please type your city..."/>
                                <div className="search__icon">

                                    <ion-icon name="search"></ion-icon>
                                </div>
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button variant="secondary" onClick={handleClose}>
                            Close
                        </button>
                        <button variant="primary" onClick={handleClose}>
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;