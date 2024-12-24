import { useState, useEffect } from 'react'
import { auth } from '../firebase/config'
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';

export function useAuth() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const login = async (email, password) => {
        try {
            setError(null);
            await signInWithEmailAndPassword(auth, email, password);
        } catch (err) {
            setError('Failed to login. Please check your credentials.');
            console.error('Login error:', err);
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
        } catch (err) {
            setError('Failed to logout');
            console.error('Logout error:', err);
        }
    };

    return { user, loading, error, login, logout };
}
