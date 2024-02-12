import React from 'react';

const HeroSection = () => {
    return (
        <div className="flex flex-col items-center justify-center py-16">
            <div className="text-center">
                <h1 className="text-2xl md:text-4xl text-purple-700 font-medium mb-1 md:mb-3">Hi, I am Hasib</h1>
                <p className="text-md md:text-xl max-w-md mb-5 text-gray-700 dark:text-gray-300">I am a fullstack web developer.</p>
                <a href="#" className="bg-purple-600 px-7 py-3 text-base border border-transparent font-medium rounded-md text-white hover:bg-purple-700 md:text-md">
                    See Works
                </a>
            </div>
        </div>
    );
}

export default HeroSection;