import React, { useEffect, useState } from 'react'
import HeroSection from "./components/HeroSection.jsx";
import Services from "./components/Services.jsx";
import About from "./components/About.jsx";
import Footer from "./components/Footer.jsx";
import ProjectSection from './components/ProjectSection.jsx';
import Navbar from './components/Navbar.jsx';

const App = () => {
    const [theme, setTheme] = useState(null);
    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme:dark)').matches) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }, []);

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const handleThemeButton = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }
    return (
        <>

            <div className="bg-slate-100 dark:bg-slate-800 ">

                <div className="max-w-5xl mx-auto w-11/12  ">
                    <div className='flex justify-between items-center sticky top-0 z-10 shadow-md  rounded-b-md bg-slate-200 bg-opacity-50 dark:bg-slate-800 dark:bg-opacity-70 px-2 py-0'>

                        <div className=''>
                            <button
                                type="button"
                                onClick={handleThemeButton}
                                className=" text-white bg-fuchsia-700 bg-opacity-80 px-1 md:px-1.5 py-0.5 text-lg hover:bg-opacity-100 rounded-md "
                            >{theme === 'dark' ? '🌞' : '🌙'}</button>
                        </div>
                        <Navbar />

                    </div>

                    <div className=''>
                        <HeroSection />
                        <Services />
                        <ProjectSection />
                        <About />
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    )
}
//🌞🌙
export default App