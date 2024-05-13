import React from 'react';

function ProfileModal({ isOpen, closeModal }) {
  return (
    <>
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <div className="bg-blue-100 rounded-lg p-8 z-20 w-96">
              <div className="text-center">
                <h2 className="text-2xl mb-4 font-semibold text-blue-900">Profile</h2>
                <p className="text-blue-800">Hello Profile</p>
                <button
                  onClick={closeModal}
                  className="bg-blue-300 hover:bg-blue-400 text-blue-900 font-bold py-2 px-4 mt-6 rounded transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProfileModal;
