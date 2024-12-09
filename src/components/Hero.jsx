import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import myImage from '../assets/TonyStool.JPG';
import ProjectsModal from './ProjectsModal.jsx';
import Button from './Button.jsx';
import Anchor from './Anchor.jsx';

export default function Hero() {

    const [showModal, setShowModal] = useState(false);


    return (
        <div className='
            flex 
            flex-row
            w-seven-100:flex-col
           
            gap-y-12
            gap-x-12
            md:max-w-5xl

            sm:flex-row
            
            py-10
            
            
        '>

            <div className='
                flex
                flex-col
                text-brand-color-30-percent
                gap-y-4
            '>
                <div
                    className='
                        flex
                        flex-col
                        gap-3

                        max-w-sm    
                    '
                >
                    <div className='
                        flex
                        flex-col
                        
                    '>
                        <h1 className='
                            text-3xl
                            font-bold
                        '>Tony Saint-Amour</h1>
                        <h2 className='
                            text-3xl
                            font-semibold
                        '>Web Creator</h2>
                    </div>

                    <p className='
                        text-xl
                        
                    '>
                        Creating out of curiosity, to learn and grow. 
                        To build functional designs that solve problems.
                    </p>
                </div>

                <div className='
                    flex
                    flex-col
                    
                    gap-2
                    w-full
                    
                    
                '>
                    <Button 
                        onClick={() => setShowModal(true)} 
                        text='Projects' 

                        
                    />

                    {showModal && createPortal(
                        <ProjectsModal onClose={() => setShowModal(false)} />,
                        document.body
                    )}

                    <Anchor 
                        onClick={"mailto:thankyouamour@gmail.com"}
                        text='contact' 

                        bg='bg-brand-color-30-percent'
                        font='text-brand-color-accent-2 font-bold text-lg'
                        hover='hover:bg-brand-color-accent-1 hover:text-brand-color-30-percent hover:border hover:border-brand-color-30-percent'
                        active='hover:bg-brand-color-accent-1 hover:text-brand-color-30-percent hover:border hover:border-brand-color-30-percent'
                    />
                </div>

            </div>

            <div className='
                flex
                justify-center
                
                
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
