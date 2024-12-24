import React, { useState }  from 'react'
import { useProjects } from '../../hooks/useProjects';

export default function ProjectsManager() {
    const { projects, addProject, deleteProject, updateProject, loading, error } = useProjects();
    const [isEditing, setIsEditing] = useState(false);
    const [editingProject, setEditingProject] = useState(null);

    // Form state
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        tech: '',
        github: '',
        link: '',
        category: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isEditing && editingProject) {
            await updateProject(editingProject.id, formData);
            setIsEditing(false);
            setEditingProject(null);
        } else {
            await addProject(formData);
        }
        // Reset form
        setFormData({
            title: '',
            description: '',
            tech: '',
            github: '',
            link: '',
            category: ''
        });
    };

    const startEditing = (project) => {
        setIsEditing(true);
        setEditingProject(project);
        setFormData({
            ...project,
            tech: project.tech.join(', ') // Convert array back to comma-separated string
        });
    };

    return (
        <div className="space-y-8">
            <h2 className="text-2xl font-bold text-color30">
                {isEditing ? 'Edit Project' : 'Add New Project'}
            </h2>

            {/* Project Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-color30 mb-1">
                            Project Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-color30/20 rounded-md"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-color30 mb-1">
                            Category
                        </label>
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-color30/20 rounded-md"
                            required
                        >
                            <option value="web development">Web Development</option>
                            <option value="web design">Web Design</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-color30 mb-1">
                        Description
                    </label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-color30/20 rounded-md"
                        rows={4}
                        required
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-color30 mb-1">
                            Technologies (comma-separated)
                        </label>
                        <input
                            type="text"
                            name="tech"
                            value={formData.tech}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-color30/20 rounded-md"
                            placeholder="React, Tailwind, Firebase"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-color30 mb-1">
                            GitHub Link
                        </label>
                        <input
                            type="url"
                            name="github"
                            value={formData.github}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-color30/20 rounded-md"
                            required
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-color30 mb-1">
                        Live Link
                    </label>
                    <input
                        type="url"
                        name="link"
                        value={formData.link}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-color30/20 rounded-md"
                        required
                    />
                </div>

                <div className="flex gap-4">
                    <button
                        type="submit"
                        className="px-4 py-2 bg-color30 text-color60 rounded hover:bg-color30/80"
                    >
                        {isEditing ? 'Update Project' : 'Add Project'}
                    </button>
                    {isEditing && (
                        <button
                            type="button"
                            onClick={() => {
                                setIsEditing(false);
                                setEditingProject(null);
                                setFormData({
                                    title: '',
                                    description: '',
                                    tech: '',
                                    github: '',
                                    link: '',
                                    category: 'web development'
                                });
                            }}
                            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                        >
                            Cancel Edit
                        </button>
                    )}
                </div>
            </form>

            {/* Existing Projects List */}
            <div className="mt-8">
                <h2 className="text-2xl font-bold text-color30 mb-4">Existing Projects</h2>
                <div className="space-y-4">
                    {projects.map((project) => (
                        <div 
                            key={project.id}
                            className="border border-color30/20 rounded-lg p-4 space-y-2"
                        >
                            <div className="flex justify-between items-start">
                                <h3 className="text-xl font-semibold text-color30">
                                    {project.title}
                                </h3>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => startEditing(project)}
                                        className="text-blue-500 hover:text-blue-700"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => deleteProject(project.id)}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                            <p className="text-color30/85">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, index) => (
                                    <span 
                                        key={index}
                                        className="px-2 py-1 bg-color30/10 text-color30 rounded text-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <p className="text-sm text-color30/70">Category: {project.category}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
