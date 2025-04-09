
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Index from '@/pages/Index';
import MachineLearningCRISPR from '@/pages/Blog/MachineLearningCRISPR';
import CRISPRTrainingData from '@/pages/Blog/CRISPRTrainingData';
import BioMe from '@/pages/Blog/BioMe';
import ReflectionsBroadInstitute from '@/pages/Blog/ReflectionsBroadInstitute';
import CNNTrainingTutorial from '@/pages/Blog/CNNTrainingTutorial';
import GeometricTransformations from '@/pages/Blog/GeometricTransformations';
import NotFound from '@/pages/NotFound';
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/blog/machine-learning-crispr" element={<MachineLearningCRISPR />} />
        <Route path="/blog/crispr-training-data" element={<CRISPRTrainingData />} />
        <Route path="/blog/biome" element={<BioMe />} />
        <Route path="/blog/reflections-broad-institute" element={<ReflectionsBroadInstitute />} />
        <Route path="/blog/cnn-training-tutorial" element={<CNNTrainingTutorial />} />
        <Route path="/blog/3d-geometric-transformations" element={<GeometricTransformations />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
