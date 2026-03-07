import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface BlogCardProps {
  title: string;
  date: string;
  description: string;
  image: string;
  url: string;
}

interface BlogEntry extends BlogCardProps {
  sortDate: string;
}

const blogEntries: BlogEntry[] = [
  {
    title: "Attention Is All You Need: Time to LockIn",
    date: "Mar 3, 2026",
    sortDate: "2026-03-03",
    description: "Why I built LockIn: an attention-aware browser extension that flags distraction based on tab context instead of static blocklists.",
    image: "./images/lockin-cover.svg",
    url: "/blog/lockin",
  },
  {
    title: "BioMe",
    date: "Jan 18, 2025",
    sortDate: "2025-01-18",
    description: "The journey of founding BioMe and our mission to transform clinical trials for neurodegenerative disorders using AI-powered motion tracking.",
    image: "./images/biome.png",
    url: "/blog/biome",
  },
  {
    title: "Reflections on My Time at the Broad Institute",
    date: "Dec 13, 2024",
    sortDate: "2024-12-13",
    description: "Personal reflections on my research journey at the Broad Institute of MIT and Harvard, highlighting key learnings and experiences.",
    image: "./images/broad-institute.png",
    url: "/blog/reflections-broad-institute",
  },
  {
    title: "CRISPR Training Data",
    date: "Dec 10, 2024",
    sortDate: "2024-12-10",
    description: "An in-depth look at gathering and preprocessing training data for CRISPR machine learning models.",
    image: "./images/crispr-training-data.png",
    url: "/blog/crispr-training-data",
  },
  {
    title: "Machine Learning for CRISPR",
    date: "Dec 9, 2024",
    sortDate: "2024-12-09",
    description: "Exploring how machine learning applications can enhance CRISPR technology, improving precision and effectiveness in gene editing.",
    image: "./images/machine-learning-crispr.png",
    url: "/blog/machine-learning-crispr",
  },
];

const BlogSection: React.FC = () => {
  const sortedEntries = [...blogEntries].sort(
    (a, b) => new Date(b.sortDate).getTime() - new Date(a.sortDate).getTime()
  );

  return (
    <div id="blogs" className="mb-16">
      <h2 className="text-3xl font-bold text-orange-800 mb-6 font-space">Blog & Thoughts</h2>
      <p className="text-lg text-orange-800 mb-8">
        I write about technology, healthcare innovation, and the intersection of computing and creativity.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedEntries.map((entry) => (
          <BlogCard
            key={entry.url}
            title={entry.title}
            date={entry.date}
            description={entry.description}
            image={entry.image}
            url={entry.url}
          />
        ))}
      </div>
    </div>
  );
};

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
