import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const Statistics = () => {
    const datas = useLoaderData();
    const { data } = datas;

    console.log(data);
    return (
        <div className='flex justify-center mt-4 overflow-x-scroll md:overflow-hidden'>
            <div>
                <Link
                    to='/subjects'
                    className='px-8 py-3 font-semibold rounded bg-cyan-200 text-gray-900'
                >
                    Back To Home
                </Link>
            </div>
            <LineChart width={500} height={400} me='w-32 h-60' data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="total" stroke="#82ca9d" />
            </LineChart>
        </div>
    );
};

export default Statistics;