import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Questions = ({ singleQuestion, correctAns, incorrectAns }) => {
    const { question, correctAnswer, options } = singleQuestion;

    const check = e => {
        const { value, name } = e.target;
        if (value === name) {
            toast("Correct!")
            correctAns()
        }
        else {
            toast("Incorrect")
            incorrectAns()
        }
    }
    const showAnswer = () => {
        toast(`Correct answer is ${correctAnswer}`)
    }
    return (
        <div className='bg-slate-300 mb-4 mx-5 md:mx-20 px-10 py-5 rounded-md shadow-lg'>
            <div className='flex justify-between pt-3 mb-5'>
                <h4 className='text-xl font-bold'>{question}</h4>
                <FontAwesomeIcon className='text-slate-700' icon={faEye} onClick={showAnswer}></FontAwesomeIcon>
            </div>

            <div>
                <div className='mb-2'>
                    <input type="radio" id={options[0]} value={options[0]} name={correctAnswer} onChange={check} />
                    <label htmlFor=""><span className='ml-2'>{options[0]}</span></label>

                </div>

                <div className='mb-2'>
                    <input type="radio" id={options[1]} value={options[1]} name={correctAnswer} onChange={check} />
                    <label htmlFor=""><span className='ml-2'>{options[1]}</span></label>
                </div>
                <div className='mb-2'>
                    <input type="radio" id={options[2]} value={options[2]} name={correctAnswer} onChange={check} />
                    <label htmlFor=""><span className='ml-2'>{options[2]}</span></label>
                </div>
                <div className='mb-2'>
                    <input type="radio" id={options[3]} value={options[3]} name={correctAnswer} onChange={check} />
                    <label htmlFor=""><span className='ml-2'>{options[3]}</span></label>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Questions;