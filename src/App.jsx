import React, {useEffect, useState} from 'react'
import HeroSection from "./components/HeroSection.jsx";
import Services from "./components/Services.jsx";
import About from "./components/About.jsx";
import Footer from "./components/Footer.jsx";

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

    const handleThemeButton = () =>{
        setTheme(theme==='dark'?'light':'dark');
    }
  return (
      <>
          <button
            type="button"
            onClick={handleThemeButton}
            className="z-10 fixed right-2 top-2 text-white bg-fuchsia-700 p-1 text-lg rounded-md"
          >{theme==='dark'?'🌞':'🌙'}</button>
          <div className="bg-slate-200 dark:bg-slate-900">
              <div className="max-w-5xl mx-auto w-11/12">
                  <HeroSection/>
                  <Services/>
                  <About/>
                  <Footer/>
              </div>
          </div>
      </>
  )
}
//🌞🌙
export default App