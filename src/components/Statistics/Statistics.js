import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {
    ResponsiveContainer,
    ComposedChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";

const Statistics = () => {
    const topics = useLoaderData();
    console.log(topics)
    return (
        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <ComposedChart
              width={500}
              height={400}
              data={topics.data}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20
              }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="name" scale="band" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="total" stroke="#413ea0" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      );
};

export default Statistics;