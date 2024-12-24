import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import ProjectsManager from './ProjectsManager';
import SkillsManager from './SkillsManager';
import BlogEditor from './BlogEditor';

export default function AdminDashboard() {
    const { logout } = useAuth();
    
    const [activeTab, setActiveTab] = useState('projects');

    return (
        <div className="min-h-screen bg-color60 p-8">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-color30">Admin Dashboard</h1>
                    <button
                        onClick={logout}
                        className="px-4 py-2 bg-color30 text-color60 rounded hover:bg-color30/80"
                    >
                        Logout
                    </button>
                </div>

                {/* Tab Navigation */}
                <div className="flex gap-4 mb-8">
                    <button
                        onClick={() => setActiveTab('projects')}
                        className={`px-4 py-2 rounded-md ${
                            activeTab === 'projects' 
                                ? 'bg-color30 text-color60' 
                                : 'bg-color30/10 text-color30 hover:bg-color30/20'
                        }`}
                    >
                        Projects
                    </button>
                    <button
                        onClick={() => setActiveTab('skills')}
                        className={`px-4 py-2 rounded-md ${
                            activeTab === 'skills' 
                                ? 'bg-color30 text-color60' 
                                : 'bg-color30/10 text-color30 hover:bg-color30/20'
                        }`}
                    >
                        Skills
                    </button>
                    <button
                        onClick={() => setActiveTab('blog')}
                        className={`px-4 py-2 rounded-md ${
                            activeTab === 'blog' 
                                ? 'bg-color30 text-color60' 
                                : 'bg-color30/10 text-color30 hover:bg-color30/20'
                        }`}
                    >
                        Blog
                    </button>
                </div>

                {/* Content Area */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    {activeTab === 'projects' && <ProjectsManager />}
                    {activeTab === 'skills' && <SkillsManager />}
                    {activeTab === 'blog' && <BlogEditor />}
                </div>
            </div>
        </div>
    )
}
