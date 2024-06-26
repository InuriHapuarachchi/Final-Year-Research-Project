import React from 'react';

const QuestionImageCard = ({ question, answers, selectedAnswer, onAnswerSelect, setFormData, color, borderColor }) => {

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleClick = (answerText) => {
    onAnswerSelect(answerText);
  };

  return (
    <div className={` ${color} p-6 rounded-3xl shadow-md  ${borderColor}`}>
      <h3 className="text-xl font-semibold">{question}</h3>
      <div className="mt-4 grid grid-cols-3 gap-4">
        {answers.map((answer, index) => (
          <div key={index} onClick={() => handleClick(answer.text)} className={`cursor-pointer p-2 ${selectedAnswer === answer.text ? 'bg-sky-500' : 'bg-white'} rounded-md border border-gray-300`}>

            <div className='flex justify-center item-center'>
              <img src={answer.image} alt={answer.text} className="w-2/3 h-full object-cover rounded-md" />
              
            </div>
            <div className='flex justify-center item-center'>

                <p>{answer.caption}</p>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionImageCard;
