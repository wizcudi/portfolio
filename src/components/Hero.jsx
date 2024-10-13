import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import myImage from '../assets/TonyStool.JPG';
import ProjectsModal from './ProjectsModal.jsx';

export default function Hero() {

    const [showModal, setShowModal] = useState(false);


    return (
        <div className='
            flex 
            flex-col
            pb-8
            gap-4

            md:max-w-5xl

            sm:flex-row
            
            
        '>

            <div className='
                flex
                flex-col
                gap-4
                
                py-6
                
                sm:w-2/3

            '>
                <div className='
                    flex
                    flex-col
                    

                    text-center
                    sm:text-start
                '>
                    <h1 className='
                            font-bold
                            text-4xl
                            
                            md:text-5xl
                            lg:text-6xl
                    '>Tony Saint-Amour</h1>
                    <h2 className='
                            font-bold
                            text-3xl
                            
                            md:text-4xl
                            lg:text-5xl
                    '>React Web Developer</h2>
                </div>

                <p className='
                    text-xl
                    text-center

                    md:text-2xl

                    sm:text-start
                '>
                    Bringing a orchestrator's mindset to web development. 
                    My passion lies in creativity, blending design and 
                    functionality.
                </p>
                    
                <div className='
                    flex
                    flex-col
                    gap-2

                    mx-auto

                    md:mx-0
                    
                    max-w-md
                    w-full
                    px-8
                    mt-2
                    sm:px-0

                '>

                    <button 
                            onClick={() => setShowModal(true)} 
                            className='
                                border-2
                                border-black
                                text-lg
                                px-2
                                py-1
                                rounded
                                capitalize
                                font-bold

                                hover:bg-black 
                                hover:text-white

                            '
                        >
                            Projects
                    </button>

                    {showModal && createPortal(
                            <ProjectsModal onClose={() => setShowModal(false)} />,
                            document.body
                    )}

                    <a 
                        className='
                            flex
                            justify-center
                            border-2 
                            border-black
                            text-lg
                            px-2
                            py-1
                            rounded
                            capitalize
                            font-bold
                            hover:bg-black 
                            hover:text-white
                        ' 
                        href="mailto:thankyouamour@gmail.com" 
                    >contact</a>
                    
                </div>
            </div>

            <div className='
                flex
                justify-center
                
                sm:w-1/2
            '>
                <img 
                    className='
                        max-w-80
                        w-full

                        drop-shadow
                        rounded-sm
                        
                    ' 
                    src={myImage} 
                    alt='Tony Saint-Amour' 
                />
            </div>

        </div>
    )
}
