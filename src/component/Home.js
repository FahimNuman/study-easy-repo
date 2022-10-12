import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from "../assets/study.jpg";
const Home = () => {
    return (
        <section>
            <div className="bg-gray-100">
                <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-Green-800">
                        Welcome To Study Easy
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-Green-900">
                        Best E-learning platform for judge your self from This Smart
                        Appliances at extremely free of cost.
                    </p>
                    <div className="flex flex-wrap justify-center">
                        
                        <Link to="/subjects">
                            <button
                                type="button"
                                className="px-8 py-3 m-2 text-lg font-semibold rounded-full  text-gray-900 hover:bg-cyan-400 bg-cyan-200"
                            >
                                Go To Virtual ExamRoom
                            </button>
                        </Link>
                        <Link to="/blog">
                            <button
                                type="button"
                                className="px-8 py-3 m-2 text-lg border rounded-full border-cyan-400 text-gray-900"
                            >
                                Read Blog
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <img
                src={heroImg}
                alt=""
                className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 bg-green-500"
            />
        </section>
    );
};

export default Home;