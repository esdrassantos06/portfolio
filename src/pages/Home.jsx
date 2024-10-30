import React from 'react';
import Navbar from '../components/Navbar'
import WritingEffect from '../components/WritingEffect';
import myselfImage from '../assets/images/myself.png'
import { SquareChevronRight, Layers3, BookOpen } from 'lucide-react';

const Home = () => {
    return (
        <>
            <header className='fixed w-full z-50'>
                <Navbar />
            </header>
            <main className='w-full h-screen'>
                <section className='__main-container flex h-full bg-mist-gray dark:bg-custom-black flex-row w-full items-center max-lg:flex-wrap' id='home'>
                    <article
                        className="mt-0 max-sm:mt-[5vh] flex flex-col justify-start max-sm:ml-4 ml-12 items-start w-full poppins-font">
                        <h1 className="select-none text-[50pt] font-bold poppins-font dark:text-white max-sm:text-[35pt]">Hi, I'm <span
                            className="text-mypurple" translate="no">Esdras</span></h1>
                        <WritingEffect />
                        <p className="max-w-96 mt-4 dark:text-white poppins-font max-sm:mt-2">I'm Esdras, a FrontEnd Developer. I'm 18 years old and
                            have 1 year of experience. I'm currently living in Portugal.</p>
                    </article>
                    <aside
                        className="z-10 mr-24 relative w-2/4 max-lg:hidden select-none bg-gray-950 rounded-full flex justify-center items-center">
                        <img className="object-cover rounded-full w-full max-sm:w-3/4" src={myselfImage}
                            alt="Profile" />
                    </aside>
                    <div className='__some-buttons z-10'>
                        <a href='#about'
                            className="btn-scroll flex items-center justify-center bg-transparent border-none left-1/2 bottom-12 absolute w-8 h-12 max-md:hidden"
                            id="scrollButton">
                            <span className="scroll w-1 h-3 rounded-xl"></span>
                        </a>
                        <div className="social-buttons dark:bg-[#1F1F1F] flex justify-center items-center absolute bottom-5 left-5" id="CorSocial">
                            <a href="https://github.com/esdrassantos06"
                                className="rounded-[50%] mx-2.5 my-0 bg-white transition dark:invert dark:shadow-none duration-300 hover:bg-[#f2f2f2] flex justify-center items-center w-12 h-12 shadow-gray-700 shadow-md github"
                                target="_blank" id="github">
                                <svg className="cf-icon-svg w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="-2.5 0 19 19">
                                    <path
                                        d="M9.464 17.178a4.506 4.506 0 0 1-2.013.317 4.29 4.29 0 0 1-2.007-.317.746.746 0 0 1-.277-.587c0-.22-.008-.798-.012-1.567-2.564.557-3.105-1.236-3.105-1.236a2.44 2.44 0 0 0-1.024-1.348c-.836-.572.063-.56.063-.56a1.937 1.937 0 0 1 1.412.95 1.962 1.962 0 0 0 2.682.765 1.971 1.971 0 0 1 .586-1.233c-2.046-.232-4.198-1.023-4.198-4.554a3.566 3.566 0 0 1 .948-2.474 3.313 3.313 0 0 1 .091-2.438s.773-.248 2.534.945a8.727 8.727 0 0 1 4.615 0c1.76-1.193 2.532-.945 2.532-.945a3.31 3.31 0 0 1 .092 2.438 3.562 3.562 0 0 1 .947 2.474c0 3.54-2.155 4.32-4.208 4.548a2.195 2.195 0 0 1 .625 1.706c0 1.232-.011 2.227-.011 2.529a.694.694 0 0 1-.272.587z">
                                    </path>
                                </svg>
                            </a>

                            <a href="https://www.linkedin.com/in/esdras-santos-990a15301/"
                                className="rounded-[50%] hover:bg-[#f2f2f2] mx-2.5 my-0 bg-white transition dark:shadow-none duration-300  flex justify-center w-12 h-12 items-center shadow-gray-700 shadow-md linkedin"
                                target="_blank">
                                <svg viewBox="0 -2 44 44" version="1.1" xmlns="http://www.w3.org/2000/svg"
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
                <section className='__about-container pb-72 flex h-[90vh] bg-about-purple flex-col w-full items-center max-lg:flex-wrap' id='about'>
                    <div className='mt-32 flex flex-col justify-center items-center poppins-font'>
                        <h1 className='about-main-title poppins-font font-bold max-sm:text-[40pt] text-[50pt] select-none text-white'>About <span
                            className="text-mypurple bg-mist-gray dark:bg-custom-black whitespan">Me</span></h1>
                        <p className="text-white xl:w-2/4 mt-4 p-3 text-center">My name is Esdras, an 18-year-old Brazilian frontend developer living in Portugal. I'm passionate about creating user-friendly and visually appealing web interfaces, with a solid background in JavaScript, HTML, and CSS. My expertise in React helps me build dynamic, component-based interfaces that are efficient and maintainable. Living in Portugal has broadened my perspective on international development trends, and I strive to deliver clean, optimized code for enjoyable interactions across different devices and platforms.</p>
                    </div>
                </section>

                <section className='__skills mt-[-20rem] pb-4 flex justify-center h-fit items-center w-full' id='about'>
                    <div className='container shadow-md shadow-slate-300 dark:shadow-zinc-950 dark:bg-neutral-900 bg-mist-gray rounded-lg h-full'>
                        <div className='__box mt-20 mb-24 w-full h-full'>
                            <div className='__content flex justify-around items-stretch flex-row w-full h-full text-black'>
 
                                <div className='__column flex flex-col justify-center items-center gap-3 h-full w-1/3'>
                                    <div className='bg-green-500 mb-4 rounded-full p-4'>
                                        <Layers3 size={40} />
                                    </div>
                                    <div className='flex flex-col poppins-font items-center justify-center'>
                                        <h2 className='text-xl mb-8 font-bold dark:text-white'>Design</h2>
                                        <p className='text-lg mb-8 w-[300px] dark:text-white text-center'>I value a simple content structure, clean design patterns, and intentional interactions.</p>
                                    </div>
                                    <div className='poppins-font mb-28 flex flex-col items-center justify-center'>
                                        <h1 className='text-purple-800 mb-1 font-semibold text-lg dark:text-white'>Things I enjoy designing:</h1>
                                        <p className='text-base font-medium dark:text-white'>UX, UI, Web, Apps, Logos</p>
                                    </div>
                                    <div className='column poppins-font flex flex-col items-center justify-center'>
                                        <h1 className='text-purple-800 mb-1 font-semibold text-lg dark:text-white'>Design Tools:</h1>
                                        <ul className='flex flex-col items-center justify-center'>
                                            <li className='text-base font-medium dark:text-white'>Figma</li>
                                            <li className='text-base font-medium dark:text-white'>Sketch</li>
                                        </ul>
                                    </div>
                                </div>


                                <div className='__column flex flex-col border-solid justify-center h-full items-center gap-3 w-1/3 border-l border-r border-gray-300 dark:border-gray-700'>
                                    <div className='bg-green-500 mb-4 rounded-full p-4'>
                                        <SquareChevronRight size={40} />
                                    </div>
                                    <div className='flex flex-col poppins-font items-center justify-center'>
                                        <h2 className='text-xl mb-8 font-bold dark:text-white'>FrontEnd Developer</h2>
                                        <p className='text-lg mb-8 w-[300px] dark:text-white text-center'>I enjoy coding things from scratch and bringing ideas to life in the browser.</p>
                                    </div>
                                    <div className='poppins-font mb-28 flex flex-col items-center justify-center'>
                                        <h1 className='text-purple-800 mb-1 font-semibold text-lg dark:text-white'>Languages I know:</h1>
                                        <p className='text-base font-medium dark:text-white'>HTML, CSS, Sass, Git, JavaScript</p>
                                    </div>
                                    <div className='poppins-font flex flex-col items-center justify-center'>
                                        <h1 className='text-purple-800 mb-1 font-semibold text-lg dark:text-white'>Dev Tools:</h1>
                                        <ul className='flex flex-col items-center justify-center'>
                                            <li className='text-base font-medium dark:text-white'>VS Code</li>
                                            <li className='text-base font-medium dark:text-white'>Tailwind CSS</li>
                                            <li className='text-base font-medium dark:text-white'>Bulma</li>
                                            <li className='text-base font-medium dark:text-white'>Bootstrap</li>
                                            <li className='text-base font-medium dark:text-white'>Github</li>
                                            <li className='text-base font-medium dark:text-white'>React</li>
                                            <li className='text-base font-medium dark:text-white'>Node.js</li>
                                        </ul>
                                    </div>
                                </div>


                                <div className='__column flex flex-col justify-center h-full items-center gap-3 w-1/3'>
                                    <div className='bg-green-500 mb-4 rounded-full p-4'>
                                        <BookOpen size={40} />
                                    </div>
                                    <div className='flex flex-col poppins-font items-center justify-center'>
                                        <h2 className='text-xl mb-8 font-bold dark:text-white'>Education</h2>
                                        <p className='text-lg mb-8 w-[300px] dark:text-white text-center'>I am currently studying at Tokio School, where I am enhancing my skills in web development.</p>
                                    </div>
                                    <div className='poppins-font mb-28 flex flex-col items-center justify-center'>
                                        <h1 className='text-purple-800 mb-1 font-semibold text-lg dark:text-white'>Courses:</h1>
                                        <p className='text-base font-medium dark:text-white'>HTML, CSS, JavaScript, React</p>
                                    </div>
                                    <div className='poppins-font flex flex-col items-center justify-center'>
                                        <h1 className='text-purple-800 mb-1 font-semibold text-lg dark:text-white'>Institution:</h1>
                                        <a href='https://tokioschool.pt' target='_blank' className='text-base underline font-medium dark:text-white'>Tokio School</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>


                <section className='__projects-container flex h-full max-md:flex-wrap bg-mist-gray dark:bg-custom-black flex-row w-full items-center max-lg:flex-wrap' id='projects'>

                {/* Vamos ver oque fazer aqui */}
                </section>
            </main>
        </>
    );
};

export default Home;