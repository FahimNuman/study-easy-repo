import React from 'react';


const Answer = ({ subjects }) => {
    
    const { data } = subjects;
    const { questions } = data;
    
    return (
        <div>
            {questions.correctAnswer}
        </div>
    );
};

export default Answer;