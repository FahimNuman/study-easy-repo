import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Options = ({ option, question, trueFalseCheck }) => {
    
    
    return (
        <div>
            <div>
                <input type="radio" value={option} name={question} onClick={() => trueFalseCheck(option)} />{option}
                
            </div>
            <ToastContainer />
        </div>
    );
};

export default Options;