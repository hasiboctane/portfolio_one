import React, { useState } from 'react'
import { FaBars, FaTimes, FaUser } from 'react-icons/fa'
import { MdHome } from "react-icons/md";
import { GoProjectSymlink } from "react-icons/go";
import { SlEnergy } from "react-icons/sl";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [activeItem, setActiveItem] = useState('Home')
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const menuItems = [
        { name: 'Home', icon: <MdHome className="w-6 h-6" />, href: '#', onClick: () => setActiveItem('Home') },
        { name: 'About', icon: <FaUser className="w-6 h-6" />, href: '#about', onClick: () => setActiveItem('About') },
        { name: 'Projects', icon: <GoProjectSymlink className="w-6 h-6" />, href: '#projects', onClick: () => setActiveItem('Projects') },
        { name: 'Services', icon: <SlEnergy className="w-6 h-6 " />, href: '#services', onClick: () => setActiveItem('Services') }
    ]

    return (
        <nav className="w-full bg-transparent">
            <div className=" ">
                <div className="flex items-center justify-end h-14">
                    <div className="hidden md:block">
                        <div className="flex items-baseline space-x-4">
                            {menuItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={item.onClick}
                                    className={`text-slate-800  bg-fuchsia-600 dark:bg-opacity-80 hover:bg-fuchsia-600 hover:text-fuchsia-200 dark:hover:text-slate-100 px-1.5 py-1 rounded-md hover:-translate-y-1 transition duration-300 ease-in-out ${activeItem === item.name ? ' bg-fuchsia-600 dark:bg-opacity-80 text-white ' : ''
                                        }`}
                                >
                                    {item.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center px-1 py-1 rounded-md text-fuchsia-600  hover:text-slate-800 hover:bg-fuchsia-600  transition duration-300 ease-in-out"
                        >
                            {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className=" md:hidden relative z-10">
                    <div className="px-2 py-2 absolute top-0 right-8 flex gap-2 bg-slate-400 dark:bg-slate-900 bg-opacity-70 rounded-md ">
                        {menuItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => {
                                    item.onClick();
                                    toggleMenu();
                                }}
                                className={`text-slate-800  bg-fuchsia-600 dark:bg-opacity-80 hover:bg-fuchsia-600 hover:text-fuchsia-200 dark:hover:text-slate-700 px-1 py-1 rounded-md hover:-translate-y-1 transition duration-300 ease-in-out ${activeItem === item.name ? ' bg-fuchsia-600 dark:bg-opacity-80 text-white' : ''
                                    }`}
                            >
                                {item.icon}
                            </a>
                        ))}
                    </div>
                </div>
            )
            }
        </nav >
    )
}

export default Navbar