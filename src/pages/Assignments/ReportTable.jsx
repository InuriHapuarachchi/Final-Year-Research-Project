
import React, { useState } from "react";

import ProfileModal from "../Report_profile";

const dataTika = [
  { id: 1, name: "semora", category: "family" ,action: "view", details: "Details for semora" },
  { id: 2, name: "john",category: "social" , action: "view", details: "Details for john" },
  { id: 3, name: "alice",category: "family" , action: "view", details: "Details for alice" },
];

function Modal({ isOpen, closeModal, details }) {
  return (
    <>
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <div className="bg-yellow-100 rounded-lg p-8 z-20 w-96">
              <div className="text-center">
                <h2 className="text-2xl mb-4 font-semibold text-yellow-900">Details</h2>
                <p className="text-yellow-800">{details}</p>
                <button
                  onClick={closeModal}
                  className="bg-yellow-300 hover:bg-yellow-400 text-yellow-900 font-bold py-2 px-4 mt-6 rounded transition duration-300 ease-in-out transform hover:scale-105"
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

function ReportTable() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [profileModalIsOpen, setProfileModalIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const openModal = (item) => {
    setSelectedItem(item);
    setModalIsOpen(true);
  };

  const openProfileModal = () => {
    setProfileModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setProfileModalIsOpen(false);
  };

  return (
    <div className="text-center px-56">
      <h1 className="text-2xl mb-4">My Table</h1>
      <table className="w-full rounded-lg border-black border-2">
        <thead className="bg-yellow-200">
          <tr>
            <th className="px-4 py-2 border border-r border-black">ID</th>
            <th className="px-4 py-2 border border-r border-black">Name</th>
            <th className="px-4 py-2 border border-r border-black">Category</th>
            <th className="px-4 py-2 border border-black">Action</th>
          </tr>
        </thead>
        <tbody>
          {dataTika.map((item) => (
            <tr key={item.id} className="hover:bg-yellow-100">
              <td className="px-4 py-2 border border-r border-black">{item.id}</td>
              <td className="px-4 py-2 border border-r border-black">{item.name}</td>
              <td className="px-4 py-2 border border-r border-black">{item.category}</td>
              <td className="px-4 py-2 border border-black">
                <button
                  onClick={() => openModal(item)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded border border-black focus:outline-none focus:shadow-outline"
                >
                  View Report
                </button>
                <button
                  onClick={openProfileModal}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded border border-black ml-2 focus:outline-none focus:shadow-outline"
                >
                  Profile
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal isOpen={modalIsOpen} closeModal={closeModal} details={selectedItem.details} />
      <ProfileModal isOpen={profileModalIsOpen} closeModal={closeModal} />
    </div>

  );
}

export default ReportTable;
