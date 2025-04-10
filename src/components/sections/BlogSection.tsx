import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const BlogSection: React.FC = () => {
  return (
    <div id="blogs" className="mb-16">
      <h2 className="text-3xl font-bold text-orange-800 mb-6 font-space">Blog & Thoughts</h2>
      <p className="text-lg text-orange-800 mb-8">
        I write about technology, healthcare innovation, and the intersection of computing and creativity.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <BlogCard 
          title="Machine Learning for CRISPR"
          date="Dec 9, 2024"
          description="Exploring how machine learning applications can enhance CRISPR technology, improving precision and effectiveness in gene editing."
          image="./images/machine-learning-crispr.png"
          url="/blog/machine-learning-crispr"
        />
        
        <BlogCard
          title="CRISPR Training Data"
          date="Dec 10, 2024"
          description="An in-depth look at gathering and preprocessing training data for CRISPR machine learning models."
          image="./images/crispr-training-data.png"
          url="/blog/crispr-training-data"
        />
        
        <BlogCard
          title="Reflections on My Time at the Broad Institute"
          date="Dec 13, 2024"
          description="Personal reflections on my research journey at the Broad Institute of MIT and Harvard, highlighting key learnings and experiences."
          image="./images/broad-institute.png"
          url="/blog/reflections-broad-institute"
        />
        
        <BlogCard
          title="BioMe"
          date="Jan 18, 2025"
          description="The journey of founding BioMe and our mission to transform clinical trials for neurodegenerative disorders using AI-powered motion tracking."
          image="./images/biome.png"
          url="/blog/biome"
        />
        
        <BlogCard
          title="Action Recognition CNN Training Tutorial"
          date="Jan 21, 2025"
          description="A comprehensive guide to training convolutional neural networks for action recognition in video sequences."
          image="./images/cnn-training.png"
          url="/blog/cnn-training-tutorial"
        />
        
        <BlogCard
          title="3D Geometric Transformations and Alignment"
          date="Feb 14, 2025"
          description="Exploring the mathematics behind 3D geometric transformations and their applications in computer vision and motion tracking."
          image="./images/geometric-transformations.png"
          url="/blog/3d-geometric-transformations"
        />
      </div>
    </div>
  );
};

interface BlogCardProps {
  title: string;
  date: string;
  description: string;
  image: string;
  url: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, date, description, image, url }) => {
  return (
    <Link to={url} className="block transform transition-transform duration-300 hover:-rotate-1 hover:scale-[1.02]">
      <Card className="card-hover group bg-orange-50/70 border border-orange-200/30 hover:border-orange-800/20 h-full overflow-hidden">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-5">
          <p className="text-orange-700 text-sm mb-2">{date}</p>
          <h3 className="text-xl font-semibold text-orange-800 mb-2 group-hover:text-orange-900">{title}</h3>
          <p className="text-orange-700 mb-4 line-clamp-3">{description}</p>
          <Button variant="ghost" className="text-orange-700 group-hover:text-orange-900 group-hover:bg-orange-100/50 p-0">
            Read More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </Card>
    </Link>
  );
};

export default BlogSection;
