import React from 'react';
import { useForm } from "react-hook-form";

const MCQs = ({ question, answers, regQuestion, selectedAnswer, onAnswerSelect, setFormData, color, borderColor }) => {
    const { register } = useForm();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    // const handleClick = (answerText) => {
    //     onAnswerSelect(answerText);
    // };

    return (
        <div>
              <label className="block text-xl font-semibold mb-2">
                {question}
              </label>
            {answers.map((answer, index) => (
                // <div key={index} onClick={() => handleClick(answer.text)} className={`cursor-pointer p-2 ${selectedAnswer === answer.text ? 'bg-sky-500' : 'bg-white'} rounded-md border border-gray-300`}>
                <div key={index}>
                    <label className="flex items-center mb-2">
                        <input
                            type="radio"
                            name="favoriteSibling"
                            value={answer.emotion}
                            {...register(regQuestion)}
                            onChange={handleChange}
                            className="appearance-none h-8 w-8 border border-sky-700 rounded-full checked:bg-sky-500 checked:border-transparent focus:outline-none"
                        />
                        <span className="ml-2 text-xl">{answer.text}</span>
                    </label>

                </div>
            ))}
        </div>
    );
};

export default MCQs;
