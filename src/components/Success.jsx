import React from 'react';
import { useNavigate } from 'react-router-dom';

const SuccessModal = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/');
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
      <div className="bg-black bg-opacity-50 backdrop-blur-lg absolute top-0 left-0 w-full h-full"></div>
      <div className="bg-white p-8 rounded-md shadow-md text-center relative">
        <h2 className="text-2xl font-bold mb-4">Success!</h2>
        <p className="text-lg mb-6">Your data has been submitted successfully.</p>
        <button
          onClick={handleNavigate}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors duration-300"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
