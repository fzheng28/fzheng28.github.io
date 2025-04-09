import React from "react";
import BlogPost from "@/components/blog/BlogPost";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const GeometricTransformations = () => {
  return (
    <BlogPost
      title="3D Geometric Transformations and Alignment"
      date="Feb 14, 2025"
      image="/images/geometric-transformations.png"
      content={
        <div>
          <p className="mb-4">
            Transforming and aligning 3D shapes is a core challenge across multiple fields, including computer vision, robotics, and bioinformatics. At BioMe, these techniques play an important role in quantifying and understanding changes in movement and morphology. For instance, when monitoring a patient's recovery or studying subtle shifts in movement due to a neurological condition, the ability to compare patient data captured at different times or from different angles is essential. Accurate 3D alignment ensures that clinicians and researchers can trust the data used for critical decisions—facilitating continuous tracking of changes over time and enhancing diagnostic accuracy.
          </p>
          
          <p className="mb-4">
            In this post, we present a beginner-friendly example that demonstrates how to apply known transformations to a 3D shape—specifically, a square pyramid—and then recover those transformations using two widely used algorithms: the Kabsch algorithm and the Orthogonal Procrustes method. We'll address questions such as:
          </p>
          
          <ul className="list-disc pl-5 mb-4">
            <li>What is the problem we're solving?</li>
            <li>What are the steps involved in aligning a transformed shape with its original?</li>
            <li>How do the Kabsch and Orthogonal Procrustes methods compare?</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-orange-800 mt-8 mb-4 font-space">What Is the Problem?</h2>
          <p className="mb-4">
            In the context of BioMe, one practical application of 3D alignment is quantifying changes in patient movement or anatomical structure over time. For example, aligning 3D scans of a patient taken before and after treatment can help assess progress or detect subtle shifts. To illustrate this concept in a simplified manner, consider a 3D model of a square pyramid. We apply a transformation—a combination of rotations and translation—to this pyramid. The challenge then becomes: given the original and transformed points, how do we recover the transformation? This classic "registration" problem is about aligning two sets of points, and the accompanying example code allows you to experiment with various transformations.
          </p>
          
          <h2 className="text-2xl font-bold text-orange-800 mt-8 mb-4 font-space">Code Structure Overview</h2>
          <p className="mb-4">
            <a href="https://github.com/example/alignment-example" className="text-blue-600 hover:underline">Alignment Example Github Repo</a>
          </p>
          
          <ul className="list-disc pl-5 mb-4">
            <li><strong>Generate the Pyramid:</strong> The pyramid is created using its base and apex vertices defined as a 5×3 NumPy array.</li>
            <li><strong>Apply a Known Transformation:</strong> The code defines two rotations (around the z-axis and y-axis) and a translation vector, then applies these to the pyramid.</li>
            <li><strong>Recover the Transformation:</strong> Both the Kabsch algorithm and the Orthogonal Procrustes method are used to estimate the rotation and translation needed to align the original and transformed points.</li>
            <li><strong>Visualize the Results:</strong> A 3D plot is generated to compare the original, transformed, and aligned pyramids.</li>
          </ul>
          
          <p className="mb-4">
            Feel free to run the code and experiment with different transformations or extend it to other 3D shapes relevant to your applications.
          </p>
          
          <h2 className="text-2xl font-bold text-orange-800 mt-8 mb-4 font-space">Aligning Transformed Points</h2>
          <p className="mb-4">
            After the pyramid is transformed, the next step is alignment—this is where our two methods come into play.
          </p>
          
          <h3 className="text-xl font-bold text-orange-700 mt-6 mb-2 font-space">Kabsch Algorithm</h3>
          <p className="font-semibold mb-1">What It Does:</p>
          <p className="mb-4">
            The Kabsch algorithm computes the optimal rotation that minimizes the root-mean-square deviation (RMSD) between two paired sets of points. It subsequently determines the translation by aligning the centroids of the point sets.
          </p>
          
          <p className="font-semibold mb-1">How It Works:</p>
          <ul className="list-disc pl-5 mb-4">
            <li><strong>Centering:</strong> Both point sets are centered by subtracting their respective centroids.</li>
            <li><strong>Covariance Matrix:</strong> The covariance matrix is calculated from the centered points.</li>
            <li><strong>SVD (Singular Value Decomposition):</strong> The covariance matrix is decomposed via SVD, providing matrices that help construct the optimal rotation matrix.</li>
            <li><strong>Reflection Check:</strong> If the resulting rotation matrix has a negative determinant (indicating an unintended reflection), the algorithm adjusts it to ensure a proper rotation.</li>
            <li><strong>Translation:</strong> The translation vector is determined as the difference between the centroid of the target points and the rotated centroid of the original points.</li>
          </ul>
          
          <h3 className="text-xl font-bold text-orange-700 mt-6 mb-2 font-space">Orthogonal Procrustes Method (SciPy Implementation)</h3>
          <p className="font-semibold mb-1">What It Does:</p>
          <p className="mb-4">
            Similarly, the Orthogonal Procrustes method finds the best orthogonal (rotation) matrix to align one set of points with another. This method is a staple in multivariate statistics and shape analysis.
          </p>
          
          <p className="font-semibold mb-1">How It Works:</p>
          <ul className="list-disc pl-5 mb-4">
            <li><strong>Centering:</strong> Both point sets are centered by subtracting their centroids.</li>
            <li><strong>Optimization:</strong> The method then formulates an optimization problem to minimize the Frobenius norm between the original and target point sets after applying a rotation.</li>
            <li><strong>Result:</strong> Using SciPy's <code className="bg-orange-50 px-1 rounded">scipy.linalg.orthogonal_procrustes</code> function, the method returns the rotation matrix along with the necessary information to compute the translation vector.</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-orange-800 mt-8 mb-4 font-space">Comparing the Two Methods</h2>
          <p className="mb-4">
            While both the Kabsch algorithm and the Orthogonal Procrustes method aim to minimize the difference between two point sets by finding the optimal rotation (and translation), they differ in methodology and implementation:
          </p>
          
          <ul className="list-disc pl-5 mb-4">
            <li><strong>Kabsch:</strong> Uses SVD on the covariance matrix and explicitly manages reflection corrections.</li>
            <li><strong>Procrustes:</strong> Frames the problem as an optimization to minimize the Frobenius norm using high-level library functions.</li>
          </ul>
          
          <p className="mb-4">
            In practice, both methods yield similar results when scaling is not a factor, making the choice largely dependent on implementation preferences.
          </p>
          
          <h2 className="text-2xl font-bold text-orange-800 mt-8 mb-4 font-space">Visualizing the Alignment</h2>
          <p className="mb-4">
            Visualization is key to understanding the effectiveness of the alignment. The <code className="bg-orange-50 px-1 rounded">visualize_points()</code> function plots:
          </p>
          
          <ul className="list-disc pl-5 mb-4">
            <li><strong>Original Points (in red):</strong> Representing the square pyramid before any transformation.</li>
            <li><strong>Transformed Points (in blue):</strong> The pyramid after applying the known transformation.</li>
            <li><strong>Aligned Points (in green):</strong> The original pyramid after applying the estimated transformation.</li>
          </ul>
          
          <p className="mb-4">
            Dashed lines connect the transformed points to their aligned counterparts, offering a clear visual display of the alignment accuracy.
          </p>
          
          <h2 className="text-2xl font-bold text-orange-800 mt-8 mb-4 font-space">Conclusion</h2>
          <p className="mb-4">
            Accurately aligning 3D points is fundamental to applications in robotics, augmented reality, bioinformatics, and patient data analysis at BioMe. The techniques demonstrated using both the Kabsch algorithm and the Orthogonal Procrustes method present powerful tools for solving registration problems. They enable the continuous tracking of changes over time, enhancing diagnostic accuracy and supporting informed decision-making.
          </p>
          
          <p className="mb-4">
            Feel free to reach out if you have any questions or comments about the code or its applications. Your feedback is invaluable as we continually refine our approaches to understanding and improving human health.
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
              <Link to="/blog/reflections-broad-institute" className="flex items-center p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
                <div>
                  <p className="font-semibold text-orange-800">Reflections on My Time at the Broad Institute</p>
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

export default GeometricTransformations;
