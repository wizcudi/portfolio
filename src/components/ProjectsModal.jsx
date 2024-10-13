import React from 'react'


export default function ProjectsModal({onClose}) {

    const projects = [
        {
            name:'Templates',
            description:'Custom component templates',
            link: 'https://tya-template.netlify.app/',
            github:'',
        },
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
        <div className='
            flex 
            flex-col
            fixed 
            top-1/2 
            left-1/2 
            transform -translate-x-1/2 -translate-y-1/2 
            bg-white 
            p-8 
            rounded-lg 
            shadow-lg 
            max-h-[80vh] 
            overflow-y-auto 
            w-4/5
            max-w-xl 
            gap-8
        '>
            <button 
                className='
                    self-end 
                    px-4 
                    py-2 
                    
                    font-semibold
                    rounded 

                    bg-blue-600 
                    hover:bg-blue-800
                    text-white 

                    cursor-pointer 
                     
                    
                ' 
                onClick={onClose}
            >Close</button>

            <h1 
                className='
                    text-3xl
                    font-bold
                    pb-2
                    border-b-2 border-blue-600
                '
            >My Projects</h1>
            
            <div 
                className='
                    flex
                    flex-col 
                    gap-6
                '
            >
                {projects.map(({name,link, description}) => (
                    <div 
                        className='
                            flex 
                            flex-col 
                            gap-2
                            
                            rounded-lg 
                            p-6 

                            border-2 
                            border-blue-600

                            cursor-pointer

                            shadow-md
                        ' 
                        key={name}
                    >
                        <h2
                            className='
                                text-2xl
                                font-bold
                            '
                        >{name}</h2>
                        <p
                            className='
                                text-lg
                            '
                        >{description}</p>
                        <a 
                            href={link}
                            className='
                                border-2
                                border-blue-600
                                rounded
                                px-4
                                py-2
                                mt-2
                                max-w-64

                                font-semibold
                                text-blue-600
                                text-center
                                text-lg
                                hover:text-white
                                hover:bg-blue-600
                            '
                        >View Project</a>
                    </div>
                ))}
            </div>
        </div>
    )
}
