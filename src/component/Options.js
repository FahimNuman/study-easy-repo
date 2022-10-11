import React from 'react';

const Options = ({ option }) => {
    
    
    return (
        <div>
            <div>
                <input type="radio" value="Male" name="gender" /> {option}
                
            </div>
        </div>
    );
};

export default Options;