import React from "react";

const HobbiesSection: React.FC = () => {
  return (
    <div id="dance" className="mb-16">
      <h2 className="text-3xl font-bold text-orange-800 mb-6 font-space">Dance</h2>
      
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/2">
          <p className="text-lg text-orange-800 mb-4">
          I am an active ballroom dancer, 
          currently focusing on International Latin and competing at the Gold level. 
          I'm part of the MIT Ballroom Dance Team. 
          You can usually find me at East Coast collegiate competitions.
          </p>
          <p className="text-lg text-orange-800">
          Ballroom dancing introduced me to the world of biomechanics, 
          sparking my interest in movement analysis. 
          BioMe began as a passion project inspired by this curiosity!
          </p>
        </div>
        <div className="md:w-1/2">
          <img 
            src="./images/dance.png" 
            alt="Fengyi with her ballroom dance team" 
            className="rounded-lg shadow-md w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default HobbiesSection;
