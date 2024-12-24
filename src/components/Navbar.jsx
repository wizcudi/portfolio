import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Import icons for mobile menu


export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

     // Helper function to determine if a link is active
     const isActive = (path) => {
        if (path === '/') {
            return location.pathname === '/';
        }
        return location.pathname.startsWith(path);
    };

    // Navigation items array for easier maintenance
    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/blog', label: 'Blog' },
        { path: '/dashboard', label: 'Dashboard' }
    ];

    return (
        <nav className="bg-color60 border-b border-color30/10">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo/Brand */}
                    <Link 
                        to="/" 
                        className="text-xl font-bold text-color30 hover:text-color10a transition-colors"
                    >
                        TYA
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="flex space-x-8 w-seven-50:hidden">
                        {navItems.map(({ path, label }) => (
                            <Link
                                key={path}
                                to={path}
                                className={`${
                                    isActive(path)
                                        ? 'text-color10a'
                                        : 'text-color30 hover:text-color10a'
                                } transition-colors`}
                            >
                                {label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="hidden w-seven-50:block">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-color30 hover:text-color10a p-2"
                        >
                            {isMobileMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className={`hidden ${isMobileMenuOpen ? 'w-seven-50:block' : ''}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 bg-color60 border-t border-color30/10">
                    {navItems.map(({ path, label }) => (
                        <Link
                            key={path}
                            to={path}
                            className={`${
                                isActive(path)
                                    ? 'text-color10a'
                                    : 'text-color30 hover:text-color10a'
                            } block px-3 py-2 text-base transition-colors`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
