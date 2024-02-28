import React from 'react';
import Image from '../assets/images/fill.png'

const Modal = ({ isOpen, message, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800/50  z-50">
    <div className="bg-white p-4 rounded-md shadow-md">
      <p className="text-lg">{message}</p>
     <div>
        <div></div>
        <div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mt-2" onClick={onClose}>
        Close
      </button>
        </div>
     </div>
      <img src={Image} alt="Image" className="bottom-0 right-0 mb-4 mr-4 w-32 h-32" />
     
    </div>
  </div>
  );
};

export default Modal;