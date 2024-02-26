import React from 'react';
import './Modal.css'; // Make sure to create a corresponding CSS file

const Modal = ({ isOpen, closeModal, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={closeModal}>
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
