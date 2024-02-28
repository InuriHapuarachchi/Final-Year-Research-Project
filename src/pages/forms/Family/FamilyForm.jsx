import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import FirstPage from "./QuestionPage1";
import SecondPage from "./QuestionPage2";
import FamBGImg from "../../../assets/images/Family/fam.png";
import Modal from "../../../components/Modal";
import SuccessModal from "../../../components/Success";
import BGImage from '../../../assets/images/Family/pattern1.png'
import HeaderImg from '../../../assets/images/Family/famm.png'

export default function FamilyForm() {
  const [formData, setFormData] = useState({});
  const [showForm, setShowForm] = useState("form1");
  const [showModal, setShowModal] = useState(false);

  const HandleSubmit = () => {
    setShowForm("submit");
    console.log("hello", formData);
  };

  const handleNext = () => {
    // Check if there are no null values
    if (!formData.question1 || !formData.question2 || !formData.question3 || !formData.question4  || !formData.question5) {
      setShowModal(true);
      return;
    }
    setShowForm("form2");
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="pt-2 bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${BGImage})` }}>
      <div className="flex justify-center items-center">
        <div
          className="w-7/12  h-72 relative rounded-t-3xl bg-stone-100 bg-contain bg-no-repeat  bg-center" style={{ backgroundImage: `url(${HeaderImg})` }}>
          <Link
            to="/"
            className="absolute top-0 left-0 ml-4 mt-4 text-white text-2xl bg-rose-500 px-4 py-2 px-6 rounded-2xl hover:bg-rose-600"
          >
            Go Back
          </Link>
          <div className="flex justify-center items-center h-full">
            <span className="text-5xl">Family</span>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center ">
        {showForm == "form1" && (
          <div className="w-7/12 bg-orange-300 px-20 pt-20 pb-12 relative rounded-b-3xl">
            <FirstPage formData={formData} setFormData={setFormData} />
          </div>
        )}
        {showForm == "form2" && (
           <div className="w-7/12 bg-amber-500/50 px-20 pt-20 pb-12 relative rounded-b-3xl">
            <SecondPage formData={formData} setFormData={setFormData} />
          </div>
        )}
      </div>

      <div className="flex justify-center items-center mt-2 pb-10 ">
        <div className="w-7/12 p-10 py-16 bg-rose-400/70 relative rounded-3xl flex justify-center items-center">
          {showForm == "form1" && (
            <button
              onClick={() => {
                handleNext();
              }}
              className=" animate-bounce py-3 px-14 inline-flex border-4 border-purple-600 items-center gap-x-2 text-xl font-semibold rounded-full border border-transparent bg-purple-500 text-white hover:bg-purple-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              Next form
            </button>
          )}
          {showForm == "form2" && (
            <button
            className="py-3 px-14 inline-flex border-4 border-purple-600 items-center gap-x-2 text-xl font-semibold rounded-full border border-transparent bg-teal-400 text-white hover:bg-teal-500 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              onClick={() => {
                setShowForm("form1");
              }}
            >
              Back form
            </button>
          )}
          {showForm == "form2" && (
            <button
            className="ml-4 py-3 px-14 inline-flex border-4 border-purple-600 items-center gap-x-2 text-xl font-semibold rounded-full border border-transparent bg-purple-500 text-white hover:bg-purple-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              onClick={HandleSubmit}
            >
              Submit
            </button>
          )}
        </div>
      </div>
      <Modal
        isOpen={showModal}
        message="Hey you need to fill everything to go to the next part :) "
        onClose={handleCloseModal}
      />
      <SuccessModal />
    </div>
  );
}
