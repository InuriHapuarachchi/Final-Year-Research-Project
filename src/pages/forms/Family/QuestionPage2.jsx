// // SecondPage.jsx
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";

// const SecondPage = ({ formData, setFormData }) => {
//   const { register } = useForm();
//   const color = "bg-gradient-to-br from-sky-200 to-sky-200";
//   const borderColor = "border-sky-300"
//   const [expand, setExpand] = useState(false)

//   const question6 = "06. Does your family fight all the time";
//   const question7 = "07. Does your family spend time together? (Going on trips, Having meals together, Looking after each other etc)";
//   const question8 = "08. Do you think your family loves and care for you?";

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
//         {/* Question 06 */}
//         <div className={`bg-white py-10 font-short-stack p-6 rounded-3xl shadow-md mb-12 ${borderColor}` }>
//           <div className="mb-4">
//             <label className="block text-xl font-semibold mb-2">
//               {question6}
//             </label>
//             <input
//               type="text"
//               className="w-full  px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
//               placeholder="Type your answer here..."
//               value={formData.question6 || ""}
//               {...register("question6")}
//               onChange={handleChange}
//             />
//           </div>
//         </div>

//         {/* Question 07 */}
//         <div className={` bg-white py-10 font-short-stack p-6 rounded-3xl shadow-md mb-12  ${borderColor}` }>
//           <div className="mb-4">
//             <label className="block text-xl font-semibold mb-2">
//               {question7}
//             </label>
//             <div className="flex items-center space-x-8">
//               <label className="flex items-center">
//                 <input
//                   type="radio"
//                   name="bothParents"
//                   value="Yes"
//                   {...register("question7")}
//                   onChange={handleChange}
//                   className="appearance-none h-8 w-8 border border-gray-700 rounded-full checked:bg-gray-500 checked:border-transparent focus:outline-none"
//                 />
//                 <span className="ml-2 text-lg">Yes</span>
//               </label>
//               <label className="flex items-center">
//                 <input
//                   type="radio"
//                   name="bothParents"
//                   value="No"
//                   {...register("question7")}
//                   onChange={handleChange}
//                   className="appearance-none h-8 w-8 border border-gray-700 rounded-full checked:bg-gray-500 checked:border-transparent focus:outline-none"
//                 />
//                 <span className="ml-2 text-lg">No</span>
//               </label>
//             </div>
//           </div>
//         </div>

//         {/* Question 08 */}
//         <div className={`bg-white py-10 p-6 font-short-stack rounded-3xl shadow-md mb-12 ${borderColor}` }>
//           <div className="mb-4">
//             <label className="block text-xl font-semibold mb-2">
//               {question8}
//             </label>
//             <div className="flex items-center space-x-8">
//               <label className="flex items-center">
//                 <input
//                   type="radio"
//                   name="bothParents"
//                   value="Yes"
//                   {...register("question8")}
//                   onChange={handleChange}
//                   className="appearance-none h-8 w-8 border border-gray-700 rounded-full checked:bg-gray-500 checked:border-transparent focus:outline-none"
//                 />
//                 <span className="ml-2 text-lg">Yes</span>
//               </label>
//               <label className="flex items-center">
//                 <input
//                   type="radio"
//                   name="bothParents"
//                   value="No"
//                   {...register("question8")}
//                   onChange={handleChange}
//                   className="appearance-none h-8 w-8 border border-gray-700 rounded-full checked:bg-gray-500 checked:border-transparent focus:outline-none"
//                 />
//                 <span className="ml-2 text-lg">No</span>
//               </label>
              
//             </div>
//           </div>
//           {formData.question8 == 'No' && 
//           <input
//               type="text"
//               className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
//               placeholder="Why do you think so?"
//               value={formData.question8Part2 || ""}
//               {...register("question8Part2")}
//               onChange={handleChange}
//            />
//            }
//         </div>
//       </form>
//     </div>
//   );
// };

// export default SecondPage;


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
 
  // const question6 = "06. Does your family support you in your work?And how do they do so?";
  // const question6Answer1 = "i am sad/frightened because my family fights all the time"
  // const question6Answer2 = "i am happy with my family"
  // const question7 = "07. Does your family spend time together?what activities do you do?(Going on trips, Having meals together, Looking after each other etc) ";
  // const question7Answer1 = "i have a happy family"
  // const question7Answer2 = "i have a sad family"
  // const question8 = "08. Do you think your family loves and care for you?why do you think so?";
  // const question8Answer1 = "my family loves and care for me"
  // const question8Answer2 = "my family doesnt love me and care for me"
  // const question8Part2 = "Why do you think so?"
 
 
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
        {/* Question 06 */}
        {/* <div
          className={`bg-white py-10 font-short-stack p-6 rounded-3xl shadow-md mb-12 ${borderColor}`}
        >
          <div className="mb-4">
            <label className="block text-xl font-semibold mb-2">
              {question6}
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-3xl focus:outline-none focus:border-blue-400"
              placeholder="Type your answer here..."
              value={formData.question6 || ""}
              {...register("question6")}
              onChange={handleChange}
            /> */}
            {/* <div className="flex items-center space-x-8">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="bothParents"
                  value={question6Answer1}
                  {...register("question6")}
                  onChange={handleChange}
                  className="appearance-none h-8 w-8 border border-gray-700 rounded-full checked:bg-sky-500 checked:border-transparent focus:outline-none"
                />
                <span className="ml-2 text-lg">Yes</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="bothParents"
                  value={question6Answer2}
                  {...register("question6")}
                  onChange={handleChange}
                  className="appearance-none h-8 w-8 border border-gray-700 rounded-full checked:bg-sky-500 checked:border-transparent focus:outline-none"
                />
                <span className="ml-2 text-lg">No</span>
              </label>
            </div> */}
          {/* </div>
        </div>
  */}
        {/* Question 07 */}
        {/* <div
          className={` bg-white py-10 font-short-stack p-6 rounded-3xl shadow-md mb-12  ${borderColor}`}
        >
          <div className="mb-4">
            <label className="block text-xl font-semibold mb-2">
              {question7}
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-3xl focus:outline-none focus:border-blue-400"
              placeholder="Type your answer here..."
              value={formData.question7 || ""}
              {...register("question7")}
              onChange={handleChange}
            /> */}
            {/* <div className="flex items-center space-x-8">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="bothParents"
                  value={question7Answer1}
                  {...register("question7")}
                  onChange={handleChange}
                  className="appearance-none h-8 w-8 border border-gray-700 rounded-full checked:bg-sky-500 checked:border-transparent focus:outline-none"
                />
                <span className="ml-2 text-lg">Yes</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="bothParents"
                  value={question7Answer2}
                  {...register("question7")}
                  onChange={handleChange}
                  className="appearance-none h-8 w-8 border border-gray-700 rounded-full checked:bg-sky-500 checked:border-transparent focus:outline-none"
                />
                <span className="ml-2 text-lg">No</span>
              </label>
            </div> */}
          {/* </div>
        </div> */}
 
        {/* Question 08 */}
        {/* <div
          className={`bg-white py-10 p-6 font-short-stack rounded-3xl shadow-md mb-12 ${borderColor}`}
        >
          <div className="mb-4">
            <label className="block text-xl font-semibold mb-2">
              {question8}
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-3xl focus:outline-none focus:border-blue-400"
              placeholder="Type your answer here..."
              value={formData.question8 || ""}
              {...register("question8")}
              onChange={handleChange}
            /> */}
            {/* <div className="flex items-center space-x-8">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="bothParents"
                  value={question8Answer1}
                  {...register("question8")}
                  onChange={handleChange}
                  className="appearance-none h-8 w-8 border border-gray-700 rounded-full checked:bg-sky-500 checked:border-transparent focus:outline-none"
                />
                <span className="ml-2 text-lg">Yes</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="bothParents"
                  value={question8Answer2}
                  {...register("question8")}
                  onChange={handleChange}
                  className="appearance-none h-8 w-8 border border-gray-700 rounded-full checked:bg-sky-500 checked:border-transparent focus:outline-none"
                />
                <span className="ml-2 text-lg">No</span>
              </label>
            </div> */}
          {/* </div> */}
          {/* {formData.question8 == question8Answer2 && (
            <div>
              <label className="block text-xl ml-10 font-semibold mb-2">
                {question8Part2}
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
                placeholder="Why do you think so?"
                value={formData.question8Part2 || ""}
                {...register("question8Part2")}
                onChange={handleChange}
              />
            </div>
          )} */}
        {/* </div> */}

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



        {/* Question 10 */}
        {/* <div
          className={`py-10 p-6 font-short-stack rounded-3xl shadow-md mb-2 bg-white ${borderColor}`}>
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
        </div> */}



      </form>
    </div>
  );
};
 
export default SecondPage;
 