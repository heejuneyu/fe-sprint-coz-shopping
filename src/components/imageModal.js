import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Modal({ imageUrl, onClose }) {

  const notifys = () => toast("북마크 되었습니다")
  return (
    <div className="modal">
      <div className="modal-content">
        <img class ="modalimage" src={imageUrl} />
        <div className="close-button" onClick={onClose}>
          X
          </div>
          <div class="modalstarbtn" onClick={notifys}>
        <FontAwesomeIcon icon={faStar} color={'yellow'} />
        
      </div>
      <ToastContainer></ToastContainer>
      </div>
    </div>
  );
}