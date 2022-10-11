import React from 'react';

const Answer = ({subject}) => {
    const{name} = subject;
    return (
        <div>
            {name}
        </div>
    );
};

export default Answer;