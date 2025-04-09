
import React, { useEffect } from "react";
import MainLayout from "../layout/MainLayout";
import { ArrowLeft } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface BlogPostProps {
  title: string;
  date: string;
  author?: string;
  content: React.ReactNode;
  image?: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, date, author = "Fengyi Zheng", content, image }) => {
  const location = useLocation();
  
  // Scroll to top when the blog post loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Determine if this is the Broad Institute blog post
  const isBroadInstitute = title.includes("Broad Institute");

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/#blogs" className="flex items-center text-orange-600 hover:text-orange-800 mb-8 group">
          <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
          Back to all posts
        </Link>
        
        {image && (
          <div className="relative h-[40vh] w-full mb-8 rounded-xl overflow-hidden">
            <img 
              src={image.startsWith("http") ? image : `.${image}`} 
              alt={title}
              className={`w-full h-full object-cover ${isBroadInstitute ? 'blog-image-broad-institute' : ''}`}
              style={isBroadInstitute ? { objectPosition: 'center center', objectFit: 'contain' } : {}}
            />
          </div>
        )}
        
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-orange-800 mb-4 font-space">{title}</h1>
          <div className="flex items-center text-orange-700">
            <span>{date}</span>
            <span className="mx-2">•</span>
            <span>{author}</span>
          </div>
        </div>
        
        <div className="prose prose-orange lg:prose-lg max-w-none">
          {content}
        </div>
      </div>
    </MainLayout>
  );
};

export default BlogPost;
