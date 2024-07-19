import React from 'react';
import '../scripts_css/modal.css';

const Modal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>×</button>
        <img src={product.ImgPath} alt={product.Name} className="modal-image" />
        <h3>{product.Name}</h3>
        <p>{product.Description}</p>
        <p>${product.Price}</p>
      </div>
    </div>
  );
};

export default Modal;
