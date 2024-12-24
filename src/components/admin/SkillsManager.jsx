import React, { useState } from 'react';
import { useSkills } from '../../hooks/useSkills';

export default function SkillsManager() {
    const { skills, addSkillCategory, deleteSkillCategory } = useSkills();

    const [newCategory, setNewCategory] = useState('');
    const [newItems, setNewItems] = useState('');

    const handleAddSkill = async (e) => {
        e.preventDefault();
        if (!newCategory || !newItems) return;
        
        // Convert comma-separated items to array and trim whitespace
        const itemsArray = newItems.split(',').map(item => item.trim());
        
        await addSkillCategory(newCategory, itemsArray);
        setNewCategory('');
        setNewItems('');
    };

    return (
        <div className="space-y-8">
            {/* Add New Skill Category */}
            <div>
                <h2 className="text-2xl font-bold text-color30 mb-4">Add New Skill Category</h2>
                <form onSubmit={handleAddSkill} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-color30 mb-1">
                            Category Name
                        </label>
                        <input
                            type="text"
                            value={newCategory}
                            onChange={(e) => setNewCategory(e.target.value)}
                            className="w-full px-3 py-2 border border-color30/20 rounded-md"
                            placeholder="e.g., Frontend"
                        />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-color30 mb-1">
                            Skills (comma-separated)
                        </label>
                        <input
                            type="text"
                            value={newItems}
                            onChange={(e) => setNewItems(e.target.value)}
                            className="w-full px-3 py-2 border border-color30/20 rounded-md"
                            placeholder="e.g., React, JavaScript, CSS"
                        />
                    </div>

                    <button
                        type="submit"
                        className="px-4 py-2 bg-color30 text-color60 rounded hover:bg-color30/80"
                    >
                        Add Skill Category
                    </button>
                </form>
            </div>

            {/* Existing Skills */}
            <div>
                <h2 className="text-2xl font-bold text-color30 mb-4">Existing Skills</h2>
                <div className="space-y-6">
                    {skills.map((skillGroup) => (
                        <div key={skillGroup.id} className="border-b border-color30/10 pb-4 last:border-0">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-lg font-medium text-color30">
                                    {skillGroup.category}
                                </h3>
                                <button
                                    onClick={() => deleteSkillCategory(skillGroup.id)}
                                    className="text-red-500 hover:text-red-700"
                                >
                                    Delete
                                </button>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {skillGroup.items.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="px-2 py-1 bg-color30/10 text-color30 rounded-full text-sm"
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
    )
}
