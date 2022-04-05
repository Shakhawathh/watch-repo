import React from 'react';
import { LineChart, Line, YAxis, XAxis, Tooltip, AreaChart, Area } from 'recharts';

const Rechart = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 10000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 20000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 50000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 50000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 60000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 70000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <div>
            <LineChart width={600} height={400} data={data}>
                <Line dataKey="revenue" stroke="#8884d8"></Line>
                <XAxis dataKey="month"></XAxis>
                <YAxis dataKey="investment"></YAxis>
                <Tooltip></Tooltip>
            </LineChart>

            <AreaChart width={600} height={420} data={data}>
                <Area dataKey="revenue"></Area>
                <XAxis dataKey="month" />
                <YAxis dataKey="revenue" />
                <Tooltip />
            </AreaChart>
        </div>

    );
};

export default Rechart;