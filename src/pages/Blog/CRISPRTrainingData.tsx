import React from "react";
import BlogPost from "@/components/blog/BlogPost";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CRISPRTrainingData = () => {
  return (
    <BlogPost
      title="CRISPR Training Data"
      date="Dec 10, 2024"
      image="/images/crispr-training-data.png"
      content={
        <>
          <p className="mb-4">
            In my previous blog <Link to="/blog/machine-learning-crispr" className="text-orange-600 hover:text-orange-800 underline">Machine Learning for CRISPR</Link>, I discussed the application of machine learning (ML) in CRISPR. Beyond model architecture and feature selection, the foundation of any robust ML model lies in its data—captured perfectly by the phrase "garbage in, garbage out." In the context of CRISPR research, the datasets used to train ML models are instrumental in ensuring accurate predictions and actionable insights. Often referred to as libraries or screens, these datasets are the backbone of CRISPR ML.
          </p>
          
          <p className="mb-4">
            This blog focuses specifically on bulk CRISPR screens and aims to answer the following questions:
          </p>
          
          <ul className="list-disc pl-5 mb-4">
            <li>What are the types of common CRISPR screens?</li>
            <li>Which data should we use to train and why?</li>
            <li>Where can you find these datasets? (I've curated a detailed list of literature and resources to guide researchers in data exploration.)</li>
            <li>How can alternative datasets provide complementary information and potential features?</li>
          </ul>
          
          <p className="mb-8">
            Feel free to reach out with questions or comments!
          </p>
          
          <h2 className="text-2xl font-bold text-orange-800 mt-8 mb-4 font-space">What Are the Types of Common CRISPR Screens?</h2>
          <p className="mb-4">
            CRISPR screens can be broadly categorized into two types: Genome-Wide (GW) Screens and Tiling Screens. These two approaches offer complementary insights and have distinct biological and technical considerations.
          </p>
          
          <h3 className="text-xl font-bold text-orange-700 mt-6 mb-2 font-space">GW Screens</h3>
          <p className="mb-4">
            GW screens use a limited number of gRNAs (typically 3–10) to target each protein-coding gene in the genome.
          </p>
          
          <ul className="list-disc pl-5 mb-4">
            <li>These screens provide comprehensive coverage across the genome, enabling researchers to study all protein-coding genes simultaneously.</li>
            <li>Guides in GW libraries are carefully curated to ensure on-target efficacy and minimize off-target effects. However, this selection process may introduce biases by excluding guides targeting certain sequences.</li>
          </ul>
          
          <h3 className="text-xl font-bold text-orange-700 mt-6 mb-2 font-space">Tiling Screens</h3>
          <p className="mb-4">
            Tiling screens target every possible sequence in a defined genomic region or a limited number of genes (usually 1–400).
          </p>
          
          <ul className="list-disc pl-5 mb-4">
            <li>Unlike GW screens, tiling datasets provide high-resolution data within specific regions or genes. By targeting every potential sequence, tiling screens offer a detailed understanding of gene regulation, splicing, or promoter activity.</li>
            <li>Because tiling screens exhaustively target all possible guides, they eliminate gRNA selection bias and capture a broader range of biological effects within genes.</li>
          </ul>
          
          <p className="mb-4">
            GW and tiling screens serve as complementary tools in CRISPR research. While GW screens provide a macroscopic view of the genome, enabling the identification of key genes and pathways, tiling screens offer a microscopic lens, revealing detailed functional landscapes within specific genomic regions.
          </p>
          
          <h2 className="text-2xl font-bold text-orange-800 mt-8 mb-4 font-space">Which Data Should We Use to Train and Why?</h2>
          <p className="mb-4">
            Tiling datasets are usually preferred for training purposes due to their comprehensive coverage of individual genes. They provide granular data on guide efficacy within specific genomic contexts, which is essential for developing models that can accurately predict optimal gRNA performance. While offering broad genomic coverage, GW datasets typically provide limited depth of information for individual genes. This makes them less suitable for training models that require detailed insights into gene-specific guide efficacy.
          </p>
          
          <h2 className="text-2xl font-bold text-orange-800 mt-8 mb-4 font-space">Where Can You Find These Datasets?</h2>
          <p className="mb-4">
            Usually, you can find published libraries; however, if you need specific data, you can contact research labs or platforms for collaboration. Below, I have curated some literature that contains data for Bulk CRISPR Cas9 screens that people use to train CRISPR ML models:
          </p>
          
          <ul className="list-disc pl-5 mb-4">
            <li>
              <strong>Knockout:</strong> (Added upon supplementary data from Accounting for small variations in the tracrRNA sequence improves sgRNA activity predictions for CRISPR screening): 
              <a href="https://docs.google.com/spreadsheets/d/1oam4WVQo85yFfjbdAcTtzUXPv6nQYVg7r1abd0So38o/edit?usp=sharing" className="text-orange-600 hover:text-orange-800 underline ml-2" target="_blank" rel="noopener noreferrer">
                Knockout Dataset
              </a>
            </li>
            <li>
              <strong>Interference:</strong> 
              <a href="https://docs.google.com/spreadsheets/d/1n429WN39hCqJHnN-GHW3zFoH4b0-eubFxrbjR65Q_8c/edit?usp=sharing" className="text-orange-600 hover:text-orange-800 underline ml-2" target="_blank" rel="noopener noreferrer">
                Interference Dataset
              </a>
            </li>
            <li>
              <strong>Activation:</strong> 
              <a href="https://docs.google.com/spreadsheets/d/1olo3hYDInil1y3dRz2MNrJZAK5hRgayYGQmgYwX8Rfw/edit?usp=sharing" className="text-orange-600 hover:text-orange-800 underline ml-2" target="_blank" rel="noopener noreferrer">
                Activation Dataset
              </a>
            </li>
          </ul>
          
          <p className="mb-4">
            Let me know what other papers/datasets I should include in the list!
          </p>
          
          <h2 className="text-2xl font-bold text-orange-800 mt-8 mb-4 font-space">Where Can Alternative Datasets Provide Complementary Information for Potential Features?</h2>
          <p className="mb-4">
            In addition to primary bulk CRISPR screens, incorporating supplementary biological data is essential for enriching ML models. Features such as chromatin accessibility, distance to transcription start sites (TSS), and evolutionary conservation provide critical context that can significantly enhance model performance. Below are key data sources and experimental assays that offer these valuable features, facilitating the creation of more accurate and biologically informed ML models.
          </p>
          
          <h3 className="text-xl font-bold text-orange-700 mt-6 mb-2 font-space">The Encyclopedia of DNA Elements (ENCODE) Consortium</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>NHGRI-funded project cataloging functional elements in the human genome</li>
            <li>Diverse assays, including RNA sequencing, comparative genomics, DNA hypersensitivity mapping, DNA methylation profiling, and chromatin immunoprecipitation</li>
          </ul>
          
          <h3 className="text-xl font-bold text-orange-700 mt-6 mb-2 font-space">BioMart</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>Online data management tool for querying, filtering, and exporting large-scale genomic and biological datasets</li>
            <li>Provides access to detailed gene annotations, including gene start, gene end, chromosome, and transcript variants.</li>
          </ul>
          
          <h3 className="text-xl font-bold text-orange-700 mt-6 mb-2 font-space">UCSC Genome Browser</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>Web-based interface for visualizing and exploring genomic data across multiple species hosted by The Genome Bioinformatics Group at the University of California, Santa Cruz</li>
            <li>Provides layered data tracks including gene annotations, epigenetic marks, and TSS</li>
          </ul>
          
          <h3 className="text-xl font-bold text-orange-700 mt-6 mb-2 font-space">CRISPick</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>Created and maintained by The Broad Institute's Genetic Perturbation Platform (GPP) research team</li>
            <li>Computational tool for selecting and evaluating gRNAs for CRISPR experiments</li>
            <li>Detailed information on the nucleotide context surrounding gRNA</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-orange-800 mt-8 mb-4 font-space">Upcoming Post</h2>
          <p className="mb-4">
            I'd like to share some of the key experiences at Broad that have shaped my career and what I'm working on right now!
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
              <Link to="/blog/reflections-broad-institute" className="flex items-center p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
                <div>
                  <p className="font-semibold text-orange-800">Reflections on My Time at the Broad Institute</p>
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
        </>
      }
    />
  );
};

export default CRISPRTrainingData;
