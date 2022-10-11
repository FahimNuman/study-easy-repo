import React from 'react';
import Options from './Options';



const Question = ({ subjects }) => {
    const { id,correctAnswer ,question} = subjects;
    console.log(question);
    
    return (
        <div>
            <section class="mt-8">
                <div class="grid grid-cols-3 gap-4 w-3/4 mx-auto text-white">
                    <div class="bg-yellow-400 p-8 rounded-lg">
                        <h4 class="text-3xl">{question}</h4>
                        <h2 class="text-5xl font-medium">$<span id="deposite-total">00</span></h2>
                    </div>
                    {
                        subjects.map(question=><Options></Options>)
                    }
                    <div class="bg-green-300 p-8 rounded-lg">
                        <h4 class="text-3xl">{correctAnswer}</h4>
                        <h2 class="text-5xl font-medium">$<span id="withdraw-total">00</span></h2>
                    </div>
                    <div class="bg-red-400 p-8 rounded-lg">
                        <h4 class="text-3xl">{id}</h4>
                        <h2 class="text-5xl font-medium">$<span id="balance-total">00</span></h2>
                    </div>


                </div>
            </section>
           
        </div>
    );
};

export default Question;