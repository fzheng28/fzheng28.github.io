import React from "react";
import BlogPost from "@/components/blog/BlogPost";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ReflectionsBroadInstitute = () => {
  return (
    <BlogPost
      title="Reflections on My Time at the Broad Institute"
      date="Dec 13, 2025"
      image="/images/broad-institute.png"
      content={
        <div>
          <p className="mb-4">
            The Broad Institute is one of the world's best scientific research institutions, redefining how science is conducted and setting a new standard for the future of biomedical discovery. From pioneering contributions to human genome research to advancements in CRISPR gene-editing technology and transformative work in cancer genomics, the Broad has set—and keeps resetting—the bar for what's possible.
          </p>
          
          <p className="mb-4">
            I joined the Broad in the fall of 2021, during the height of the COVID-19 pandemic. I arrived with a background in mathematics and statistics and an aspiration to do something meaningful, yet I had no formal biology training. Even so, I found myself welcomed into a place where everyone—from scientists to engineers and computational experts—was committed to working together toward a common goal: improving human health. Over the next three years, until I left in November 2024 to pursue my startup full-time, this environment shaped my thinking and pushed me to grow in ways I never anticipated.
          </p>
          
          <h2 className="text-2xl font-bold text-orange-800 mt-8 mb-4 font-space">Why I Joined</h2>
          <p className="mb-4">
            Science is about solving meaningful problems, and the Broad offered the perfect environment for me to do just that. In particular, CRISPR was a tool that could directly impact human lives by offering hope for conditions previously thought untreatable.
          </p>
          
          <p className="mb-4">
            As a math/stats major with no formal biology background, my career path could have easily gone toward tech, finance, or consulting—fields where many of my peers gravitated. In fact, I had interned in a variety of industries to explore my options. But the pandemic influenced my perspective. Watching healthcare workers and researchers step up fearlessly to save lives inspired me to pivot toward biomedicine. I wanted to understand the science that made such interventions possible and contribute to work that could tangibly improve people's health and well-being.
          </p>
          
          <h2 className="text-2xl font-bold text-orange-800 mt-8 mb-4 font-space">My Experience at Broad</h2>
          <p className="mb-4">
            I joined the Genetic Perturbation Platform (GPP) R&D team under John Doench and entered the Broad's Biomedical Post-Baccalaureate Scholars program. From day one, it was clear that everyone around me—no matter their role—shared a blend of curiosity, rigor, and generosity. Our conversations moved seamlessly from interpreting results at the bench to brainstorming computational strategies at the keyboard, and I found that I could contribute meaningfully despite my initial lack of biology training. People were always willing to explain a concept or troubleshoot a dataset, and that support helped me grow more confident in my interdisciplinary skill set.
          </p>
          
          <p className="mb-4">
            What excited me most was seeing how the computational insights I worked on turned into real-world applications. I spent my time building data analysis pipelines, designing guide RNAs for CRISPR screens, and applying machine learning to large-scale data. In doing so, I could feel the immediate relevance of the work—our results helped shape experimental plans and open new avenues for CRISPR design.
          </p>
          
          <h2 className="text-2xl font-bold text-orange-800 mt-8 mb-4 font-space">Highlights of My Projects</h2>
          <h3 className="text-xl font-bold text-orange-700 mt-6 mb-2 font-space">Optimizing Cas12a CRISPRa</h3>
          <p className="mb-4">
            (<a href="https://www.cell.com/cell-genomics/fulltext/S2666-979X(23)00184-2" className="text-orange-600 hover:text-orange-800 underline" target="_blank" rel="noopener noreferrer">
              Optimization of Cas12a for multiplexed genome-scale transcriptional activation
            </a>; co-first author on Cell Genomics)
          </p>
          
          <p className="mb-4">
            My primary focus was on refining Cas12a for CRISPRa applications, enabling simultaneous activation of multiple genes. This technology could accelerate complex genetic studies and, in the long run, help target factors like the Yamanaka genes that influence cell states.
          </p>
          
          <p className="mb-4">
            I designed and analyzed both the primary and validation CRISPRa screens, revealing growth modifiers and genes influencing sensitivity to MEK inhibition. I also helped establish guidelines for multiplexed guide design and built a bulk RNA-seq analysis pipeline to connect genetic perturbations with their molecular outcomes.
          </p>
          
          <h3 className="text-xl font-bold text-orange-700 mt-6 mb-2 font-space">Cas9 CRISPRi Guide Selection with Machine Learning</h3>
          <p className="mb-4">
            In another project, I worked on improving guide prediction for Cas9 CRISPR interference (CRISPRi). By integrating CRISPRi tiling data with other genomic features like chromatin accessibility, I trained machine learning models to better understand how different guide choices affect gene repression. The insights from this work helped refine the criteria for designing effective CRISPRi experiments.
          </p>
          
          <p className="mb-4">
            Special thanks to my colleagues at the Broad Institute for their collaboration and support throughout these projects. Your expertise and dedication made these achievements possible.
          </p>
          
          <h2 className="text-2xl font-bold text-orange-800 mt-8 mb-4 font-space">Transition Point and Looking Ahead</h2>
          <p className="mb-4">
            When I started at the Broad, I imagined following a common trajectory: spend a few years gaining experience, then head off to a PhD program. After all, that was what many Broadies did, and it seemed like the logical next step for someone who'd embraced research.
          </p>
          
          <p className="mb-4">
            I knew I loved the impact of science, but I also realized that my passion extended beyond academic discovery alone. I wanted to build something people need and want and translate it into real-world tools. After over a year of learning about different fields, the prospect of founding a startup, where I could directly influence the direction and application of my work, began to feel more compelling than the traditional academic route.
          </p>
          
          <p className="mb-4">
            Ultimately, I decided to leave the Broad. It was a tough choice—leaving a place where I'd learned so much and formed so many meaningful connections wasn't easy. But by stepping away, I opened up a new path for myself, one that aligns more closely with my vision of making an immediate difference.
          </p>
          
          <h2 className="text-2xl font-bold text-orange-800 mt-8 mb-4 font-space">Looking Ahead</h2>
          <p className="mb-4">
            As I embark on this startup journey, I carry with me the lessons, collaborations, and inspiration I found at the Broad. The rigor, creativity, and compassion that defined my experience there continue to guide my approach to problem-solving and innovation. I'm grateful for the opportunity to have been part of such groundbreaking work, and I'm excited to share what comes next as I forge ahead on a new adventure.
          </p>
          
          <p className="mb-4">
            Stay tuned—there's so much more to come.
          </p>
          
          <h2 className="text-2xl font-bold text-orange-800 mt-8 mb-4 font-space">Upcoming Post</h2>
          <p className="mb-4">
            I will talk about what BioMe does and the motivation behind it.
          </p>
          
          <div className="mt-12 border-t border-orange-200 pt-6">
            <h3 className="text-xl font-bold text-orange-800 mb-4 font-space">Other Blog Posts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link to="/blog/machine-learning-crispr" className="flex items-center p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
                <div>
                  <p className="font-semibold text-orange-800">Machine Learning for CRISPR</p>
                  <p className="text-sm text-orange-700 flex items-center mt-1">Read more <ArrowRight className="h-3 w-3 ml-1" /></p>
                </div>
              </Link>
              <Link to="/blog/crispr-training-data" className="flex items-center p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
                <div>
                  <p className="font-semibold text-orange-800">CRISPR Training Data</p>
                  <p className="text-sm text-orange-700 flex items-center mt-1">Read more <ArrowRight className="h-3 w-3 ml-1" /></p>
                </div>
              </Link>
              <Link to="/blog/biome" className="flex items-center p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
                <div>
                  <p className="font-semibold text-orange-800">BioMe's Value Proposition</p>
                  <p className="text-sm text-orange-700 flex items-center mt-1">Read more <ArrowRight className="h-3 w-3 ml-1" /></p>
                </div>
              </Link>
              <Link to="/blog/cnn-training-tutorial" className="flex items-center p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
                <div>
                  <p className="font-semibold text-orange-800">Action Recognition CNN Training Tutorial</p>
                  <p className="text-sm text-orange-700 flex items-center mt-1">Read more <ArrowRight className="h-3 w-3 ml-1" /></p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default ReflectionsBroadInstitute;
