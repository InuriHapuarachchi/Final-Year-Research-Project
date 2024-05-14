import React, { useState } from "react";
import { useForm } from "react-hook-form";
import MCQs from "../QuestionCards/MCQs";
import {
  Question8,
  AnswerForQuestion8,
  Question8Part2,
  AnswerForQuestion8Part2,
  Question9,
  AnswerForQuestion9,
  Question9Part2,
  AnswerForQuestion9Part2
}  from "./QuestionBank";
 
const SecondPage = ({ formData, setFormData }) => {
  const { register } = useForm();
  const color = "bg-gradient-to-br from-sky-200 to-sky-200";
  const borderColor = "border-sky-300";
  const [expand, setExpand] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
 
  return (
    <div>
      <form>
        {/* Question 08 */}
        <div
          className={`py-10 p-6 font-short-stack rounded-3xl shadow-md mb-12 bg-white ${borderColor}`}>
          <div className="mb-4">
            <div className="flex items-center space-x-8">
              <MCQs answers={AnswerForQuestion8} question={Question8} regQuestion={"question8"} setFormData={setFormData} />
            </div>
          </div>
          {formData.question8 == AnswerForQuestion8[4].emotion && (
            <div className="mt-6">
              <MCQs answers={AnswerForQuestion8Part2} question={Question8Part2} regQuestion={"question8Part2"} setFormData={setFormData} />
            </div>
          )}
        </div>


        {/* Question 09 */}
        <div
          className={`py-10 p-6 font-short-stack rounded-3xl shadow-md mb-12 bg-white ${borderColor}`}>
          <div className="mb-4">
            <div className="flex items-center space-x-8">
              <MCQs answers={AnswerForQuestion9} question={Question9} regQuestion={"question9"} setFormData={setFormData} />
            </div>
          </div>
          {formData.question6 == AnswerForQuestion9[4].emotion && (
            <div className="mt-6">
              <MCQs answers={AnswerForQuestion9Part2} question={Question9Part2} regQuestion={"question9Part2"} setFormData={setFormData} />
            </div>
          )}
        </div>
      </form>
    </div>
  );
};
 
export default SecondPage;
 