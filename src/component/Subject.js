import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Question from './Question';


const Subject = () => {
    
    const subjects = useLoaderData();
    const { data } = subjects;
    const { questions } = data;
    
   
    return (
        <div>
            <Link
                to='/subjects'
                className='px-8 py-3 font-semibold rounded bg-cyan-200 text-gray-900'
            >
                Back To Home
            </Link>
            <div>
                <header class="text-5xl text-center mt-4">
                    
                    <span class="text-red-500 font-medium" id="wlcm-1"><h2>{data.name}</h2> Quiz Test</span>

                   
                </header>
            </div>
            {
                questions.map(subject=><Question key={subject.id} subjects={subject} ></Question>)
            }
        </div>
    );
};

export default Subject;