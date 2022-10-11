import React from 'react';

const Topic = ({topic}) => {
    const {name,logo,total} = topic;
    return (
        <div className='w-60 p-5 border shadow-lg rounded-md bg-slate-400'>
            <img className='w-40' src={logo} alt="" />
            <div className='flex justify-between mt-3'>
                <h5 className='font-bold'>{name}</h5>
                <button className='bg-green-500 text-sm px-4 rounded-lg'>Start Quiz</button>
            </div>
        </div>
    );
};

export default Topic;