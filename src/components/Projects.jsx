import { useState } from 'react';
import Mockup1Pc from '../assets/mockups/mockup1-mac.png';
import Mockup1Phone from '../assets/mockups/mockup1-phone.png';
import NH_Phone from '../assets/mockups/novahorizonte-phone.png'
import NH_Pc from '../assets/mockups/novahorizonte-mac.png'

// Use o site https://mockuphone.com/ para fazer os mockups
// Mockup Mobile é iphone 14
// Mockup PC é Macbook Air 13, mas tenho que fazer um ajuste no tamanho da imagem
// a cor dos mockups é Midnight

const ProjectGrid = () => {
    const [showMore, setShowMore] = useState(false);
    const [hoveredProject, setHoveredProject] = useState(null);
    const [selectedProject, setSelectedProject] = useState(null);

    class Project {
        constructor(id, title, pcMockup, mobileMockup, description, frameworks, github, deploy) {
            this.id = id;
            this.title = title;
            this.pcMockup = pcMockup;
            this.mobileMockup = mobileMockup;
            this.description = description;
            this.frameworks = frameworks;
            this.github = github;
            this.deploy = deploy;
        }
    }

    const projects = [
        new Project(1, 'Construtora Nova Horizonte', NH_Pc, NH_Phone, 'A fictional project focused on civil construction and engineering services.', 'React, Tailwind CSS, Shadcn UI', 'https://github.com/esdrassantos06/novahorizonte', 'https://novahorizonte.vercel.app/'),

        new Project(2, 'Project 2', Mockup1Pc, Mockup1Phone, 'An e-commerce site built with Next.js and styled-components.', 'Next.js, styled-components', 'https://example.com/project2', 'https://deploy.com/project2'),

        new Project(3, 'Project 3', Mockup1Pc, Mockup1Phone, 'A custom blog template created with Gatsby and GraphQL.', 'Gatsby, GraphQL', 'https://example.com/project3', 'https://deploy.com/project3'),

        new Project(4, 'Project 4', Mockup1Pc, Mockup1Phone, 'A custom dashboard built with Vue and Tailwind CSS.', 'Vue, Tailwind CSS', 'https://example.com/project4', 'https://deploy.com/project4'),

        new Project(5, 'Project 5', Mockup1Pc, Mockup1Phone, 'A personal finance tracker made with Angular and Firebase.', 'Angular, Firebase', 'https://example.com/project5', 'https://deploy.com/project5'),

        new Project(6, 'Project 6', Mockup1Pc, Mockup1Phone, 'A real-time chat app built with React and Socket.io.', 'React, Socket.io', 'https://example.com/project6', 'https://deploy.com/project6'),

        new Project(7, 'Project 7', Mockup1Pc, Mockup1Phone, 'A task management tool created using Svelte and Tailwind CSS.', 'Svelte, Tailwind CSS', 'https://example.com/project7', 'https://deploy.com/project7'),

        new Project(8, 'Project 8', Mockup1Pc, Mockup1Phone, 'An AI-powered chatbot built with Next.js and OpenAI API.', 'Next.js, OpenAI API', 'https://example.com/project8', 'https://deploy.com/project8'),

        new Project(9, 'Project 9', Mockup1Pc, Mockup1Phone, 'A multi-language blog developed with Astro and Markdown.', 'Astro, Markdown', 'https://example.com/project9', 'https://deploy.com/project9'),
    ];



    const visibleProjects = showMore ? projects : projects.slice(0, 3);

    const handleProjectClick = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <div className='flex flex-col items-center mx-4 mb-20'>
            <div className='grid md:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4'>
                {visibleProjects.map((project) => (
                    <div
                        key={project.id}
                        className='relative bg-gray-200 shadow-md shadow-slate-300 active:scale-100 active:translate-y-1 hover:scale-105 dark:shadow-zinc-950 dark:bg-neutral-900 p-4 rounded-lg overflow-hidden cursor-pointer'
                        onMouseEnter={() => setHoveredProject(project.id)}
                        onMouseLeave={() => setHoveredProject(null)}
                        onClick={() => handleProjectClick(project)}
                    >
                        <h3 className='text-black dark:text-white text-center font-semibold mb-2'>{project.title}</h3>
                        <img
                            src={project.pcMockup}
                            alt={`${project.title} PC Mockup`}
                            className='w-full h-48 object-cover rounded-lg'
                        />
                        <img
                            src={project.mobileMockup}
                            alt={`${project.title} Mobile Mockup`}
                            className='absolute top-10 left-5 w-24 h-48 -rotate-12 object-cover rounded-lg shadow-lg'
                        />

                        {hoveredProject === project.id && (
                            <div className='absolute inset-0 bg-black/75 flex flex-col items-center justify-center p-4 text-white rounded-lg'>
                                <p className='text-lg font-semibold mb-2'>{project.description}</p>
                                <p className='text-sm'>{project.frameworks}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {projects.length > 3 && (
                <button
                    className='mt-6 bg-mypurple text-white inter font-semibold py-3 px-6 rounded-sm hover:bg-purple-800 duration-300 transition'
                    onClick={() => setShowMore(!showMore)}
                >
                    {showMore ? 'Show less' : 'Show more'}
                </button>
            )}

            {selectedProject && (
                <div className='fixed inset-0 z-999 flex items-center justify-center bg-black/50' onClick={closeModal}>

                    <div className='bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-lg w-11/12 max-w-lg' onClick={(e) => e.stopPropagation()}>
                        <h2 className='text-xl font-semibold dark:text-white mb-4'>{selectedProject.title}</h2>
                        <p className='dark:text-white'>{selectedProject.description}</p>
                        <p className='mt-2 text-sm text-gray-600 dark:text-gray-300'>{selectedProject.frameworks}</p>
                        <div className='flex w-full items-center mt-2 justify-around'>

                            <a href={selectedProject.github} target='_blank'
                                className='mt-4 bg-mypurple cursor-pointer text-white py-2 px-4 rounded-sm hover:bg-purple-800 duration-300 transition'>Github</a>

                            <a href={selectedProject.deploy} target='_blank'
                                className='mt-4 bg-mypurple cursor-pointer text-white py-2 px-4 rounded-sm hover:bg-purple-800 duration-300 transition'>Deploy</a>

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectGrid;