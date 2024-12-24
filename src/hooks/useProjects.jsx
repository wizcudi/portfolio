import { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

export function useProjects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch all projects
    const fetchProjects = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'projects'));
            const projectsData = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setProjects(projectsData);
            setLoading(false);
        } catch (err) {
            setError('Failed to fetch projects');
            setLoading(false);
            console.error('Error fetching projects:', err);
        }
    };

    // Add a new project
    const addProject = async (projectData) => {
        try {
            await addDoc(collection(db, 'projects'), {
                ...projectData,
                tech: projectData.tech.split(',').map(item => item.trim()) // Convert comma-separated string to array
            });
            await fetchProjects(); // Refresh the projects list
        } catch (err) {
            setError('Failed to add project');
            console.error('Error adding project:', err);
        }
    };

    // Delete a project
    const deleteProject = async (projectId) => {
        try {
            await deleteDoc(doc(db, 'projects', projectId));
            await fetchProjects(); // Refresh the projects list
        } catch (err) {
            setError('Failed to delete project');
            console.error('Error deleting project:', err);
        }
    };

     // Update a project
     const updateProject = async (projectId, updatedData) => {
        try {
            const projectRef = doc(db, 'projects', projectId);
            await updateDoc(projectRef, {
                ...updatedData,
                tech: Array.isArray(updatedData.tech) 
                    ? updatedData.tech 
                    : updatedData.tech.split(',').map(item => item.trim())
            });
            await fetchProjects(); // Refresh the projects list
        } catch (err) {
            setError('Failed to update project');
            console.error('Error updating project:', err);
        }
    };

    // Load projects on component mount
    useEffect(() => {
        fetchProjects();
    }, []);

    return {
        projects,
        loading,
        error,
        addProject,
        deleteProject,
        updateProject,
        refreshProjects: fetchProjects
    };
}
