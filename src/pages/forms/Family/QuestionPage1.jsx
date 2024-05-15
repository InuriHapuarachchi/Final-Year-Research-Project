
import React from "react";
import { useForm } from "react-hook-form";
import QuestionImageCard from "../QuestionCards/QuestionImageCard";
import { useState } from "react";
import MCQs from "../QuestionCards/MCQs";
import {
  Question1,
  AnswerForQuestion1,
  Question2,
  AnswerForQuestion2,
  Question2Part2,
  AnswerForQuestion2Part2,
  Question3,
  AnswerForQuestion3,
  Question3Part2,
  AnswerForQuestion3Part2,
  Question4,
  Question4Part2,
  AnswerForQuestion4,
  AnswerForQuestion4Part2,
  Question5,
  AnswerForQuestion5,
  Question5Part2,
  AnswerForQuestion5Part2,
  Question6,
  AnswerForQuestion6,
  Question6Part2,
  AnswerForQuestion6Part2,
  Question7,
  AnswerForQuestion7,
  Question7Part2,
  AnswerForQuestion7Part2
} from "./QuestionBank";
import { getEmotionValue } from "../../../emotions";

const FirstPage = ({ formData, setFormData }) => {
  const { register } = useForm();
  // const color = "bg-gradient-to-br from-sky-300 to-sky-300";
  const color = "bg-white";
  const borderColor = "border-inherit";

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const handleAnswerSelect = (questionIndex, answerText, Question1) => {
    setSelectedAnswer(answerText);
    const questionKey = `question${questionIndex}`;
    setFormData((prevData) => ({
      ...prevData,
      [questionKey]: [Question1, answerText, getEmotionValue(answerText)],
    }));
  };

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
        {/* Question 01 */}
        <div className="mb-12">
          <QuestionImageCard
            question={Question1}
            answers={AnswerForQuestion1}
            selectedAnswer={selectedAnswer}
            onAnswerSelect={(answerText) => handleAnswerSelect("1", answerText, Question1)}
            setFormData={setFormData}
            color={"bg-white py-12 font-short-stack"}
            borderColor={borderColor}
          />
        </div>

        {/* Question 02 */}
        <div
          className={`bg-white font-short-stack p-6 py-10 rounded-3xl shadow-md mb-12  ${borderColor}`}
        >
          <div className="mb-4">
            <div className="flex flex-col ">
              <MCQs answers={AnswerForQuestion2} question={Question2}  nselectedAnswer={formData.question2} regQuestion={"question2"} setFormData={setFormData} />
            </div>
          </div>
          {formData.question2 == AnswerForQuestion2[1].emotion && (
            <div className="mt-6">
              <MCQs answers={AnswerForQuestion2}  nselectedAnswer={formData.question2Part2} question={Question2Part2} regQuestion={"question2Part2"} setFormData={setFormData} />
            </div>
          )}
        </div>

        {/* Question 03 */}
        <div
          className={` bg-white font-short-stack py-10 p-6 rounded-3xl shadow-md mb-12  ${borderColor}`}
        >
          <div className="mb-4">
            <div className="flex flex-col ">
              <MCQs answers={AnswerForQuestion3} question={Question3} regQuestion={"question3"} setFormData={setFormData} />
            </div>
          </div>
          {formData.question3 == AnswerForQuestion3[4].emotion && (
            <div className="mt-6">

              <MCQs answers={AnswerForQuestion3Part2} question={Question3Part2} regQuestion={"question3Part2"} setFormData={setFormData} />
            </div>
          )}
        </div>

        {/* Question 04 */}
        <div
          className={` bg-white font-short-stack py-10 p-6 rounded-3xl shadow-md mb-12  ${borderColor}`}
        >
          <div className="mb-4">
            {/* <label className="block text-xl font-semibold mb-6">
              {question4}
            </label> */}
            <div className="flex flex-col ">
              <MCQs answers={AnswerForQuestion4} question={Question4} regQuestion={"question4"} setFormData={setFormData} />

              {/* <label className="flex items-center mb-2">
                <input
                  type="radio"
                  name="favoriteSibling"
                  value={question4Answer1}
                  {...register("question4")}
                  onChange={handleChange}
                  className="appearance-none h-8 w-8 border border-sky-700 rounded-full checked:bg-sky-500 checked:border-transparent focus:outline-none"
                />
                <span className="ml-2 text-xl">Talk to my family about it</span>
              </label>
            
              <label className="flex items-center mb-2">
                <input
                  type="radio"
                  name="favoriteSibling"
                  value={question4Answer2}
                  {...register("question4")}
                  onChange={handleChange}
                  className="appearance-none h-8 w-8 border border-gray-700 rounded-full checked:bg-sky-500 checked:border-transparent focus:outline-none"
                />
                <span className="ml-2 text-xl">Feel sad or upset</span>
              </label>
              <label className="flex items-center mb-2">
                <input
                  type="radio"
                  name="favoriteSibling"
                  value={question4Answer3}
                  {...register("question4")}
                  onChange={handleChange}
                  className="appearance-none h-8 w-8 border border-gray-700 rounded-full checked:bg-sky-500 checked:border-transparent focus:outline-none"
                />
                <span className="ml-2 text-xl">Seek comfort from my family</span>
              </label>
              <label className="flex items-center mb-2">
                <input
                  type="radio"
                  name="favoriteSibling"
                  value={question4Answer4}
                  {...register("question4")}
                  onChange={handleChange}
                  className="appearance-none h-8 w-8 border border-sky-700 rounded-full checked:bg-sky-500 checked:border-transparent focus:outline-none"
                />
                <span className="ml-2 text-xl">Keep my feelings to myself</span>
              </label>
              <label className="flex items-center mb-2">
                <input
                  type="radio"
                  name="favoriteSibling"
                  value={question4Answer5}
                  {...register("question4")}
                  onChange={handleChange}
                  className="appearance-none h-8 w-8 border border-sky-700 rounded-full checked:bg-sky-500 checked:border-transparent focus:outline-none"
                />
                <span className="ml-2 text-xl">Feel frightened or anxious</span>
              </label> */}
            </div>
          </div>
          {formData.question4 == AnswerForQuestion4[4].emotion && (
            <div className="mt-6">

              <MCQs answers={AnswerForQuestion4Part2} question={Question4Part2} regQuestion={"question4Part2"} setFormData={setFormData} />
            </div>
          )}
        </div>

        {/* Question 05 */}
        <div
          className={`py-10 p-6 font-short-stack rounded-3xl shadow-md mb-12 bg-white ${borderColor}`}
        >
          <div className="mb-4">
            {/* <label className="block text-xl font-semibold mb-2">
              {question5}
            </label> */}
            <div className="flex items-center space-x-8">
              <MCQs answers={AnswerForQuestion5} question={Question5} regQuestion={"question5"} setFormData={setFormData} />

              {/* <label className="flex items-center">
                <input
                  type="radio"
                  name="favoriteSibling"
                  value={question5Answer1}
                  {...register("question5")}
                  onChange={handleChange}
                  className="appearance-none h-8 w-8 border border-sky-700 rounded-full checked:bg-sky-500 checked:border-transparent focus:outline-none"
                />
                <span className="ml-2 text-xl">Yes</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="favoriteSibling"
                  value={question5Answer2}
                  {...register("question5")}
                  onChange={handleChange}
                  className="appearance-none h-8 w-8 border border-gray-700 rounded-full checked:bg-sky-500 checked:border-transparent focus:outline-none"
                />
                <span className="ml-2 text-xl">No</span>
              </label> */}
            </div>
          </div>
          {/* </div> */}
          {/* {formData.question5 == question5Answer1 && (
            <div>
              <label className="block text-xl ml-10 font-semibold mb-2">
                {question5Part2}
              </label>
              <input
                type="text"
                className="w-full px-3  py-2 border rounded-md focus:outline-none focus:border-blue-400"
                placeholder="Why do you think so?"
                value={formData.question5Part2 || ""}
                {...register("question5Part2")}
                onChange={handleChange}
              />
            </div>
          )}  */}
          {/* {console.log("test1", formData.Question5)}
          {console.log("test2", AnswerForQuestion5[4].emotion)} */}
          {formData.question5 == AnswerForQuestion5[4].emotion && (
            <div className="mt-6">

              <MCQs answers={AnswerForQuestion5Part2} question={Question5Part2} regQuestion={"question5Part2"} setFormData={setFormData} />
            </div>
          )}
        </div>


        {/* Question 06 */}
        <div
          className={`py-10 p-6 font-short-stack rounded-3xl shadow-md mb-12 bg-white ${borderColor}`}>
          <div className="mb-4">
            <div className="flex items-center space-x-8">
              <MCQs answers={AnswerForQuestion6} question={Question6} regQuestion={"question6"} setFormData={setFormData} />
            </div>
          </div>
          {formData.question6 == AnswerForQuestion6[4].emotion && (
            <div className="mt-6">
              <MCQs answers={AnswerForQuestion6Part2} question={Question6Part2} regQuestion={"question6Part2"} setFormData={setFormData} />
            </div>
          )}
        </div>

        {/* Question 07 */}
        <div
          className={`py-10 p-6 font-short-stack rounded-3xl shadow-md mb-12 bg-white ${borderColor}`}>
          <div className="mb-4">
            <div className="flex items-center space-x-8">
              <MCQs answers={AnswerForQuestion7} question={Question7} regQuestion={"question7"} setFormData={setFormData} />
            </div>
          </div>
          {formData.question7 == AnswerForQuestion7[4].emotion && (
            <div className="mt-6">
              <MCQs answers={AnswerForQuestion7Part2} question={Question7Part2} regQuestion={"question7Part2"} setFormData={setFormData} />
            </div>
          )}
        </div>

      </form>
    </div>
  );
};

export default FirstPage;