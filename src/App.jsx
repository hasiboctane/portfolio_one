import React, {useEffect, useState} from 'react'
import HeroSection from "./components/HeroSection.jsx";

const App = () => {
    const [theme, setTheme] = useState(null);
    useEffect(() => {
        if(window.matchMedia('(prefers-color-scheme:dark)').matches){
            setTheme('dark');
        }else {
            setTheme('light');
        }
    }, []);

    useEffect(() => {
        if(theme==='dark'){
            document.documentElement.classList.add('dark');
        }else{
            document.documentElement.classList.remove('dark');
        }
    },[theme]);
  return (
    <div className="bg-white dark:bg-slate-900">
        <HeroSection/>
    </div>
  )
}

export default App