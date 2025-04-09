import React, { ReactNode, useEffect } from "react";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import ContactSection from "../sections/ContactSection";
import { useLocation, Link } from "react-router-dom";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const location = useLocation();
  
  // Effect to handle hash navigation when page loads
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Check if we're on the home page
  const isHomePage = location.pathname === "/";

  const handleNavigation = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    
    if (isHomePage) {
      // If we're on the home page, just scroll to the section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on another page, navigate to home and then scroll
      // Since we're using HashRouter, we need to use window.location
      window.location.href = "/#";
      
      // Store the target section in sessionStorage to scroll after redirect
      sessionStorage.setItem('scrollTo', sectionId);
    }
  };
  
  // Check if we need to scroll to a section on load
  useEffect(() => {
    if (isHomePage) {
      const scrollTo = sessionStorage.getItem('scrollTo');
      if (scrollTo) {
        const element = document.getElementById(scrollTo);
        if (element) {
          // Small timeout to ensure the page is fully loaded
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
        sessionStorage.removeItem('scrollTo');
      }
    }
  }, [isHomePage]);

  return (
    <div className="min-h-screen bg-amber-50 text-orange-900">
      {/* Header Section */}
      <header className="py-6 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <Link to="/" className="text-2xl font-bold text-orange-800 font-space">FZ</Link>
          </div>
          <nav className="flex gap-6">
            <a href="#" onClick={(e) => handleNavigation(e, 'blogs')} className="text-orange-800 hover:text-orange-600">Blogs</a>
            <a href="#" onClick={(e) => handleNavigation(e, 'dance')} className="text-orange-800 hover:text-orange-600">Dance</a>
            <a href="#contact" onClick={scrollToContact} className="text-orange-800 hover:text-orange-600">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto pb-20">
        {children}
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="py-6 bg-amber-50 border-t border-orange-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="text-orange-800">&copy; {new Date().getFullYear()} Fengyi Zheng</p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="mailto:fzheng1006@gmail.com" aria-label="Email" className="text-orange-700 hover:text-orange-600">
              <Mail className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/fengyi-zheng/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-orange-700 hover:text-orange-600">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://github.com/fzheng28" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-orange-700 hover:text-orange-600">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://twitter.com/zheng_fengyi" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-orange-700 hover:text-orange-600">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
