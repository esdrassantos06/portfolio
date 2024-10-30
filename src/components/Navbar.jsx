import React, { useState, useEffect } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const savedMode = localStorage.getItem('darkMode');
        if (savedMode) {
            setDarkMode(savedMode === 'true');
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('darkMode', darkMode);
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, options);

        sections.forEach(section => {
            observer.observe(section);
        });

        return () => {
            sections.forEach(section => {
                observer.unobserve(section);
            });
        };
    }, []);

    return (
        <nav className="navbar flex flex-row gap-96 p-10 transition ease-in duration-150 bg-mist-gray dark:bg-custom-black justify-around">
            <ul className='flex flex-row justify-center items-center gap-6'>
                <a href='/' translate="no" className='text-mypurple inter mr-2 text-xl font-medium'>Es<span className='text-gray-800 dark:text-white'>dras</span></a>

                <li>
    <a translate="no" className={`relative text-md ${activeSection === 'home' ? 'text-mypurple' : darkMode ? 'text-white' : 'text-gray-700'} poppins-font group`} href="#home">
        Home
        <span className="absolute left-0 bottom-0 h-[2px] w-full bg-gray-700 transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100 origin-left" />
    </a>
</li>


                <li>
                    <a className={`relative text-md ${activeSection === 'about' ? 'text-mypurple' : 'dark:text-white text-gray-700'} poppins-font group`} href="#about">
                        About
                        <span className="absolute left-0 bottom-0 h-[2px] w-full bg-gray-700 transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100 origin-left" />
                    </a>
                </li>

                <li>
                    <a className={`relative text-md ${activeSection === 'projects' ? 'text-mypurple' : 'dark:text-white text-gray-700'} poppins-font group`} href="#projects">
                        Projects
                        <span className="absolute left-0 bottom-0 h-[2px] w-full bg-gray-700 transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100 origin-left" />
                    </a>
                </li>
            </ul>
            <div className='flex flex-row gap-2 items-center justify-center'>
                <div className='__contact-button'>
                    <Link to="/contact" className="text-md mr-4 p-[13px] hover:bg-purple-900 transition-colors duration-500 w-44 text-zinc-50 bg-mypurple rounded-xl poppins-font">Contact-me!</Link>
                </div>

                <div className='__darkmode-button mr-8 max-[400px]:mr-4 flex flex-row'>
                    <svg viewBox="0 0 16 16" className="bi bi-sun-fill max-sm:mr-1 mr-2" fill="currentColor" width="23" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" color="orange"></path>
                    </svg>
                    <label className="switch text-sm font-medium cursor-pointer btn-color-mode-switch inline-block m-0 relative" id="light">
                        <input value="1" className="w-12 h-6 opacity-0 absolute top-0 m-0 cursor-pointer" id="color_mode" name="color_mode" type="checkbox" />
                        <label className="btn-color-mode-switch-inner overflow-hidden m-0 w-36 h-8 relative block cursor-pointer" data-off="Light" data-on="Dark" id="trail" onClick={() => setDarkMode(!darkMode)} htmlFor="color_mode"></label>
                    </label>
                    <svg viewBox="0 0 16 16" className="bi bi-moon-stars-fill max-sm:ml-1 ml-2" fill="currentColor" width="23" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" color="#8D827E"></path>
                        <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" color="black" className="dark:invert"></path>
                    </svg>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
