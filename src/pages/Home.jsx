import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar'
import WritingEffect from '../components/WritingEffect';
import myselfImage from '../assets/images/myself.png'
import { SquareChevronRight, Layers3, BookOpen } from 'lucide-react';
import ProjectGrid from '../components/Projects'
import Footer from '../components/Footer'
import { Link } from 'react-router';
import CV from '../assets/cv/esdrasCV.pdf';

//Dont upgrade to react 19 until react spring is updated

const Home = () => {
    const [showButton, setShowButton] = useState(false); // Back to top button


    const [designTools, setDesignTools] = useState([]);
    const [tools, setTools] = useState([]);

    useEffect(() => {
        let designToolsName = ["Figma, Sketch"];

        const DesignToolsArray = designToolsName[0].split(', ');

        setDesignTools(DesignToolsArray);



        let devTools = ['VS Code, Github, Anaconda Prompt'];

        const toolsArray = devTools[0].split(', ');

        setTools(toolsArray);


        const handleScroll = () => {   //Back to top button
            const section = document.getElementById('home');
            if (!section) return;

            const sectionTop = section.getBoundingClientRect().top;
            const sectionHeight = section.clientHeight;


            setShowButton(sectionTop < -sectionHeight / 2);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <>

            <Navbar />

            <main className='md:pt-20 pt-30'>

                <section
                    className={`__main-container min-h-screen h-fit  relative grid gap-20 items-center place-content-center md:grid-cols-2 bg-mist-gray dark:bg-custom-black flex-row w-full `}
                    id="home"
                >
                    <article className="flex flex-col pl-4 md:pl-12 items-start w-full poppins-font">
                        <h1 className="select-none md:text-7xl text-6xl font-bold poppins-font dark:text-white">Hi, I&apos;m <span
                            className="text-mypurple" translate="no">Esdras</span></h1>
                        <WritingEffect />

                        <p className="max-w-96 py-4 dark:text-white poppins-font text-base md:text-lg">I&apos;m Esdras, a FullStack Developer. I&apos;m 18 years old and
                            have 1 year of experience. I&apos;m currently living in Portugal.</p>
                        <div className='__contact-buttons gap-4 flex w-full max-sm:flex-wrap'>
                            <Link to="/contact" className="text-md text-center h-12 flex items-center justify-center hover:bg-transparent border border-solid whitespace-nowrap hover:text-mypurple active:text-mypurple active:bg-transparent border-mypurple transition-colors duration-300 sm:w-44 w-30  text-zinc-50 bg-mypurple rounded-lg poppins-font font-medium" translate='no'>Contact-me!</Link>

                            <a href={CV} download='Esdras Resume' className="text-md text-center h-12 flex items-center justify-center hover:bg-transparent border border-solid whitespace-nowrap hover:text-mypurple active:text-mypurple active:bg-transparent border-mypurple transition-colors duration-300 sm:w-44 w-30 text-zinc-50 bg-mypurple rounded-lg poppins-font font-medium" translate='no'>CV</a>
                        </div>
                    </article>

                    <aside
                        className="z-10 select-none rounded-full flex justify-center items-center">
                        <img className="object-cover rounded-full w-[80%]" src={myselfImage} alt="Profile" />
                    </aside>

                    <div className='__some-buttons z-10'>
                        <a href='#about'
                            className="btn-scroll lg:flex items-center justify-center bg-transparent border-none left-1/2 bottom-12 absolute w-8 h-12 max-md:hidden"
                            id="scrollButton">
                            <span className="scroll w-1 h-3 rounded-xl"></span>
                        </a>

                        <div className="social-buttons bg-[#f2f2f2] shadow-lg px-2.5 py-4 rounded-full dark:bg-[#1F1F1F] flex justify-center items-center absolute bottom-5 left-5" id="CorSocial">

                            <a href="https://github.com/esdrassantos06"
                                className="rounded-[50%] mx-2.5 my-0 transition dark:invert dark:shadow-zinc-900/50 duration-300 group hover:bg-[#333] flex justify-center items-center w-12 h-12 shadow-gray-700  shadow-md github bg-zinc-900"
                                target="_blank" id="github">

                                <svg className="w-6 fill-[#f2f2f2] h-6" xmlns="http://www.w3.org/2000/svg" viewBox="-2.5 0 19 19">
                                    <path
                                        d="M9.464 17.178a4.506 4.506 0 0 1-2.013.317 4.29 4.29 0 0 1-2.007-.317.746.746 0 0 1-.277-.587c0-.22-.008-.798-.012-1.567-2.564.557-3.105-1.236-3.105-1.236a2.44 2.44 0 0 0-1.024-1.348c-.836-.572.063-.56.063-.56a1.937 1.937 0 0 1 1.412.95 1.962 1.962 0 0 0 2.682.765 1.971 1.971 0 0 1 .586-1.233c-2.046-.232-4.198-1.023-4.198-4.554a3.566 3.566 0 0 1 .948-2.474 3.313 3.313 0 0 1 .091-2.438s.773-.248 2.534.945a8.727 8.727 0 0 1 4.615 0c1.76-1.193 2.532-.945 2.532-.945a3.31 3.31 0 0 1 .092 2.438 3.562 3.562 0 0 1 .947 2.474c0 3.54-2.155 4.32-4.208 4.548a2.195 2.195 0 0 1 .625 1.706c0 1.232-.011 2.227-.011 2.529a.694.694 0 0 1-.272.587z">
                                    </path>
                                </svg>
                            </a>

                            <a href="https://www.linkedin.com/in/esdrassantos06/"
                                className="rounded-[50%] hover:bg-[#0077b5]/80 mx-2.5 my-0 bg-[#0077b5] transition dark:shadow-[#0077b5]/50 duration-300 flex justify-center w-12 h-12 items-center shadow-gray-700 shadow-md linkedin"
                                target="_blank">

                                <svg viewBox="0 -2 44 44" className='w-6 h-6 fill-[#f2f2f2]' version="1.1" xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <g id="Icons" stroke="none" strokeWidth="1">
                                        <g transform="translate(-702.000000, -265.000000)">
                                            <path
                                                d="M746,305 L736.2754,305 L736.2754,290.9384 C736.2754,287.257796 734.754233,284.74515 731.409219,284.74515 C728.850659,284.74515 727.427799,286.440738 726.765522,288.074854 C726.517168,288.661395 726.555974,289.478453 726.555974,290.295511 L726.555974,305 L716.921919,305 C716.921919,305 717.046096,280.091247 716.921919,277.827047 L726.555974,277.827047 L726.555974,282.091631 C727.125118,280.226996 730.203669,277.565794 735.116416,277.565794 C741.21143,277.565794 746,281.474355 746,289.890824 L746,305 L746,305 Z M707.17921,274.428187 L707.117121,274.428187 C704.0127,274.428187 702,272.350964 702,269.717936 C702,267.033681 704.072201,265 707.238711,265 C710.402634,265 712.348071,267.028559 712.41016,269.710252 C712.41016,272.34328 710.402634,274.428187 707.17921,274.428187 L707.17921,274.428187 L707.17921,274.428187 Z M703.109831,277.827047 L711.685795,277.827047 L711.685795,305 L703.109831,305 L703.109831,277.827047 L703.109831,277.827047 Z"
                                                id="LinkedIn"></path>
                                        </g>
                                    </g>
                                </svg>
                            </a>
                        </div>
                    </div>
                </section>

                {showButton && (
                    <button
                        className={`bg-mypurple group transition-all duration-500 ease-in-out hover:duration-300 poppins-font w-[50px] h-[50px] border-0 font-semibold flex items-center justify-center overflow-hidden fixed ${showButton ? 'opacity-100 cursor-pointer' : 'opacity-0 cursor-none pointer-events-none'} transition-all duration-500 bottom-5 right-5 rounded-full z-999 hover:items-center hover:w-36 hover:rounded-[50px]`}
                        id="backtoTop"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        <svg className="svgIcon group-hover:hidden transition duration-300 w-3" viewBox="0 0 384 512">
                            <path className="fill-white" d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
                        </svg>
                        <p className='hidden group-hover:flex text-white whitespace-nowrap inter text-sm'>Back to Top</p>
                    </button>
                )} {/* Back to top button */}

                <section id="about" className={`__about-container flex sm:h-screen h-fit bg-about-purple flex-col w-full items-center `}>
                    <div className='sm:mt-40 mt-20 flex flex-col justify-center items-center poppins-font'>
                        <h1 className='about-main-title mb-10 text-center poppins-font font-bold md:text-7xl text-5xl select-none text-white'>About <span
                            className="text-mypurple bg-mist-gray dark:bg-custom-black">Me</span></h1>

                        <p className="text-white lg:w-2/4 mt-4 p-3 text-center">
                            Hi, I’m Esdras, a FullStack Developer with expertise in <strong>Python, NodeJS, NextJS, MySQL, and TailwindCSS.</strong> At 18 years old, I’ve built a solid foundation in software development, with a focus on writing clean, efficient, and maintainable code. I am passionate about creating seamless user experiences and have hands-on experience working with technologies like React, NextJS, and TailwindCSS to develop dynamic, responsive web applications. I take pride in adhering to SOLID principles and delivering high-quality code that scales across platforms. Currently, I’m based in Portugal, and my international experience has allowed me to stay up-to-date with the latest development trends and methodologies. I’m excited about solving complex challenges and continuously learning to improve my craft.
                        </p>


                    </div>
                </section> {/* About Section */}



                <section
                    id="skills"
                    className='__skills pb-4 px-10 sm:-mt-50 lg:-mt-70 flex justify-center items-center w-full'>
                    <div className='shadow-md w-[80%] flex items-center justify-center shadow-slate-300 dark:shadow-zinc-950 dark:bg-neutral-900 bg-mist-gray rounded-lg'>
                        <div className='__box mt-20 mb-24 w-full '>
                            <div className='__content max-sm:block flex justify-around items-stretch flex-row w-full h-full text-black'>

                                <div className='__column pb-4 flex flex-col justify-center items-center gap-3 h-full sm:w-1/3'>
                                    <div className='bg-green-500 mb-4 rounded-full p-4'>
                                        <Layers3 size={40} />
                                    </div>
                                    <div className='flex flex-col poppins-font items-center justify-center'>
                                        <h2 className='text-xl mb-8 font-bold select-none dark:text-white max-md:text-lg'>Design</h2>
                                        <p className='text-lg mb-8 w-[300px] px-2 dark:text-white text-center max-md:text-base max-lg:w-fit'>I value a simple content structure, clean design patterns, and intentional interactions.</p>
                                    </div>
                                    <div className='poppins-font mb-28 max-sm:mb-10 flex flex-col items-center justify-center'>
                                        <h1 className='text-purple-800 mb-1 font-semibold text-lg text-center dark:text-white'>Things I enjoy designing:</h1>
                                        <p className='text-base font-medium dark:text-white text-center' translate='no'>UX, UI, Web, Apps, Logos</p>
                                    </div>
                                    <div className='column poppins-font flex flex-col items-center justify-center'>
                                        <h1 className='text-purple-800 mb-1 font-semibold text-lg dark:text-white text-center'>Design Tools:</h1>
                                        <ul className='flex flex-col items-center justify-center' translate='no'>
                                            {designTools.map((designTools, index) => (
                                                <li className='text-base font-medium dark:text-white text-center' key={index}>{designTools}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className='__column pb-4 flex max-sm:pt-8 flex-col border-solid justify-center h-full items-center gap-3 sm:w-1/3 sm:border-l sm:border-r max-sm:border-b max-sm:border-t max-sm:mt-6 max-sm:mb-6 border-gray-300 dark:border-gray-700'>
                                    <div className='bg-green-500 mb-4 max-sm:mt-4 rounded-full p-4'>
                                        <SquareChevronRight size={40} />
                                    </div>
                                    <div className='flex flex-col poppins-font items-center justify-center'>
                                        <h2 className='text-xl max-md:text-lg  mb-8 font-bold text-center dark:text-white select-none'>FrontEnd Developer</h2>
                                        <p className='text-lg mb-8 w-[300px] px-2 dark:text-white text-center max-md:text-base max-lg:w-fit'>I enjoy coding things from scratch and bringing ideas to life in the browser.</p>
                                    </div>
                                    <div className='poppins-font mb-28 max-sm:mb-10 flex flex-col items-center justify-center'>
                                        <h1 className='text-purple-800 mb-1 font-semibold text-lg dark:text-white text-center'>Tools I know:</h1>
                                        <p className='text-base font-medium dark:text-white text-center' translate='no'>React, Next, TailwindCSS, Bootstrap,Shadcn UI</p>
                                    </div>
                                    <div className='poppins-font max-sm:mb-4 flex flex-col items-center justify-center'>
                                        <h1 className='text-purple-800 mb-1 font-semibold text-lg dark:text-white'>Dev Tools:</h1>
                                        <ul className='flex flex-col items-center justify-center' translate='no'>
                                            {tools.map((tools, index) => (
                                                <li className='text-base font-medium dark:text-white text-center' key={index}>{tools}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>


                                <div className='__column flex flex-col max-sm:pt-8 justify-center h-full items-center gap-3 sm:w-1/3'>
                                    <div className='bg-green-500 mb-4 max-sm:mt-4 rounded-full p-4'>
                                        <BookOpen size={40} />
                                    </div>
                                    <div className='flex flex-col poppins-font items-center justify-center'>
                                        <h2 className='text-xl max-md:text-lg mb-8 font-bold select-none dark:text-white'>Education</h2>
                                        <p className='text-lg max-md:text-base px-2 max-lg:w-fit mb-8 w-[300px] dark:text-white text-center'>I am currently studying at Tokio School, where I am enhancing my skills in web development.</p>
                                    </div>
                                    <div className='poppins-font mb-28 max-sm:mb-10 flex flex-col items-center justify-center'>
                                        <h1 className='text-purple-800 mb-1 font-semibold text-lg dark:text-white'>Courses:</h1>
                                        <p className='text-base font-medium text-center dark:text-white' translate='no'>HTML, CSS, JavaScript, React</p>
                                        <p className='text-base font-medium mt-2 text-center dark:text-white' translate='no'>Python, Machine Learning, AI, POO</p>
                                    </div>
                                    <div className='poppins-font flex flex-col items-center justify-center'>
                                        <h1 className='text-purple-800 mb-1 font-semibold text-lg dark:text-white'>Institution:</h1>
                                        <a href='https://tokioschool.pt' target='_blank' className='text-base underline font-medium dark:text-white' translate='no'>Tokio School</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section> {/* Skills Section */}



                <section className='__projects-container pt-20 flex justify-center h-full max-md:flex-wrap bg-mist-gray dark:bg-custom-black flex-col w-full  items-center' id='projects'>
                    <div className='flex flex-col mb-20 gap-9 items-center justify-center'>
                        <h1 className='text-black dark:text-white text-center poppins-font  font-bold text-6xl'>My Recent <span className='text-mypurple text-center'>Work</span></h1>
                        <p className='poppins-font sm:text-lg text-black text-center dark:text-white'>Here are a few past design projects I&apos;ve worked on. Want to see more? <a className='text-blue-500 hover:text-blue-700 transition duration-500' href='mailto:esdrasirion1@gmail.com'>Email me</a>.</p>
                    </div>
                    <div className='poppins-font'>
                        <ProjectGrid />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Home;