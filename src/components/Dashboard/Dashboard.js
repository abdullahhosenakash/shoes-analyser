import React from 'react';
import useData from '../../hooks/useData';
import NewBarChart from '../Charts/NewBarChart/NewBarChart';
import NewAreaChart from '../Charts/NewAreaChart/NewAreaChart';
import NewLineChart from '../Charts/NewLineChart/NewLineChart';
import './Dashboard.css';
import NewPieChart from '../Charts/NewPieChart/NewPieChart';

const Dashboard = () => {
    const [data] = useData();
    console.log(data)
    return (
        <div>
            <h1>This is Dashboard</h1>
            <div className='charts'>
                <NewLineChart data={data}></NewLineChart>
                <NewAreaChart data={data}></NewAreaChart>
                <NewBarChart data={data}></NewBarChart>
                <NewPieChart data={data}></NewPieChart>
            </div>
        </div>
    );
};

export default Dashboard;