import React from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

const ShoesAreaChart = ({ data }) => {
    return (
        <div className='chart'>
            <AreaChart
                className='area-chart'
                width={300}
                height={250}
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="investment" stackId="1" stroke="#7d77eb" fill="#8884d8" />
                <Area type="monotone" dataKey="revenue" stackId="1" stroke="#7d77eb" fill="#82ca9d" />
            </AreaChart>
            <h4>Investment vs Revenue</h4>
        </div>
    );
};

export default ShoesAreaChart;