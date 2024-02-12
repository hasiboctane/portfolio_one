import SectionTitle from "./SectionTitle.jsx";

const About = ()=> {
    return(
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:20 py-16">
            <div className="w-full md:w-7/12/12">
                <SectionTitle>About me</SectionTitle>
                <p className="text-md text-gray-600 dark:text-gray-300">
                    I have a passion for technology, and I am looking for new ways to apply my
                    knowledge and experience to the challenges and opportunities of the
                    workplace. I am a self-educated programmer and a quick learner. Hopefully,
                    I will try my best to cooperate with my teammates.
                </p>
                <a href="mailto:hasibbt7274@gmail.com" className="block mt-3 text-gray-600 text-md md:text-lg underline dark:text-gray-300 hover:text-purple-800 dark:hover:text-purple-400">hasibbt7274@gmail.com</a>
            </div>
            <img src="/images/coding.png" alt="hasib octane" className="w-full h-[400px] md:w-5/12 rounded-lg object-center"/>
        </div>
    );
}

export  default About;