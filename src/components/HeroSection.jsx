import React from 'react';
import SocialLinks from './SocialLinks';
const HeroSection = () => {
    return (
        <>
            <div id="hero" className="flex flex-col md:flex-row items-center justify-center gap-10 py-14 md:py-16 mb-10 shadow-md px-2 mt-6 md:mt-10 ">
                <div className=" flex flex-col items-center justify-between pb-4 md:pr-10 md:w-[50%] h-full  ">
                    <h2 className="text-3xl md:text-4xl text-fuchsia-800 font-medium mb-2 md:mb-4 dark:text-fuchsia-600">Hi, I am Hasib</h2>
                    <p className="text-lg md:text-xl max-w-md mb-6 md:mb-8 text-slate-800 dark:text-fuchsia-200">I am a fullstack web developer.</p>
                    <SocialLinks />
                </div>
                <div className=' flex justify-end md:w-[50%] '>
                    <img src="/images/coding.png" alt="hasib octane" className=" md:w-3/4 object-center rounded-lg" />
                </div>
            </div>
        </>
    );
}

export default HeroSection;