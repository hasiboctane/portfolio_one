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
        { name: 'Contact', href: '#contact', onClick: () => setActiveItem('Contact') }
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
                                    className={`text-fuchsia-700 hover:bg-fuchsia-700 hover:text-slate-50 dark:hover:text-fuchsia-200 px-2 py-1 rounded-md font-semibold hover:-translate-y-1 transition duration-300 ease-in-out border border-fuchsia-700 ${activeItem === item.name ? 'bg-fuchsia-700 text-slate-50 dark:text-fuchsia-200' : ''
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
                            className="inline-flex items-center justify-center p-2 rounded-md text-fuchsia-700 hover:text-white hover:bg-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-fuchsia-800 focus:ring-white transition duration-300 ease-in-out"
                        >
                            {isOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {menuItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => {
                                    item.onClick();
                                    toggleMenu();
                                }}
                                className={`text-fuchsia-700 hover:bg-fuchsia-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out border border-fuchsia-700 mb-2 ${activeItem === item.name ? 'bg-fuchsia-700 text-white' : ''
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