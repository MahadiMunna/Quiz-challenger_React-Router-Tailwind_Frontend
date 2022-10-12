import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({topic}) => {
    const {name,logo,total,id} = topic;
    return (
        <div className='w-64 p-5 border shadow-lg rounded-md bg-slate-400 items-center'>
            <img className='w-50' src={logo} alt="" />
            <div className='flex justify-between mt-3'>
                <h5 className='font-bold'>{name}</h5>
                <p>{total}</p>
                <button className='bg-orange-400 text-sm px-3 rounded-lg hover:bg-orange-300 font-semibold text-purple-800'><Link to={`/quiz/${id}`}>Start Quiz<FontAwesomeIcon className='ml-2' icon={faArrowRight}></FontAwesomeIcon></Link></button>
            </div>
        </div>
    );
};

export default Topic;