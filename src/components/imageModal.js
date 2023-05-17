import React from 'react';


export default function Modal({ imageUrl, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <img class ="modalimage" src={imageUrl} />
        <div className="close-button" onClick={onClose}>
          X
          </div>
      </div>
    </div>
  );
}