import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const topics = useLoaderData();
    const {name,total} = topics.data;
    console.log(topics)
    return (
        <LineChart width={500} height={400} data={topics}>
            <Line type="monotone" dataKey="marks" stroke="#82ca9d" />
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip/>
        </LineChart>
    );
};

export default Statistics;