import React, { useState } from 'react'
import { FaFacebookF, FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa'
function SocialLinks() {

    return (
        <>
            <div className="flex justify-center items-center space-x-4">
                <a href="https://www.facebook.com/hasibbd71/" target="_blank" className="text-fuchsia-700 hover:text-fuchsia-100 bg-slate-100 hover:bg-fuchsia-700  border border-fuchsia-700 rounded-md px-1.5 py-1.5 dark:text-fuchsia-500 dark:bg-slate-900 dark:hover:text-slate-900 dark:hover:bg-fuchsia-600 hover:scale-110  transition duration-300">
                    <FaFacebookF className="w-4 h-4" />
                </a>
                <a href="https://www.linkedin.com/in/hasib7274/" target="_blank" className="text-fuchsia-700 hover:text-fuchsia-100 bg-slate-100 hover:bg-fuchsia-700  border border-fuchsia-700 rounded-md px-1.5 py-1.5 dark:text-fuchsia-500 dark:bg-slate-900 dark:hover:text-slate-900 dark:hover:bg-fuchsia-600 hover:scale-110  transition duration-300">
                    <FaLinkedinIn className="w-4 h-4" />
                </a>
                <a href="https://github.com/hasiboctane/" target="_blank" className="text-fuchsia-700 hover:text-fuchsia-100 bg-slate-100 hover:bg-fuchsia-700  border border-fuchsia-700 rounded-md px-1.5 py-1.5 dark:text-fuchsia-500 dark:bg-slate-900 dark:hover:text-slate-900 dark:hover:bg-fuchsia-600 hover:scale-110  transition duration-300">
                    <FaGithub className="w-4 h-4" />
                </a>
                <a href="mailto:hasibbt7274@gmail.com" target="_blank" className="text-fuchsia-700 hover:text-fuchsia-100 bg-slate-100 hover:bg-fuchsia-700  border border-fuchsia-700 rounded-md px-1.5 py-1.5 dark:text-fuchsia-500 dark:bg-slate-900 dark:hover:text-slate-900 dark:hover:bg-fuchsia-600 hover:scale-110  transition duration-300">
                    <FaEnvelope className='w-4 h-4' />
                </a>

            </div>

        </>
    )
}

export default SocialLinks
