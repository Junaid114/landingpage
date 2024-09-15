import React from 'react';
import './process.css';

const processCard = ({  title, description }) => {
  return (
    <div className="card">
      {/* <img className="card-image" src={image} alt={title} /> */}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <button className="card-button">Learn More</button>
      </div>
    </div>
  );
};

export default processCard;