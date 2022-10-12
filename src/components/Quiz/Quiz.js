import React from 'react';
import { useLoaderData } from 'react-router-dom';


const Quiz = () => {
    const quiz = useLoaderData();
    const {questions} = quiz.data;
    console.log(questions)
    return (
        <div>
            {
                
            }
        </div>
    );
};

export default Quiz;