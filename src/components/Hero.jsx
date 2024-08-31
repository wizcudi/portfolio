import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import myImage from '../assets/TonyStool.JPG';
import ProjectsModal from './ProjectsModal.jsx';
import './Hero.css'

export default function Hero() {

    const [showModal, setShowModal] = useState(false);


    return (
        <div className='hero'>

            <div className='hero-bio'>
                <div className='hero-content'>
                    <div className='hero-heading-area'>
                        <h1 className='hero-h1'>Tony Saint-Amour</h1>
                        <h2 className='hero-h2'>React Web Developer</h2>
                    </div>

                    <p className='hero-p'>
                        Bringing a orchestrator's mindset to web development. 
                        My passion lies in creativity, blending design and 
                        functionality.
                    </p>
                    
                    <div className='project-contact'>

                        <button 
                            onClick={() => setShowModal(true)} 
                            className='hero-projects-btn'
                        >
                            Projects
                        </button>

                        {showModal && createPortal(
                            <ProjectsModal onClose={() => setShowModal(false)} />,
                            document.body
                        )}

                        <a className='hero-email' href="mailto:thankyouamour@gmail.com" >contact</a>
                    
                    </div>
                </div>
            </div>

            <div className='hero-img-div'>
                <img className='hero-img' src={myImage} alt='Tony Saint-Amour' />
            </div>

        </div>
    )
}
