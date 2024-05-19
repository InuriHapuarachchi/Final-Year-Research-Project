import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { getEmotionValue } from "../../../emotions";

const MCQs = ({
  question,
  answers,
  regQuestion,
  nselectedAnswer,
  onAnswerSelect,
  setFormData,
  color,
  borderColor,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [textInputValue, setTextInputValue] = useState("");
  const [radioOn, setRadio] = useState(true);
  const { register } = useForm();

  const handleChange = (e, ans, from_radio = false, question) => {
    const { name, value } = e.target;
    if (name == value) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: null,
      }));
    }
    // console.log(getEmotionValue, "=pp========")
    setFormData((prevData) => ({
      ...prevData,
      [name]: from_radio ? [question, ans, getEmotionValue(value)] : [question, value],
    }));
  };

  const handleRadioChange = (event) => {
    const value = event.target.value;
    setSelectedAnswer(value === selectedAnswer ? null : value);
  };

  const handleTextInputChange = (event) => {
    setTextInputValue(event.target.value);
  };

  const turnOnText = (question) => {
    console.log("turn on text");
    setFormData((prevData) => ({
      ...prevData,
      [question]: null,
    }));
    console.log("test2", question);
    setRadio(false);
  };
  const turnOnRadio = () => {
    console.log("turn on radio");
    setRadio(true);
  };

  return (
    <div>
      <label className="block text-xl font-semibold mb-2">{question}</label>
      <div>
        {answers.map((answer, index) => (
          // <div key={index} onClick={() => handleClick(answer.text)} className={`cursor-pointer p-2 ${selectedAnswer === answer.text ? 'bg-sky-500' : 'bg-white'} rounded-md border border-gray-300`}>
          <div onClick={turnOnRadio} key={index}>
            <label className={`flex items-center mb-2 flex items-center mb-2 `}>
              <input
                type="radio"
                name="favoriteSibling"
                value={answer.emotion}
                {...register(regQuestion)}
                onChange={(e) => handleChange(e, answer.text, true, question)}
                className={`appearance-none h-8 w-8 border  rounded-full  ${
                  radioOn
                    ? "border-sky-700 checked:bg-sky-500"
                    : "border-gray-300 checked:border-gray-300"
                }  checked:border-transparent focus:outline-none`}
                disabled={!radioOn}
              />
              <span
                className={`ml-2 text-xl ${
                  radioOn ? "text-black" : "text-gray-300"
                }`}
              >
                {answer.text}
              </span>
            </label>
          </div>
        ))}
      </div>

      {!radioOn ? (
        <input
          type="text"
          className={`w-full px-3 ${
            !radioOn ? "text-black" : "text-red-300"
          } py-2 border rounded-md focus:outline-none focus:border-blue-400`}
          placeholder="Why do you think so?"
          value={nselectedAnswer}
          {...register(regQuestion)}
          onChange={(e) => handleChange(e, "", false, question)}
          disabled={radioOn}
        />
      ) : (
        <input
          type="text"
          value={""}
          className="w-full px-3 py-2 text-gray-400 border rounded-md focus:outline-none focus:border-blue-400"
          placeholder="Why do you think so?"
          onClick={() => turnOnText(regQuestion)}
        />
      )}
    </div>
  );
};

export default MCQs;
