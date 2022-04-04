import React from 'react';
import { Pie, PieChart, Tooltip } from 'recharts';
import './NewPieChart.css';

const NewPieChart = ({ data }) => {
    return (
        <div className='chart'>
            <PieChart width={400} height={250}>
                <Pie data={data} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                <Pie data={data} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                <Tooltip></Tooltip>
            </PieChart>
            <h4>Investment vs Revenue</h4>
        </div>
    );
};

export default NewPieChart;