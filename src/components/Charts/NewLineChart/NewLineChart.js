import React from 'react';
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const ShoesLineChart = ({ data }) => {
    return (
        <div className='chart'>
            <LineChart
                width={300}
                height={250}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="sell" stroke="#7d77eb" />
            </LineChart>
            <h4>Investment vs Revenue</h4>
        </div>
    );
};

export default ShoesLineChart;