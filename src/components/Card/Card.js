// Card.js

import React from 'react';
import './Card.css'; // Make sure to create this CSS file and include the styles

const Card = ({ title, description, icon, isNew }) => {
  return (
    <div className={`card ${isNew ? 'new' : ''}`}>
      <div className="card-header">
        <span className="card-icon">{icon}</span>
        {isNew && <span className="badge">NEW!</span>}
      </div>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
