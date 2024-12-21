import React from 'react'
import { Github } from 'lucide-react';
import Anchor from './Anchor.jsx';

export default function SkillsSection() {
    const skills = [
        { category: 'Frontend', items: ['React', 'JavaScript', 'Tailwind CSS'] },
        { category: 'Tools', items: ['Git', 'VS Code', 'npm',] },
        { category: 'Design', items: [ 'Responsive Design', 'UI/UX Principles'] }
    ];
    
    const projects = [
        {
          title: 'Workout Tracker App',
          description: 'Full-featured fitness companion that helps users create and save custom workouts while tracking their nutrition. Integrates with a food database API for detailed nutritional information.',
          tech: ['React', 'Tailwind', 'Firebase', 'APIs'],
          github: 'https://github.com/wizcudi/workoutApp',
          link: "https://tya-workout.netlify.app/"
        },
        {
          title: 'Pokemon Search',
          description: 'Interactive Pokemon database allowing users to search and discover detailed information about any Pokemon. Features real-time search filtering and comprehensive stats display using PokeAPI.',
          tech: ['React', 'APIs', 'CSS'],
          github: 'https://github.com/wizcudi/Pokemon',
          link: "https://pokemon-thankyouamour.netlify.app/"
        }
    ];

    return (
        <div className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-16">

                {/* Projects Section */}
                <div>
                    <h2 className="text-3xl font-bold text-color30 mb-8">Featured Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projects.map((project) => (
                        <div 
                            key={project.title}
                            className=" space-y-4 p-6 border border-color30/20 rounded-lg hover:border-color10a transition-colors"
                        >
                            <div className="flex justify-between items-start mb-4">
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
                                {project.tech.map((tech) => (
                                    <span 
                                        key={tech}
                                        className="px-2 py-1 bg-color30/10 text-color30 rounded text-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        ))}
                    </div>
                </div>

                {/* Skills Section */}
                <div>
                    <h2 className="text-3xl font-bold text-color30 mb-8">Skills & Technologies</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {skills.map((skillGroup) => (
                        <div key={skillGroup.category} className="space-y-4">
                            <h3 className="text-xl font-semibold text-color30">{skillGroup.category}</h3>
                            <div className="flex flex-wrap gap-2">
                            {skillGroup.items.map((skill) => (
                                <span 
                                key={skill}
                                className="px-3 py-1 bg-color30 text-color60 rounded-full text-sm"
                                >
                                {skill}
                                </span>
                            ))}
                            </div>
                        </div>
                        ))}
                    </div>
                </div>

                
            </div>
        </div>
    )
}
