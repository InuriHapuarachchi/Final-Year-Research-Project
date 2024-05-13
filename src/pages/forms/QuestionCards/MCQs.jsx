import React from 'react';
import { useForm } from "react-hook-form";
import { useState } from 'react';

const MCQs = ({ question, answers, regQuestion, nselectedAnswer, onAnswerSelect, setFormData, color, borderColor }) => {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [textInputValue, setTextInputValue] = useState('');
    const { register } = useForm();
    { console.log('test2', nselectedAnswer) }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleRadioChange = (event) => {
        const value = event.target.value;
        setSelectedAnswer(value === selectedAnswer ? null : value);
    };

    const handleTextInputChange = (event) => {
        setTextInputValue(event.target.value);
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

            <input
                type="text"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
                placeholder="Why do you think so?"
                value={nselectedAnswer}
                {...register(regQuestion)}
                onChange={handleChange}
            />

        </div>
    );
};

export default MCQs;
