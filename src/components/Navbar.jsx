import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [activeItem, setActiveItem] = useState('Home')
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const menuItems = [
        { name: 'Home', href: '#', onClick: () => setActiveItem('Home') },
        { name: 'About', href: '#about', onClick: () => setActiveItem('About') },
        { name: 'Projects', href: '#projects', onClick: () => setActiveItem('Projects') },
        { name: 'Services', href: '#services', onClick: () => setActiveItem('Services') }
    ]

    return (
        <nav className="w-full bg-transparent">
            <div className=" ">
                <div className="flex items-center justify-end h-14">
                    <div className="hidden md:block">
                        <div className="flex items-baseline space-x-3">
                            {menuItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={item.onClick}
                                    className={`text-fuchsia-700 hover:bg-fuchsia-700 hover:text-slate-50 dark:hover:bg-opacity-60 dark:hover:text-fuchsia-200  px-2 py-1 rounded-md font-semibold hover:-translate-y-1 transition duration-300 ease-in-out border border-fuchsia-700 ${activeItem === item.name ? 'bg-fuchsia-700 bg-opacity-85 dark:bg-opacity-70 text-slate-50 dark:text-fuchsia-200' : ''
                                        }`}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center px-1.5 py-1.5  rounded-md text-fuchsia-700 border border-fuchsia-700 hover:text-fuchsia-200 hover:bg-fuchsia-700  transition duration-300 ease-in-out"
                        >
                            {isOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden relative z-10 ">
                    <div className="px-4 py-3 space-y-2  absolute top-0 right-0 bg-slate-800 bg-opacity-85 rounded-md">
                        {menuItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => {
                                    item.onClick();
                                    toggleMenu();
                                }}
                                className={`text-center text-fuchsia-600 hover:bg-fuchsia-700 hover:bg-opacity-40 hover:text-fuchsia-200 block px-2 py-1.5 rounded-md  font-semibold transition duration-300 ease-in-out border border-fuchsia-600 mb-2 ${activeItem === item.name ? 'bg-fuchsia-700 bg-opacity-60 text-white' : ''
                                    }`}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar