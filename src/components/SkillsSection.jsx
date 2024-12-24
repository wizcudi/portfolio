import React, { useState } from 'react'
import { Github } from 'lucide-react';
import Anchor from './Anchor.jsx';
import { useSkills } from '../hooks/useSkills'
import { useProjects  } from '../hooks/useProjects'



export default function SkillsSection() {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const { skills, loading: skillsLoading } = useSkills();
    const { projects, loading: projectsLoading } = useProjects();
    

    const filteredProjects = projects.filter(project => 
        selectedCategory === 'all' || project.category === selectedCategory
    );

    const categories = [
        { id: 'all', label: 'All Projects' },
        { id: 'web development', label: 'Web Development' },
        { id: 'web design', label: 'Web Design' }
    ];

    return (

        <div className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-16">
                {/* Projects Section */}
                <div id="projects-section">
                    <h2 className="text-3xl font-bold text-color30 mb-8">Featured Projects</h2>
                    
                    {/* Category Filter Buttons */}
                    <div className="flex w-three-50:flex-col w-three-50:gap-2 gap-4 mb-8">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`
                                    px-4 py-2 rounded-md text-sm font-medium
                                    ${selectedCategory === category.id 
                                        ? 'bg-color30 text-color60' 
                                        : 'bg-color30/10 text-color30 hover:bg-color30/20'
                                    }
                                    transition-colors
                                `}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>

                    {/* Loading State for Projects */}
                    {projectsLoading ? (
                        <div className="text-center py-8">
                            <p className="text-color30">Loading projects...</p>
                        </div>
                    ) : (
                        /* Projects Grid */
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {filteredProjects.map((project) => (
                                <div 
                                    key={project.id}
                                    className="space-y-4 p-6 border border-color30/20 rounded-lg hover:border-color10a transition-colors"
                                >
                                    <div className="flex w-three-50:flex-col-reverse w-three-50:gap-2 justify-between items-start mb-4">
                                        <h3 className="text-xl font-semibold text-color30">{project.title}</h3>
                                        <a href={project.github} className="text-color10a hover:text-color10a/80">
                                            <Github className="h-6 w-6" />
                                        </a>
                                    </div>
                                    <p className="text-color30/85">{project.description}</p>
                                    <div>
                                        <Anchor 
                                            onClick={project.link}
                                            text="Link"
                                        />
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech, index) => (
                                            <span 
                                                key={`${project.id}-${tech}-${index}`}
                                                className="px-2 py-1 bg-color30/10 text-color30 rounded text-sm"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Skills Section */}
                <div>
                    <h2 className="text-3xl font-bold text-color30 mb-8">Skills & Technologies</h2>
                    
                    {/* Loading State for Skills */}
                    {skillsLoading ? (
                        <div className="text-center py-8">
                            <p className="text-color30">Loading skills...</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {skills.map((skillGroup) => (
                                <div key={skillGroup.id} className="space-y-4">
                                    <h3 className="text-xl font-semibold text-color30">
                                        {skillGroup.category}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {skillGroup.items.map((skill, index) => (
                                            <span 
                                                key={`${skillGroup.id}-${skill}-${index}`}
                                                className="px-3 py-1 bg-color30 text-color60 rounded-full text-sm"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>    
    );
}
