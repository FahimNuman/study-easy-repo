import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SubjectBox from './SubjectBox';

const Subjects = () => {
    
    const subjects = useLoaderData();
    const { data } = subjects;
console.log(data)
    
            return  (
                <section>
                    <h2>{data.name}</h2>
                    <div className="grid grid-cols-1 gap-1 w-4/5 mx-auto text-white">
                            <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-red-800">
                                Welcome To Study Easy
                            </h1>
                            <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900">
                                Best E-learning platform for judge your self from This Smart
                                Appliances at extremely free of cost.
                            </p>

                        </div>
                    
                    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
                        <div className='grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8'>

                            {

                                data.map(subject => <SubjectBox key={subject.id} subjects={subject}></SubjectBox>)
                            }
                        </div>
                    </div>
                </section>
           
            )
};

export default Subjects;

