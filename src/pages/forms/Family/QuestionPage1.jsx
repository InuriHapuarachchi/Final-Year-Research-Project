// // FirstPage.jsx
// import React from "react";
// import { useForm } from "react-hook-form";
// import QuestionImageCard from "../QuestionCards/QuestionImageCard";
// import { useState } from "react";
// import Q1Image1 from "../../../assets/images/Family/Q1/1.png";
// import Image from '../../../assets/images/selectionPage/aaa.png'
// import HappyImg from "../../../assets/images/Family/Q1/happy family.png"
// import SadImg from "../../../assets/images/Family/Q1/sad family.png"
// import FrightenedImg from "../../../assets/images/Family/Q1/frightened.png"
// import supportiveImg from "../../../assets/images/Family/Q1/supportive family.png"
// import unlovedImg from  "../../../assets/images/Family/Q1/unloved and not cared.png"


// const FirstPage = ({ formData, setFormData }) => {
//   const { register } = useForm();
//   // const color = "bg-gradient-to-br from-sky-300 to-sky-300";
//   const color = "bg-white";
//   const borderColor = "border-inherit"

//   const question1 = "01. What picture best describes your family?";
//   const answerForQuestion1 = [
//     { image: HappyImg, text: "i have a happy family" },
//     { image: SadImg, text: "i have a sad family" },
//     { image: FrightenedImg, text: "i am frightened to live with my family" },
//     { image: supportiveImg, text: "my family supports me a lot" },
//     { image: unlovedImg, text: "my family doesn't love me" },
//   ];
//   const question2 = "02. Who do you like best in your family, and why?";
//   const question3 = "03. Do you have any favourite brother or sister, and why?";
//   const question4 = "04. Do you have both your parents?";
//   const question5 = "05. Does anyone make you frightend within your family, and why?";

//   const [selectedAnswer, setSelectedAnswer] = useState(null);
//   const handleAnswerSelect = (questionIndex, answerText) => {
//     setSelectedAnswer(answerText);
//     const questionKey = `question${questionIndex}`;
//     setFormData((prevData) => ({
//       ...prevData,
//       [questionKey]: answerText,
//     }));
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   return (
//     <div>
//       <form>
//         {/* Question 01 */}
//         <div className="mb-12">
//           <QuestionImageCard
//             question={question1}
//             answers={answerForQuestion1}
//             selectedAnswer={selectedAnswer}
//             onAnswerSelect={(answerText) => handleAnswerSelect("1", answerText)}
//             setFormData={setFormData}
//             color={"bg-white py-12 font-short-stack"}
//             borderColor={borderColor}
//           />
//         </div>

//         {/* Question 02 */}
//         <div className={`bg-white font-short-stack p-6 py-10 rounded-3xl shadow-md mb-12  ${borderColor}`}>
//           <div className="mb-4">
//             <label className="block text-xl font-semibold mb-2">
//               {question2}
//             </label>
//             <input
//               type="text"
//               className="w-full px-3 py-2 border rounded-3xl focus:outline-none focus:border-blue-400"
//               placeholder="Type your answer here..."
//               value={formData.question2 || ""}
//               {...register("question2")}
//               onChange={handleChange}
//             />
//           </div>
//         </div>

//         {/* Question 03 */}
//         <div className={` bg-white font-short-stack py-10 p-6 rounded-3xl shadow-md mb-12  ${borderColor}` }>
//           <div className="mb-4">
//             <label className="block text-xl font-semibold mb-2">
//               {question3}
//             </label>
//             <input
//               type="text"
//               className="w-full px-3 py-2 border rounded-3xl focus:outline-none focus:border-blue-400"
//               placeholder="Type your answer here..."
//               value={formData.question3 || ""}
//               {...register("question3")}
//               onChange={handleChange}
//             />
//           </div>
//         </div>

//         {/* Question 04 */}
//         <div className={` bg-white font-short-stack py-10 p-6 rounded-3xl shadow-md mb-12  ${borderColor}`}>
//           <div className="mb-4">
//             <label className="block text-xl font-semibold mb-2">
//               {question4}
//             </label>
//             <input
//               type="text"
//               className="w-full px-3 py-2 border rounded-3xl focus:outline-none focus:border-blue-400"
//               placeholder="Type your answer here..."
//               value={formData.question4 || ""}
//               {...register("question4")}
//               onChange={handleChange}
//             />
//           </div>
//         </div>

//         {/* Question 05 */}
//         <div className={`py-10 p-6 font-short-stack rounded-3xl shadow-md mb-2 bg-white ${borderColor}`}>
//           <div className="mb-4">
//             <label className="block text-xl font-semibold mb-2">
//               {question5}
//             </label>
//             <div className="flex items-center space-x-8">
//               <label className="flex items-center">
//                 <input
//                   type="radio"
//                   name="favoriteSibling"
//                   value="Yes"
//                   {...register("question5")}
//                   onChange={handleChange}
//                   className="appearance-none h-8 w-8 border border-sky-700 rounded-full checked:bg-sky-500 checked:border-transparent focus:outline-none"
//                 />
//                 <span className="ml-2 text-xl">Yes</span>
//               </label>
//               <label className="flex items-center">
//                 <input
//                   type="radio"
//                   name="favoriteSibling"
//                   value="No"
//                   {...register("question5")}
//                   onChange={handleChange}
//                   className="appearance-none h-8 w-8 border border-gray-700 rounded-full checked:bg-sky-500 checked:border-transparent focus:outline-none"
//                 />
//                 <span className="ml-2 text-xl">No</span>
//               </label>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default FirstPage;



import React from "react";
import { useForm } from "react-hook-form";
import QuestionImageCard from "../QuestionCards/QuestionImageCard";
import { useState } from "react";
import Q1Image1 from "../../../assets/images/Family/Q1/1.png";
import Image from "../../../assets/images/selectionPage/aaa.png";
import HappyImg from "../../../assets/images/Family/Q1/happy family.png"
import SadImg from "../../../assets/images/Family/Q1/sad family.png"
import FrightenedImg from "../../../assets/images/Family/Q1/frightened.png"
import supportiveImg from "../../../assets/images/Family/Q1/supportive family.png"
import unlovedImg from "../../../assets/images/Family/Q1/unloved and not cared.png"
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

const FirstPage = ({ formData, setFormData }) => {
  const { register } = useForm();
  // const color = "bg-gradient-to-br from-sky-300 to-sky-300";
  const color = "bg-white";
  const borderColor = "border-inherit";

  // const question1 = "01. How would you describe how you feel when you spend time with your family?";
  // const answerForQuestion1 = [
  //   { image: HappyImg, text: "happy", caption: "Brings me joy and happiness" },
  //   { image: SadImg, text: "sad", caption: "Makes me feel down or unhappy"},
  //   { image: supportiveImg, text: "loved", caption: "Filled with love and warmth"},
  //   { image: unlovedImg, text: "unloved", caption: "Feel neglected or unloved"},
  //   { image: FrightenedImg, text: "frightened", caption:"Often scared or anxious"},
  // ];

  // const question2 = "02. When something goes wrong at home, how do you usually react?";
  // const question2Answer1 = { text: "happy", score: 2 };
  // const question2Answer2 = { text: "sad", score: 2 };
  // const question2Answer3 = { text: "loved", score: 2 };
  // const question2Answer4 = { text: "unloved", score: 2 };
  // const question2Answer5 = { text: "frightened", score: 2 }; 
  // const question2Part2 = "Do you talk to someone in particular in your family about how you're feeling?"

  // const question3 = "03. When something doesn't go your way at home, what do you usually do?";
  // const question3Answer1 = "2happy";
  // const question3Answer2 = "2sad";
  // const question3Answer3 = "3loved";
  // const question3Answer4 = "3unloved"; 
  // const question3Answer5 = "2frightened"; 


  // const question4 = "04. Are there any times that make you sad within your family? ";
  // const question4Answer1 = "Talk to my family about it";
  // const question4Answer2 = "Feel sad or upset";
  // const question4Answer3 = "Seek comfort from my family";
  // const question4Answer4 = "Keep my feelings to myself"; 
  // const question4Answer5 = "Feel frightened or anxious"; 
  // const question4Answer1 = "i am happy";
  // const question4Answer2 = "no";
  // const question4Part2 = "do you feel sad missing one or both of your parents?";
  // const question5 = "05. Does anyone make you frightend within your family, and why?";
  // const question5Answer1 = "yes i am frightened";
  // const question5Answer2 = "i am happy with my family";
  // const question5Part2 = "why do you feel frightened?";

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const handleAnswerSelect = (questionIndex, answerText) => {
    setSelectedAnswer(answerText);
    const questionKey = `question${questionIndex}`;
    setFormData((prevData) => ({
      ...prevData,
      [questionKey]: answerText,
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
            onAnswerSelect={(answerText) => handleAnswerSelect("1", answerText)}
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
              <MCQs answers={AnswerForQuestion2} question={Question2} regQuestion={"question2"} setFormData={setFormData} />
              {/* <label className="flex items-center mb-2">
                <input
                  type="radio"
                  name="favoriteSibling"
                  value={JSON.stringify(question2Answer1)}
                  {...register("question2")}
                  onChange={handleChange}
                  className="appearance-none h-8 w-8 border border-sky-700 rounded-full checked:bg-sky-500 checked:border-transparent focus:outline-none"
                />
                <span className="ml-2 text-xl">Share my feelings with family</span>
              </label>
            
              <label className="flex items-center mb-2">
                <input
                  type="radio"
                  name="favoriteSibling"
                  value={question2Answer2}
                  {...register("question2")}
                  onChange={handleChange}
                  className="appearance-none h-8 w-8 border border-gray-700 rounded-full checked:bg-sky-500 checked:border-transparent focus:outline-none"
                />
                <span className="ml-2 text-xl">Feel sad or upset about it</span>
              </label>
              <label className="flex items-center mb-2">
                <input
                  type="radio"
                  name="favoriteSibling"
                  value={question2Answer3}
                  {...register("question2")}
                  onChange={handleChange}
                  className="appearance-none h-8 w-8 border border-gray-700 rounded-full checked:bg-sky-500 checked:border-transparent focus:outline-none"
                />
                <span className="ml-2 text-xl">Seek comfort and support from family</span>
              </label>
              <label className="flex items-center mb-2">
                <input
                  type="radio"
                  name="favoriteSibling"
                  value={question2Answer4}
                  {...register("question2")}
                  onChange={handleChange}
                  className="appearance-none h-8 w-8 border border-sky-700 rounded-full checked:bg-sky-500 checked:border-transparent focus:outline-none"
                />
                <span className="ml-2 text-xl">Keep my feelings to myself</span>
              </label>
              <label className="flex items-center mb-2">
                <input
                  type="radio"
                  name="favoriteSibling"
                  value={question2Answer5}
                  {...register("question2")}
                  onChange={handleChange}
                  className="appearance-none h-8 w-8 border border-sky-700 rounded-full checked:bg-sky-500 checked:border-transparent focus:outline-none"
                />
                <span className="ml-2 text-xl">Feel frightened or anxious</span>
              </label> */}
            </div>
          </div>
          {/* {console.log("test1", formData.question2)}
          {console.log("test2", AnswerForQuestion2[1].emotion)} */}
          {formData.question2 == AnswerForQuestion2[1].emotion && (
            <div className="mt-6">
              {/* <label className="block text-xl ml-10 font-semibold mb-2">
                {question2Part2}
              </label>
              <input
                type="text"
                className="w-full px-3  py-2 border rounded-md focus:outline-none focus:border-blue-400"
                placeholder="Do you talk to someone in particular in your family about how you're feeling?"
                value={formData.question2Part2 || ""}
                {...register("question2Part2")}
                onChange={handleChange}
              /> */}

              <MCQs answers={AnswerForQuestion2} question={Question2Part2} regQuestion={"question2Part2"} setFormData={setFormData} />
            </div>
          )}
        </div>

        {/* Question 03 */}
        <div
          className={` bg-white font-short-stack py-10 p-6 rounded-3xl shadow-md mb-12  ${borderColor}`}
        >
          <div className="mb-4">
            {/* <label className="block text-xl font-semibold mb-6">
              {Question3}
            </label> */}
            <div className="flex flex-col ">
              <MCQs answers={AnswerForQuestion3} question={Question3} regQuestion={"question3"} setFormData={setFormData} />
              {/* <label className="flex items-center mb-2">
                <input
                  type="radio"
                  name="favoriteSibling"
                  value={question3Answer1}
                  {...register("question3")}
                  onChange={handleChange}
                  className="appearance-none h-8 w-8 border border-sky-700 rounded-full checked:bg-sky-500 checked:border-transparent focus:outline-none"
                />
                <span className="ml-2 text-xl">Talk to my family about it</span>
              </label>
            
              <label className="flex items-center mb-2">
                <input
                  type="radio"
                  name="favoriteSibling"
                  value={question3Answer2}
                  {...register("question3")}
                  onChange={handleChange}
                  className="appearance-none h-8 w-8 border border-gray-700 rounded-full checked:bg-sky-500 checked:border-transparent focus:outline-none"
                />
                <span className="ml-2 text-xl">Feel sad or upset</span>
              </label>
              <label className="flex items-center mb-2">
                <input
                  type="radio"
                  name="favoriteSibling"
                  value={question3Answer3}
                  {...register("question3")}
                  onChange={handleChange}
                  className="appearance-none h-8 w-8 border border-gray-700 rounded-full checked:bg-sky-500 checked:border-transparent focus:outline-none"
                />
                <span className="ml-2 text-xl">Seek comfort from my family</span>
              </label>
              <label className="flex items-center mb-2">
                <input
                  type="radio"
                  name="favoriteSibling"
                  value={question3Answer4}
                  {...register("question3")}
                  onChange={handleChange}
                  className="appearance-none h-8 w-8 border border-sky-700 rounded-full checked:bg-sky-500 checked:border-transparent focus:outline-none"
                />
                <span className="ml-2 text-xl">Keep my feelings to myself</span>
              </label>
              <label className="flex items-center mb-2">
                <input
                  type="radio"
                  name="favoriteSibling"
                  value={question3Answer5}
                  {...register("question3")}
                  onChange={handleChange}
                  className="appearance-none h-8 w-8 border border-sky-700 rounded-full checked:bg-sky-500 checked:border-transparent focus:outline-none"
                />
                <span className="ml-2 text-xl">Feel frightened or anxious</span>
              </label> */}
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