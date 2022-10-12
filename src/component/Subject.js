import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from './Question';


const Subject = () => {
    
    const subjects = useLoaderData();
    const { data } = subjects;
    const { questions } = data;
    
   
    return (
        <div>
            
            <div>
                <header class="text-5xl text-center mt-4">Welcom to
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