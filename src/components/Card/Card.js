// Card.js

import React, { useState } from 'react';
import './Card.css'; // Make sure to create this CSS file and include the styles
import Modal from './Modal/Modal';

const Card = ({ title, description, icon, isNew }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className={`card ${isNew ? 'new' : ''}`} onClick={toggleModal}>
        <div className="card-header">
          <span className="card-icon">{icon}</span>
          {isNew && <span className="badge">NEW!</span>}
        </div>
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
        </div>
      </div>
      <Modal isOpen={isModalOpen} closeModal={toggleModal}>
        {/* Content you want to display in the modal goes here */}
        <h3>{title}</h3>
        <p>{description}</p>
      </Modal>
    </>
  );
};

export default Card;
