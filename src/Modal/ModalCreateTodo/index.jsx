import React from "react";
import './style.css'
import { createPortal } from "react-dom";

function Modal ({ children }) {
    return createPortal(
        <div className='modal-container'>
            <div className="modal-animation">
                {children}
            </div>
        </div>,
        document.getElementById('modal')
    )
}

export { Modal }