import DownloadCV from "./DownloadCV.jsx";

const About = () => {
    return (
        <>
            <div id="about" className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0 pt-16 md:pt-20 pb-20 md:pb-28 shadow-md px-2 ">
                <div className='mt-4  flex justify-start md:w-[40%] '>
                    <img src="/images/hero/dressed.png" alt="hasib octane" className=" md:w-4/5 object-center rounded-lg" />
                </div>
                <div className="md:w-[60%] px-2 flex flex-col items-center gap-6">
                    <p className="text-md text-gray-700 dark:text-gray-200 text-center">
                        <span className="text-fuchsia-600 dark:text-fuchsia-500">I have a passion for technology</span>, and I am looking for new ways to apply my
                        knowledge and experience to the challenges and opportunities of the
                        workplace. I am a self-educated programmer and a quick learner. Hopefully,
                        I will try my best to cooperate with my teammates.
                    </p>

                    <DownloadCV />
                </div>

            </div>
        </>
    );
}

export default About;