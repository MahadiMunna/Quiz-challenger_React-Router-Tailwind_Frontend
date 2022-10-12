import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';


const Quiz = () => {
    const quiz = useLoaderData();
    const { questions } = quiz.data
    const [correct, setCorrect] = useState(0);
    const correctAns = () => {
        setCorrect(correct + 1)
    }
    const [incorrect, setIncorrect] = useState(0);
    const incorrectAns = () => {
        setIncorrect(incorrect + 1)
    }

    return (
        <div>
            <div className='text-center my-5'>
                <h1 className='text-3xl'>Quiz on <span className='text-orange-500 font-bold'>{quiz.data.name}</span></h1>
                <h3 className='text-green-600 font-bold'>Correct: {correct}</h3>
                <h3 className='text-red-700 font-bold'>Incorrect: {incorrect}</h3>
            </div>
            <div>{
                questions.map(singleQuestion => <Questions key={singleQuestion.id} singleQuestion={singleQuestion} correctAns={correctAns} incorrectAns={incorrectAns}></Questions>)
            }</div>
        </div>
    );
};

export default Quiz;