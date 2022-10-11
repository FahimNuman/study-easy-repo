import React from 'react';

import Options from './Options';



const Question = ({ subjects }) => {
    
    
    const {  question,options} = subjects;
    

    console.log(subjects)
    

    
    return (
        
        <div>
            
                
                    
            <section class="mt-12">
                <div class="grid grid-cols-2 gap-4 w-9/12 mx-auto ">
                    <div class="bg-green-400 p-8 rounded-xl">
                        
                        <div>
                            <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">{question}</p>
                            {
                                options.map(option => <Options option={option}></Options>)
                            }
                        </div>

                    </div>
                   


                </div>
            </section>
                   


                
         
           
        </div>
    );
};

export default Question;