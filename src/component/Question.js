import React from 'react';

import 'react-toastify/dist/ReactToastify.css';
import { EyeIcon } from '@heroicons/react/24/solid'
import { toast, ToastContainer } from 'react-toastify';

import Options from './Options';




const Question = ({ subjects }) => {
    
    
    const { question, options, correctAnswer } = subjects;
    

    console.log(subjects.correctAnswer)
    
    const showCorrect = (ans) => {

        toast.success('correct ans: ' + ans, {
            position: toast.POSITION.TOP_CENTER
        });
    }
    const trueFalseCheck = (optionCheck) => {

        if (optionCheck === correctAnswer) {
            toast.success('True', {
                position: toast.POSITION.TOP_CENTER
            });

        }
        else {
            toast.success('False', {
                position: toast.POSITION.TOP_CENTER
            });
        }

    }
    
    return (
        
        <div>
            
                
                    
            <section className='mt-12'>
                
                <div class="grid grid-cols-1 gap-9 w-9/12 mx-auto ">
                    <div class="bg-green-400 p-8 rounded-xl">
                        
                        <div>
                            <button onClick={() => showCorrect(correctAnswer)}>
                                <EyeIcon className="h-6 w-6 text-blue-500" />
                            </button>


                                     <p className="p-2 text-sm font-medium tracking-wider text-center uppercase ">
                                <div dangerouslySetInnerHTML={{ __html: question }}>
                                    </div>
                                    </p>
                            {


                                options.map(option => <Options question={question} trueFalseCheck={trueFalseCheck} option={option}>

                                </Options>)
                            }
                        </div>

                    </div>
                   
                
                <ToastContainer />
        


                </div>
            </section>
                   


                
         
           
        </div>
    );
};

export default Question;