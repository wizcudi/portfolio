import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {useAuth} from '../../hooks/useAuth';

export default function AdminLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, error } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(email, password);
        if (!error) {
            navigate('/dashboard');
        }
    };

    return (
        <div className="min-h-screen bg-color60 flex items-center justify-center px-4">
            <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
                <div>
                    <h2 className="text-3xl font-bold text-color30 text-center">Admin Login</h2>
                </div>
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                    {error && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                            {error}
                        </div>
                    )}
                    
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-color30">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-color30/20 rounded-md shadow-sm focus:outline-none focus:ring-color10a focus:border-color10a"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-color30">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-color30/20 rounded-md shadow-sm focus:outline-none focus:ring-color10a focus:border-color10a"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-color60 bg-color30 hover:bg-color30/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-color10a"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}
