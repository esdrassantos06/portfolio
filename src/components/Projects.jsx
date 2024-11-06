import React, { useState } from 'react';
import Mockup1Pc from '../assets/mockups/mockup1-mac.png';
import Mockup1Phone from '../assets/mockups/mockup1-phone.png';

const ProjectGrid = () => {
    const [showMore, setShowMore] = useState(false);
    const [hoveredProject, setHoveredProject] = useState(null);

    const projects = [
        { 
            id: 1, 
            title: 'Project 1', 
            pcMockup: Mockup1Pc, 
            mobileMockup: Mockup1Phone, 
            description: 'A portfolio project using React and Tailwind CSS.', 
            frameworks: 'React, Tailwind CSS', 
            url: 'https://example.com/project1' 
        },
        { 
            id: 2, 
            title: 'Project 2', 
            pcMockup: Mockup1Pc, 
            mobileMockup: Mockup1Phone, 
            description: 'An e-commerce site built with Next.js and styled-components.', 
            frameworks: 'Next.js, styled-components', 
            url: 'https://example.com/project2' 
        },
        { 
            id: 3, 
            title: 'Project 3', 
            pcMockup: Mockup1Pc, 
            mobileMockup: Mockup1Phone, 
            description: 'A custom blog template created with Gatsby and GraphQL.', 
            frameworks: 'Gatsby, GraphQL', 
            url: 'https://example.com/project3' 
        },
        { 
            id: 4, 
            title: 'Project 4', 
            pcMockup: Mockup1Pc, 
            mobileMockup: Mockup1Phone, 
            description: 'A custom blog template created with Gatsby and GraphQL.', 
            frameworks: 'Gatsby, GraphQL', 
            url: 'https://example.com/project4' 
        },
        { 
            id: 5, 
            title: 'Project 5', 
            pcMockup: Mockup1Pc, 
            mobileMockup: Mockup1Phone, 
            description: 'A custom blog template created with Gatsby and GraphQL.', 
            frameworks: 'Gatsby, GraphQL', 
            url: 'https://example.com/project5' 
        },
        { 
            id: 6, 
            title: 'Project 6', 
            pcMockup: Mockup1Pc, 
            mobileMockup: Mockup1Phone, 
            description: 'A custom blog template created with Gatsby and GraphQL.', 
            frameworks: 'Gatsby, GraphQL', 
            url: 'https://example.com/project6' 
        },
        { 
            id: 7, 
            title: 'Project 7', 
            pcMockup: Mockup1Pc, 
            mobileMockup: Mockup1Phone, 
            description: 'A custom blog template created with Gatsby and GraphQL.', 
            frameworks: 'Gatsby, GraphQL', 
            url: 'https://example.com/project7' 
        },
        { 
            id: 8, 
            title: 'Project 8', 
            pcMockup: Mockup1Pc, 
            mobileMockup: Mockup1Phone, 
            description: 'A custom blog template created with Gatsby and GraphQL.', 
            frameworks: 'Gatsby, GraphQL', 
            url: 'https://example.com/project8' 
        },
        { 
            id: 9, 
            title: 'Project 9', 
            pcMockup: Mockup1Pc, 
            mobileMockup: Mockup1Phone, 
            description: 'A custom blog template created with Gatsby and GraphQL.', 
            frameworks: 'Gatsby, GraphQL', 
            url: 'https://example.com/project9' 
        },
    ];
    

    const visibleProjects = showMore ? projects : projects.slice(0, 6);

    return (
        <div className='flex flex-col items-center mx-4 mb-20'>
            <div className='grid grid-cols-3 max-sm:grid-cols-1 gap-4'>
                {visibleProjects.map((project) => (
                    <a
                        key={project.id}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='relative bg-gray-200 shadow-md shadow-slate-300 active:scale-100 active:translate-y-1 hover:scale-105 dark:shadow-zinc-950 dark:bg-neutral-900 p-4 rounded-lg overflow-hidden'
                        onMouseEnter={() => setHoveredProject(project.id)}
                        onMouseLeave={() => setHoveredProject(null)}
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
                            className='absolute top-10 left-10 w-24 h-48 object-cover rounded-lg shadow-lg'
                        />

                        {hoveredProject === project.id && (
                            <div className='absolute inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center p-4 text-white rounded-lg'>
                                <p className='text-lg font-semibold mb-2'>{project.description}</p>
                                <p className='text-sm'>{project.frameworks}</p>
                            </div>
                        )}
                    </a>
                ))}
            </div>
            
            {projects.length > 6 && (
                <button
                    className='mt-6 bg-mypurple text-white inter font-semibold py-3 px-6 rounded hover:bg-purple-800 duration-300 transition'
                    onClick={() => setShowMore(!showMore)}
                >
                    {showMore ? 'Show less' : 'Show more'}
                </button>
            )}
        </div>
    );
};

export default ProjectGrid;