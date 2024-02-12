import React from 'react';

const HeroSection = () => {
    return (
        <div id="hero" className="flex flex-col items-center justify-center pt-16 pb-10">
            <div className="text-center">
                <h1 className="text-2xl md:text-4xl text-fuchsia-800 font-medium mb-1 md:mb-3 dark:text-fuchsia-600">Hi, I am Hasib</h1>
                <p className="text-md md:text-xl max-w-md mb-5 text-gray-700 dark:text-fuchsia-100">I am a fullstack web developer.</p>
                <a href={"https://github.com/hasiboctane"} target="_blank" className="inline-block mt-5 bg-fuchsia-700 dark:bg-fuchsia-700 px-7 py-2 text-base border border-transparent font-medium rounded-md text-white hover:bg-fuchsia-800 dark:hover:bg-fuchsia-500 md:text-md">
                    Github
                </a>
            </div>
        </div>
    );
}

export default HeroSection;