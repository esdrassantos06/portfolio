import { Reveal } from './Reveal';

const Footer = () => {
    return (
        <footer className='relative overflow-hidden w-full select-none bottom-0'>
            <div className='flex w-full flex-col gap-3 justify-center items-center pt-10 pb-5 text-black poppins-font dark:text-white'>
                <div>
                    <Reveal>
                        Developed By Esdras © {new Date().getFullYear()} All rights reserved.
                    </Reveal>
                </div>
                <div className="flex justify-center gap-6">
                    <Reveal>
                        <a href="https://github.com/esdrassantos06" aria-label="Github" target="_blank" className="text-mypurple hover:text-purple-600 dark:text-white dark:hover:text-slate-400 transition duration-300">
                            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M12 0C5.37 0 0 5.37 0 12a12.04 12.04 0 008.205 11.422c.6.11.817-.26.817-.577v-2.15c-3.338.726-4.04-1.614-4.04-1.614-.546-1.388-1.333-1.758-1.333-1.758-1.088-.745.082-.73.082-.73 1.203.084 1.837 1.237 1.837 1.237 1.07 1.833 2.805 1.305 3.492.998.107-.775.419-1.305.762-1.605-2.665-.3-5.466-1.333-5.466-5.93 0-1.31.468-2.382 1.236-3.223-.123-.303-.536-1.522.117-3.172 0 0 1.008-.322 3.3 1.23.96-.266 1.987-.399 3.007-.403 1.02.004 2.048.137 3.008.403 2.29-1.552 3.298-1.23 3.298-1.23.655 1.65.242 2.87.12 3.172.77.841 1.235 1.913 1.235 3.223 0 4.61-2.804 5.627-5.475 5.92.43.371.814 1.102.814 2.222v3.293c0 .319.215.692.825.576A12.043 12.043 0 0024 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                        </a>
                    </Reveal>
                    <Reveal>
                        <a href="https://www.linkedin.com/in/esdrassantos06/" target="_blank"
                            aria-label="Linkedin" className="text-mypurple hover:text-purple-600 dark:text-white dark:hover:text-slate-400 transition duration-300">
                            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M4.98 3.5C4.98 2.12 6.1 1 7.5 1S10.02 2.12 10.02 3.5 8.9 6 7.5 6 4.98 4.88 4.98 3.5zM.5 9.5h5V22h-5V9.5zM7 9.5h4.7v1.7h.07c.64-1.2 2.2-2.47 4.53-2.47 4.84 0 5.7 3.18 5.7 7.31V22h-5v-6.5c0-1.56-.03-3.57-2.18-3.57-2.19 0-2.53 1.71-2.53 3.45V22h-5V9.5z" />
                            </svg>
                        </a>
                    </Reveal>
                </div>
            </div>
        </footer>
    );
};

export default Footer;