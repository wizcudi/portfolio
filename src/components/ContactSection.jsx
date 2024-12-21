import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';


export default function ContactSection () {

    const socials = [
        { icon: <Mail />, label: 'Email', link: 'mailto:thankyouamour@gmail.com' },
        { icon: <Linkedin />, label: 'LinkedIn', link: 'https://www.linkedin.com/in/thankyouamour' },
        { icon: <Github />, label: 'GitHub', link: 'https://github.com/wizcudi' }
    ];

    return (
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-color30">
            <div className="max-w-4xl mx-auto text-center space-y-8">
                <h2 className="text-3xl font-bold text-color60">Let's Connect</h2>
                <p className="text-xl text-color60/85">Ready to collaborate or have a question? I'd love to hear from you.</p>
                
                <div className="flex justify-center gap-8">
                    {socials.map(({ icon, label, link }) => (
                        <a
                            key={label}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center gap-2"
                        >
                            <div className="p-4 bg-color60 text-color30 rounded-full group-hover:bg-color10a transition-colors">
                                {React.cloneElement(icon, { className: "h-5 w-5" })}
                            </div>
                            <span className="text-color60">{label}</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}
