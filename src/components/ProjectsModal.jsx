import React from 'react'
import Button from './Button.jsx'
import Anchor from './Anchor.jsx';

export default function ProjectsModal({onClose}) {

    const projects = [
        {
            name:'Workout App',
            description:'Workout App',
            link: 'https://tya-workout.netlify.app/',
            github:'',
        },
        {
            name:'Web Templates',
            description:'Website Template Design',
            link: 'https://tya-template.netlify.app/',
            github:'',
        },
        {
            name:'House Keeping',
            description:'House Keeping Landing Page',
            link: 'https://housekeepingbiz.netlify.app/',
            github:'',
        },
        {
            name:'Elephants Epoxy',
            description:'Epoxy Installer Landing Page',
            link: 'https://wizcudi.github.io/epoxyLanding/',
            github:'',
        },
        {
            name:'Cezars Palace',
            description:'Epoxy Installer Landing Page',
            link: 'https://wizcudi.github.io/cezar/',
            github:'',
        },
        
        {
            name: 'Pokemon Search',
            description: 'Search up any Pokemon',
            link: 'https://pokemon-thankyouamour.netlify.app/',
            github:'',
        },
        {
            name: 'Music Player',
            description: 'Allows users to play, pause, skip, and delete preloaded songs in playlist.',
            link: 'https://wizcudi.github.io/musicPlayer/',
            github:'',
        },
        {
            name:'Indie Discovery',
            description:'Indie artist directory, discover you new favorite artists',
            link: 'https://indie-discovery.netlify.app/',
            github:'',
        },
        
        
        
        {
            name: 'Calorie Counter',
            description: 'Allows users to add food eaten and workouts to track there daily calories burned.',
            link: 'https://wizcudi.github.io/calorieCounter/',
            github:'',
        },
        {
            name: 'RPG Game',
            description: 'Role Playing Game where you fight monsters and dragons. Level up as you play.',
            link: 'https://wizcudi.github.io/rpgGame/',
            github:'',
        },
        
        {
            name: "Shopping Cart",
            description: "Dessert shopping cart project, showcasing CRUD functionalites.",
            link: "https://wizcudi.github.io/ShoppingCart/",
            github:'',
        },
        {
            name: 'Dice Game',
            description: "Try you're luck rolling the dice. ",
            link: 'https://wizcudi.github.io/diceGame/',
            github:'',
        },
        {
            name: "To Do List",
            description: "A simple To Do list.",
            link: "https://wizcudi.github.io/ToDoList/",
            github:'',
        },
    ];

    return (
        <div className='
            fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
            flex flex-col p-8 gap-8 rounded-md shadow-lg 
            max-h-[90vh] w-[90%] max-w-xl overflow-y-auto 
            bg-brand-color-accent-2 border-2 
            border-brand-color-30-percent text-brand-color-20-percent 
            
        '>
            <div className='flex justify-end  '>
                <Button 
                    text='Close'
                    onClick={onClose}
                    className='  
                      
                    '
                />
            </div>

            <h1 className='
                text-3xl font-bold pb-2
                border-b-2 border-brand-color-30-percent
            '>My Projects</h1>
            
            <div className='
                flex flex-col gap-6
            '>
                {projects.map(({name,link, description}) => (
                    <div className='
                        flex flex-col gap-4 rounded-md p-6 
                        bg-brand-color-60-percent border-2
                        border-brand-color-30-percent
                        text-brand-color-30-percent
                        cursor-pointer shadow-md
                        ' 
                        key={name}
                    >
                        <h2 className='
                            text-2xl font-bold
                        '>{name}</h2>
                        <p className='
                            text-lg
                        '>{description}</p>
                        <Anchor
                            onClick={link}
                            text='View Project'
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
