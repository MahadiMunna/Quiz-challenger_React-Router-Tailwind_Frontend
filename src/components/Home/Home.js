import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Home.css'

const Home = () => {
    const topics = useLoaderData();
    return (
        <div>
            <div className='banner pt-20'>
                <h1 className='text-5xl text-orange-500 text-center font-extrabold'>Welcome Challenger!</h1>
                <p className='text-slate-800 text-center text-2xl font-extrabold mt-10'>Select your quiz topic and start quiz now. let's start!</p>

            </div>
            <div className='ml-5 md:ml-9 my-12 grid lg:grid-cols-4 md:grid-cols-2 gap-2'>
                {
                    topics.data.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
                }
            </div>
        </div>
    );
};

export default Home;