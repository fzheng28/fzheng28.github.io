import React from "react";
import BlogPost from "@/components/blog/BlogPost";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const BioMe = () => {
  return (
    <BlogPost
      title="BioMe's Value Proposition"
      date="Jan 18, 2025"
      image="/images/biome.png"
      content={
        <div>
          <p className="mb-4">
            Clinical trials for neurodegenerative disorders fail to accurately and continuously capture motor function—a key indicator of drug effectiveness. Current approaches rely on subjective patient questionnaires and sporadic in-person assessments that distort the reality of day-to-day impairment. Patients, aware they're being observed, unconsciously adjust their behavior during clinical visits, masking the true impact of their condition.
          </p>
          
          <p className="mb-4">
            For patients, the burden doesn't stop there. Traveling to clinics is physically exhausting, time-consuming, and costly. These challenges not only erode the patient experience but also inflate trial costs and hinder consistent data collection. With neurodegenerative diseases projected to affect 1 in 10 Americans and impose over $400 billion annually in healthcare costs, it's clear the current system is unsustainable.
          </p>
          
          <p className="mb-4">
            BioMe is redefining this narrative. Using only a smartphone or computer, patients can record videos of themselves anytime, anywhere—removing the barriers of clinic visits. Our platform employs AI motion tracking and alignment algorithms to analyze motor and speech patterns directly from these videos. By comparing patients' movements before and after drug treatment, BioMe delivers objective, real-world insights into drug effectiveness that are precise, continuous, and actionable.
          </p>
          
          <p className="mb-4">
            With BioMe, clinical trials become more objective, efficient, and patient-friendly. This not only accelerates drug development but also improves quality of life for patients by enabling remote participation. By bridging the gap between subjective metrics and real-world data, BioMe is empowering the next generation of clinical trials for neurodegenerative disorders.
          </p>

          <h2 className="text-2xl font-bold text-orange-800 mt-8 mb-4 font-space">Behind the Scenes: How BioMe Works</h2>
          
          <p className="mb-4">
            BioMe uses human pose estimation (HPE) to understand how people move in video. HPE is the task of detecting the location of a person's body joints (head, shoulders, elbows, wrists, hips, knees, ankles, etc.) in images or video. These detected joints or key points can be connected to form a "skeleton" representing the person's pose. Once a skeleton is generated, it becomes possible to analyze different motions, postures, or even fine-grained actions.
          </p>
          
          <h3 className="text-xl font-bold text-orange-800 mt-6 mb-2 font-space">Top-Down Approach</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>Step 1: Detect humans first (using a person detector).</li>
            <li>Step 2: For each detected person, run a pose-estimation model that locates each joint.</li>
          </ul>

          <h3 className="text-xl font-bold text-orange-800 mt-6 mb-2 font-space">Bottom-Up Approach</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>Step 1: Detect all joints (key points) across the entire image without focusing on individual persons.</li>
            <li>Step 2: Cluster or associate these joints to form skeletons for each person.</li>
          </ul>

          <h3 className="text-xl font-bold text-orange-800 mt-6 mb-3 font-space">Examples of Pose Estimation Methods</h3>
          
          <h4 className="text-lg font-bold text-orange-700 mt-4 mb-2 font-space">AlphaPose</h4>
          <p className="mb-4">
            AlphaPose is a top-down multi-person pose estimation framework that uses a CNN-based detector (often YOLO) to locate each person in an image. Each bounding box is then passed to a dedicated single-person pose estimator, also powered by deep convolutional neural networks, which outputs 2D heatmaps of keypoints (e.g., shoulders, elbows).
          </p>
          
          <h4 className="text-lg font-bold text-orange-700 mt-4 mb-2 font-space">OpenPose</h4>
          <p className="mb-4">
            OpenPose adopts a bottom-up strategy, detecting all key points for all individuals at once, then associating them into distinct skeletons. A multi-stage CNN generates Part Confidence Maps (PCMs)—heatmaps signifying each joint's likelihood at every pixel—and Part Affinity Fields (PAFs), vector fields that encode how joints connect.
          </p>

          <h3 className="text-xl font-bold text-orange-800 mt-6 mb-3 font-space">Alignment: The Next Step</h3>
          <p className="mb-4">
            BioMe's unique value lies in aligning a patient's pose data across multiple timestamps to quantify meaningful changes. For example, if a patient is receiving physical therapy or taking medications that affect mobility, clinicians want to see how their gait or posture shifts from one appointment to the next.
          </p>
          
          <p className="mb-6">
            Feel free to reach out at <a href="mailto:fzheng1006@gmail.com" className="text-orange-600 hover:text-orange-800 underline">fzheng1006@gmail.com</a> to request a demo!
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

export default BioMe;
