import React from 'react';
import SkillsSection from './SkillsSection';
import ContactSection from './ContactSection';

import { ArrowRight, Code, Laptop, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          <p className="text-color30 font-medium">React Developer</p>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-color30 ">
            Hi I'm <span className="text-color10a italic">Tony</span>,<br/>
            a passionate Web Developer
          </h1>
          
          <p className="text-xl text-color30/85  max-w-2xl">
            I'm an emerging developer with a strong foundation in React and modern web technologies. 
            Actively seeking opportunities to create impactful web solutions and grow alongside forward-thinking clients.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="inline-flex items-center px-6 py-3 bg-color30 hover:bg-color30/80 text-color60 font-medium rounded-lg transition-colors">
              Let's Work Together
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button 
                className="
                    inline-flex px-6 py-3 
                    rounded-lg transition-colors
                    border border-color10a 
                    text-color10a font-medium 
                    hover:bg-color10a hover:text-color60
                "
            >
              View Projects
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-color30  rounded-lg">
                <Zap className="h-6 w-6 text-color10a " />
              </div>
              <div>
                <h3 className="font-medium ">Fast Performance</h3>
                <p className="">Lightning-quick load times and smooth interactions</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-2 bg-color30  rounded-lg">
                
                <Code className="h-6 w-6 text-color10a" />
              </div>
              <div>
                <h3 className="font-medium ">Clean Code</h3>
                <p className="">Maintainable, scalable, and well-documented solutions</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-2 bg-color30 rounded-lg">
                
                <Laptop className="h-6 w-6 text-color10a" />
              </div>
              <div>
                <h3 className="font-medium ">Responsive Design</h3>
                <p className="">Perfect experience across all devices</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default function Home() {
    return (
        <>
            <HeroSection />
            <SkillsSection />
            <ContactSection />
        </>
    )
}
