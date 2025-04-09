
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import HeroSection from "@/components/sections/HeroSection";
import BlogSection from "@/components/sections/BlogSection";
import HobbiesSection from "@/components/sections/HobbiesSection";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Scroll to top when no hash is present
      window.scrollTo(0, 0);
    }
  }, [location]);

  // Add CSS for image adjustments
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .blog-image-broad-institute {
        object-fit: cover;
        height: 100%;
        width: 100%;
        object-position: center;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <BlogSection />
        <HobbiesSection />
      </div>
    </MainLayout>
  );
};

export default Index;
