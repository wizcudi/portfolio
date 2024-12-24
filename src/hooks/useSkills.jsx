import React, { useState, useEffect } from 'react'
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/config'

export function useSkills() {
    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch skills from Firestore
    const fetchSkills = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'skills'));
            const skillsData = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setSkills(skillsData);
            setLoading(false);
        } catch (err) {
            setError('Failed to fetch skills');
            setLoading(false);
            console.error('Error fetching skills:', err);
        }
    };

    // Add a new skill category
    const addSkillCategory = async (category, items) => {
        try {
            await addDoc(collection(db, 'skills'), {
                category,
                items
            });
            await fetchSkills(); // Refresh the skills list
        } catch (err) {
            setError('Failed to add skill category');
            console.error('Error adding skill category:', err);
        }
    };

    // Delete a skill category
    const deleteSkillCategory = async (skillId) => {
        try {
            await deleteDoc(doc(db, 'skills', skillId));
            await fetchSkills(); // Refresh the skills list
        } catch (err) {
            setError('Failed to delete skill category');
            console.error('Error deleting skill category:', err);
        }
    };

    // Load skills on component mount
    useEffect(() => {
        fetchSkills();
    }, []);

    return {
        skills,
        loading,
        error,
        addSkillCategory,
        deleteSkillCategory,
        refreshSkills: fetchSkills
    };
}
