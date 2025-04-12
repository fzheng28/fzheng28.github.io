import React from "react";

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-orange-900 mb-8 leading-tight">
          Fengyi Zheng
        </h1>
        
        <div className="space-y-6 text-lg text-orange-800">
          <p>
            Currently, I'm building <a href="#/blog/biome" className="border-b border-orange-400 hover:border-orange-600">BioMe</a>, 
            where we're accelerating drug development for neurodegenerative disorders with AI-powered motion tracking,
            making clinical trials more objective, efficient, and patient-friendly by transforming how motor function is measured.
          </p>
          
          <p>
            Previously, I worked at the <a href="#/blog/reflections-broad-institute" className="border-b border-orange-400 hover:border-orange-600">Broad Institute of MIT and Harvard</a> contributing 
            to research in <a href="#/blog/machine-learning-crispr" className="border-b border-orange-400 hover:border-orange-600">CRISPR technology</a>.
          </p>

          <p>
            Before that, I interned at Amazon,
            the City of Madison, and The Guardian Life Insurance Company of America.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
