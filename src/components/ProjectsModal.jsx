import React from 'react'
import './ProjectsModal.css'


export default function ProjectsModal({onClose}) {

    const projects = [
        {
            name:'Indie Discovery',
            description:'Indie artist directory, discover you new favorite artists',
            link: 'https://indie-discovery.netlify.app/',
            github:'',
        },
        {
            name:'House Keeping',
            description:'Mock Up Landing page for House Keepers',
            link: 'https://housekeepingbiz.netlify.app/',
            github:'',
        },
        {
            name:'Workout App',
            description:'Creating workouts and save them on cloud',
            link: 'https://tya-workout.netlify.app/',
            github:'',
        },
        {
            name: 'Pokemon Search',
            description: 'Search up any Pokemon by name or ID number',
            link: 'https://pokemon-thankyouamour.netlify.app/',
            github:'',
        },
        {
            name:'Elephants Epoxy',
            description:'Mock Up Landing page for Epoxy Installer',
            link: 'https://wizcudi.github.io/epoxyLanding/',
            github:'',
        },
        {
            name:'Cezars Palace',
            description:'Landing page created for Orlando Epoxy Installer',
            link: 'https://wizcudi.github.io/cezar/',
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
        {
            name: 'Music Player',
            description: 'Allows users to play, pause, skip, and delete preloaded songs in playlist.',
            link: 'https://wizcudi.github.io/musicPlayer/',
            github:'',
        },
        {
            name: 'Platformer Game',
            description: 'Mario Bros type of game with 2 check points. Best played on desktop.',
            link: 'https://wizcudi.github.io/PlatformerGame/',
            github:'',
        },
        
    ];

    return (
        <div className='project-modal'>
            <button className='modal-close-btn' onClick={onClose}>Close</button>
            <h1>My Projects</h1>
            <div className='projects-area'>
                {projects.map(({name,link, description}) => (
                    <div className='project' key={name}>
                        <h2>{name}</h2>
                        <p>{description}</p>
                        <a href={link}>View Project</a>
                    </div>
                ))}
            </div>
        </div>
    )
}
