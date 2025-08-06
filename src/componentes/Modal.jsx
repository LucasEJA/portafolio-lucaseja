import React from "react";
import "../estilos/Modal.css";

export const Modal = ({ isOpen, closeModal, children, title }) => {
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    if (!isOpen) return null;

    return (
        <div
            className="modal-overlay"
            onClick={handleOverlayClick}
        >
            <div className="modal-container">
                {/* Header */}
                <div className="modal-header">
                    <h2 className="modal-title">{title}</h2>
                    <button
                        onClick={closeModal}
                        className="modal-close-btn"
                    >
                        &times;
                    </button>
                </div>

                {/* Body */}
                <div className="modal-body">
                    {children}
                </div>
            </div>
        </div>
    );
};
