import React from 'react'
import projects from '../data/projects'
import SectionTitle from './SectionTitle'

const ProjectSection = () => {
    return (
        <>
            <div id="projects" className="pt-20 pb-12  shadow-md 
            ">
                <SectionTitle>
                    Projects I have done
                </SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-5">
                    {
                        projects.map(project => (
                            <div key={project.id} className='flex flex-col bg-slate-300 dark:bg-slate-900 rounded-md hover:scale-105 transition duration-500'>
                                <div className=' '>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className='w-full h-72 object-cover rounded-t-md' />
                                </div>
                                <div className='px-2.5 py-1.5 h-[40%] flex flex-col justify-between '>
                                    <div className='mb-2'>
                                        <h1 className='dark:text-slate-50 text-lg font-semibold mb-1'>{project.title}</h1>
                                        <p className='dark:text-slate-100 text-sm '>{project.description}</p>
                                    </div>
                                    <div className='pb-2 flex items-center justify-between  '>
                                        <a href="#" className='px-2.5 py-1 border text-fuchsia-600 border-fuchsia-500 rounded-md dark:text-fuchsia-400 text-sm hover:dark:bg-fuchsia-800 hover:dark:text-slate-50'>
                                            Github
                                        </a>
                                        <a href="#" className='px-2.5 py-1 border text-fuchsia-600 border-fuchsia-500 rounded-md dark:text-fuchsia-400 text-sm
                                        hover:dark:bg-fuchsia-800 hover:dark:text-slate-50 '>
                                            See more
                                        </a>
                                    </div>
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default ProjectSection
