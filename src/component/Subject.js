import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from './Question';


const Subject = () => {
    
    const subjects = useLoaderData();
    const { data } = subjects;
    const { questions } = data;
    console.log(questions);
    
   
    return (
        <div>
            {
                questions.map(subject=><Question key={subject.id} subjects={subject} ></Question>)
            }
        </div>
    );
};

export default Subject;