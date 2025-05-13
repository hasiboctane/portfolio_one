import React from 'react';
import SectionTitle from "./SectionTitle.jsx";
import services from "../data/services.jsx";
import ServiceItem from "./ServiceItem.jsx";
import phpImage from "../assets/images/php.png";
import laravelImage from "../assets/images/laravel.png";
import jqueryImage from "../assets/images/jquery.png";
import tailwindImage from "../assets/images/tailwind.png";
import bootstrapImage from "../assets/images/bootstrap.png";
import reactImage from "../assets/images/reatcjs.png";
import wpImage from "../assets/images/wp.png";
const Services = () => {
    return (

        <div id="services" className="pt-20 pb-14  ">
            <SectionTitle>
                My Skills
            </SectionTitle>

            <div className=" mt-4 flex flex-wrap gap-3 justify-center items-center">
                <div className='px-1 py-2 bg-slate-300 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-slate-700 hover:scale-110 transform transition duration-300 rounded-md '>
                    <img src={phpImage} alt="PHP" className='h-12 w-32  object-contain' />
                </div>
                <div className='px-1 py-2 bg-slate-300 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-slate-700 hover:scale-110 transform transition duration-300 rounded-md '>
                    <img src={laravelImage} alt="PHP" className='h-12 w-32  object-contain' />
                </div>
                <div className='px-1 py-2 bg-slate-300 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-slate-700 hover:scale-110 transform transition duration-300 rounded-md '>
                    <img src={jqueryImage} alt="PHP" className='h-12 w-32  object-contain' />
                </div>
                <div className='px-1 py-2 bg-slate-300 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-slate-700 hover:scale-110 transform transition duration-300 rounded-md '>
                    <img src={reactImage} alt="PHP" className='h-12 w-32 object-contain' />
                </div>
                <div className='px-1 py-2 bg-slate-300 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-slate-700 hover:scale-110 transform transition duration-300 rounded-md '>
                    <img src={tailwindImage} alt="PHP" className='h-12 w-32  object-contain' />
                </div>
                <div className='px-1 py-2 bg-slate-300 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-slate-700 hover:scale-110 transform transition duration-300 rounded-md '>
                    <img src={bootstrapImage} alt="PHP" className='h-12 w-32  object-contain' />
                </div>
                <div className='px-1 py-2 bg-slate-300 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-slate-700 hover:scale-110 transform transition duration-300 rounded-md '>
                    <img src={wpImage} alt="PHP" className='h-12 w-32 object-contain' />
                </div>

            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5">
                {
                    services.map(service => (
                        <ServiceItem
                            key={service.title}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                        />
                    ))
                }
            </div>
        </div>

    );
}

export default Services;