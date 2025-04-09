import React from "react";
import BlogPost from "@/components/blog/BlogPost";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const MachineLearningCRISPR = () => {
  return (
    <BlogPost
      title="Machine Learning Applications for CRISPR Technology"
      date="Dec 9, 2024"
      image="/images/machine-learning-crispr.png"
      content={
        <>
          <p className="mb-4">
            ML for CRISPR is an interesting and rapidly growing area, but many people don't know where to start. I've created a beginner-friendly guide to address some common questions, including:
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li>What is CRISPR?</li>
            <li>How is ML used in CRISPR research?</li>
            <li>What are the modalities in CRISPR?</li>
            <li>What are the potential features?</li>
            <li>What ML models are commonly used for CRISPR research and why?</li>
            <li>What tools can we use to understand the model?</li>
          </ul>

          <p className="mb-4">
            Upcoming Post: Data sources you can download to train your own CRISPR ML model!
          </p>
          
          <p className="mb-8">
            Feel free to reach out if you have questions or comments.
          </p>
          
          <h2 className="text-2xl font-bold text-orange-800 mt-8 mb-4 font-space">What is CRISPR?</h2>
          <p className="mb-4">
            CRISPR technology has revolutionized gene editing and regulation, unlocking transformative possibilities such as therapies for genetic disorders, deeper insights into gene function, and innovative biotechnological applications.
          </p>
          
          <p className="mb-4">
            CRISPR stands for "Clustered Regularly Interspaced Short Palindromic Repeats," and it is derived from a natural bacterial defense mechanism against viruses. In this system, bacteria store fragments of viral DNA in their genome to remember past infections. When the same virus attacks again, the bacteria produce guide RNAs that recognize the viral DNA and recruit a CRISPR-associated (Cas) protein, such as Cas9 or Cas12, to cut the DNA and disable the virus. There are two key components of the CRISPR system:
          </p>

          <ul className="list-disc pl-5 mb-4">
            <li><strong>Guide RNA (gRNA):</strong> Acts like a GPS, directing the Cas protein to a specific DNA sequence with high precision.</li>
            <li><strong>Cas Protein:</strong> Functions as molecular scissors, cutting the DNA at the target site to enable editing or regulation.</li>
          </ul>
          
          <p className="mb-4">
            This combination of precise targeting (gRNA) and DNA-cutting ability (Cas protein) makes CRISPR a versatile and powerful tool for genome editing.
          </p>
          
          <h2 className="text-2xl font-bold text-orange-800 mt-8 mb-4 font-space">How is ML Used in CRISPR Research?</h2>
          <p className="mb-4">
            One of the most critical aspects of CRISPR-based interventions is designing gRNAs. Typically, gRNAs are about 20 nucleotides long, while the DNA sequence they target can span approximately three billion base pairs. Pinpointing the best target among billions of genomic sites poses an interesting question: How do we design the optimal gRNA for a specific purpose?
          </p>
          
          <p className="mb-4">
            A well-optimized gRNA guides CRISPR precisely, minimizing off-target edits and harmful side effects. A poorly designed gRNA, however, may fail to correct the intended mutation or could inadvertently disrupt essential genes. To achieve safe and effective therapies, gRNAs must combine high efficiency with strict specificity. ML provides a powerful tool to handle this complexity, helping researchers identify and understand the characteristics of ideal gRNAs from a vast number of possibilities.
          </p>
          
          <h2 className="text-2xl font-bold text-orange-800 mt-8 mb-4 font-space">What are the Modalities in CRISPR?</h2>
          <p className="mb-4">
            "Modalities" refer to the different ways CRISPR can interact with genes. Think of CRISPR as a versatile toolkit capable of distinct actions depending on the desired genetic outcome. Modalities are essential in CRISPR ML because each modality involves unique biological mechanisms that inform model training and feature selection. These modalities include:
          </p>
          
          <h3 className="text-xl font-bold text-orange-700 mt-6 mb-2 font-space">Knockout (CRISPRko)</h3>
          <p className="mb-4">
            Induces permanent double-strand breaks in the genome. These breaks are repaired by error-prone mechanisms such as non-homologous end joining (NHEJ), often resulting in insertions or deletions (indels).
          </p>
          
          <h3 className="text-xl font-bold text-orange-700 mt-6 mb-2 font-space">Interference (CRISPRi)</h3>
          <p className="mb-4">
            Enables transient gene repression using a catalytically inactive version of Cas9 (dCas9), which cannot cut DNA but can block RNA polymerase or transcription factors. Repression can be enhanced by tethering repressor domains such as Kox1/ZNF10 or Zim3 to dCas9. Studies show that these domains achieve stronger repression than dCas9 alone. While KRAB and Zim3 have similar effects, their choice may depend on specific experimental contexts.
          </p>
          
          <h3 className="text-xl font-bold text-orange-700 mt-6 mb-2 font-space">Activation (CRISPRa)</h3>
          <p className="mb-4">
            Enables transient gene activation using dCas9 fused to transcriptional activation domains (e.g., VP64, p65, or Rta) to enhance gene expression.
          </p>
          
          <h2 className="text-2xl font-bold text-orange-800 mt-8 mb-4 font-space">What are the potential features?</h2>
          <p className="mb-4">
            Designing an effective ML model requires a deep understanding of the underlying biology. For different CRISPR modalities, the considerations for which features to include can vary substantially. The four numbered areas below highlight key biological factors that can guide feature selection:
          </p>
          
          <h3 className="text-xl font-bold text-orange-700 mt-6 mb-2 font-space">1. gRNA Characteristics</h3>
          <p className="mb-4">
            The sequence composition and structural properties of the gRNA are central to directing CRISPR-based enzymes (e.g., Cas9 or dCas9) to their target sites. By capturing the nuanced sequence features of gRNAs, ML models can better predict which guides are most likely to achieve robust, specific targeting. Key considerations include:
          </p>
          
          <ul className="list-disc pl-5 mb-4">
            <li><strong>Nucleotide Composition:</strong> The overall distribution of A, T, G, and C nucleotides can influence binding affinity and on-target cleavage or binding efficiency. Certain motifs may affect how tightly the gRNA associates with Cas proteins.</li>
            <li><strong>Sequence Patterns and Runs:</strong> Stretches of identical nucleotides or specific sequence motifs can influence gRNA transcription efficiency and stability. For example, a stretch of thymidines (T's) in the DNA template can cause transcription termination in RNA polymerase III (Pol III), potentially affecting gRNA yield and function.</li>
          </ul>
          
          <h3 className="text-xl font-bold text-orange-700 mt-6 mb-2 font-space">2. Thermodynamics</h3>
          <p className="mb-4">
            Thermodynamic properties, such as GC content and predicted RNA-DNA duplex stability, are crucial for understanding the strength of gRNA binding to its DNA target. Integrating thermodynamic features helps ML models approximate the biophysical underpinnings of gRNA-target interactions. Potential thermodynamic features include:
          </p>
          
          <ul className="list-disc pl-5 mb-4">
            <li><strong>GC Content:</strong> Higher GC content generally increases duplex stability, potentially enhancing on-target binding while also raising the risk of off-target interactions.</li>
            <li><strong>Melting Temperature (Tm):</strong> Guides with an optimal Tm are more likely to bind stably under physiological conditions.</li>
            <li><strong>Predicted Folding Energy:</strong> The stability of gRNA secondary structures, inferred from folding energy, influences how readily the gRNA forms a functional Cas9-gRNA complex.</li>
          </ul>
          
          <h3 className="text-xl font-bold text-orange-700 mt-6 mb-2 font-space">3. Modality-Specific Features</h3>
          <p className="mb-4">
            Each CRISPR modality operates through distinct molecular pathways. For example, CRISPRko relies on efficient DNA cleavage and repair pathways, while CRISPRi and CRISPRa manipulate transcriptional machinery. Including modality-specific features ensures that ML models are tailored to the biological context, improving relevance and accuracy.
          </p>
          
          <ul className="list-disc pl-5 mb-4">
            <li><strong>CRISPRko:</strong> Different trans-activating CRISPR RNAs (tracrRNAs), such as the Chen tracr and Hsu tracr, can influence predictions of gRNA efficacy.</li>
            <li><strong>CRISPRi:</strong> The choice of repressor domain (e.g., Kox1/ZNF10, Zim3) affects the strength and consistency of gene silencing.</li>
            <li><strong>CRISPRa:</strong> The choice of activator domain (e.g., VP64, p65) affects the strength and consistency of gene activation.</li>
          </ul>
          
          <h3 className="text-xl font-bold text-orange-700 mt-6 mb-2 font-space">4. Genomic Environment</h3>
          <p className="mb-4">
            The local genomic context surrounding the target site can influence CRISPR outcomes. By incorporating features related to the genomic landscape, ML models can distinguish between targets that are biophysically and epigenetically accessible and those that are inherently resistant to CRISPR-mediated changes.
          </p>
          
          <ul className="list-disc pl-5 mb-4">
            <li><strong>Chromatin Accessibility:</strong> This metric considers how tightly DNA is wrapped around histones or located in heterochromatin regions. Assays like ATAC-Seq, DNase I hypersensitivity, and histone ChIP-Seq can help determine accessibility.</li>
            <li><strong>Distance from the Transcription Start Site (TSS):</strong> For CRISPRi and CRISPRa, numerious publications have demonstrated that distance to the TSS can influence the magnitude of gene repression or activation. Guides too far from the TSS have diminished effects.</li>
            <li><strong>Evolutionary Conservation:</strong> Highly conserved genomic regions may be more functionally significant and could exhibit different editing patterns compared to less conserved regions.</li>
            <li><strong>Local Nucleotide Context:</strong> Flanking sequences around the target site can stabilize or destabilize Cas9-gRNA-target DNA interactions, affecting cleavage or binding efficiency.</li>
          </ul>
          
          <p className="mb-4">
            Choosing the right set of biological features—from fine-grained nucleotide patterns in the gRNA to broader aspects of genomic and chromatin context—is essential for building accurate and reliable ML models in the CRISPR domain. By representing these biological dimensions, we ensure that a model's predictions are grounded in molecular biology. In an upcoming post, I will also provide resources on where to find data to help retrieve this information.
          </p>
          
          <h2 className="text-2xl font-bold text-orange-800 mt-8 mb-4 font-space">What ML models are commonly used for CRISPR research and why?</h2>
          <p className="mb-4">
            The structure of an ML model matters. Previous research offers guidance on architectures commonly used for CRISPR data.
          </p>
          
          <p className="mb-4">
            Regression-based algorithms are widely used in CRISPR ML:
          </p>
          
          <ul className="list-disc pl-5 mb-4">
            <li><strong>Logistic Regression:</strong> Rational design of highly active sgRNAs for CRISPR-Cas9–mediated gene inactivation. Doench JG et al. Nat Biotechnol. 2014.</li>
            <li><strong>Gradient-Boosted Regression:</strong> 
              <ul className="list-disc pl-5 mb-2 mt-2">
                <li>Optimized sgRNA design to maximize activity and minimize off-target effects of CRISPR-Cas9. Doench JG et al. Nat Biotechnol. 2016.</li>
                <li>Optimization of AsCas12a for combinatorial genetic screens in human cells. DeWeirdt PC et al. Nature Biotechnology, 2021.</li>
                <li>Accounting for small variations in the tracrRNA sequence improves sgRNA activity predictions for CRISPR screening. DeWeirdt PC et al. Nature Communications, 2022.</li>
              </ul>
            </li>
            <li><strong>Elastic Net Regression:</strong> Compact and highly active next-generation libraries for CRISPR-mediated gene repression and activation. Horlbeck MA et al. eLife. 2016.</li>
          </ul>
          
          <p className="mb-4">
            CNNs are also used; however, it has been shown that they perform similarly to regression-based methods, if not worse:
          </p>
          
          <ul className="list-disc pl-5 mb-4">
            <li>SpCas9 activity prediction by DeepSpCas9, a deep learning–based model with high generalization performance. Science Advances. Kim HK et al. 2019.</li>
            <li>Optimized CRISPR gRNA design for two high-fidelity Cas9 variants by deep learning. Wang D et al. Nat Biotechnol. 2019.</li>
          </ul>
          
          <p className="mb-4">
            Early influential CRISPR sgRNA design models (e.g., Doench et al. 2014, 2016) used logistic and gradient-boosted regression approaches, both of which proved highly effective. Researchers often favor regression-based models because they are relatively interpretable, stable, and supported by strong track records in predicting sgRNA efficacy. In the biotech field, interpretability and a grounding in biological evidence often outweigh using a model that functions as a "black box."
          </p>
          
          <p className="mb-4">
            CNNs have been explored for predicting SpCas9 activity (Kim HK et al. 2019; Wang D et al. 2019), leveraging their ability to detect sequence motifs and patterns without manual feature engineering. However, studies have shown that CNN-based models do not always outperform regression-based methods (DeWeirdt, PC. 2021). In some cases, the performance gains have been marginal or nonexistent, potentially due to limited training data or the intrinsic complexity of CRISPR biology that CNN architectures struggle to fully capture.
          </p>
          
          <p className="mb-4">
            Most existing models were developed for CRISPRko or CRISPRi applications, both of which aim to reduce gene expression. The shared mechanistic endpoint (gene repression) allows predictive tools trained on CRISPRko data to translate relatively well to CRISPRi data. Designing guides for CRISPRa, however, is more challenging. Enhancing gene expression involves a more complex interplay of chromatin states, transcription factors, and promoter dynamics, and there is generally less training data available for this modality.
          </p>
          
          <h2 className="text-2xl font-bold text-orange-800 mt-8 mb-4 font-space">What Tools Can We Use to Understand the Model?</h2>
          <p className="mb-4">
            Building an accurate ML model is only part of the solution. Interpreting its predictions—understanding which factors drive guide efficacy—can influence experimental design and downstream applications. In the CRISPR domain, knowing why the model rates certain guides as highly efficient (or not) can inform the next round of guide design, highlight previously overlooked biological factors, and provide confidence when introducing these tools into real-world workflows.
          </p>
          
          <h3 className="text-xl font-bold text-orange-700 mt-6 mb-2 font-space">SHAP (SHapley Additive exPlanations) Values:</h3>
          <p className="mb-4">
            A popular method for interpreting model predictions, SHAP values explain the contribution of each feature to the output. For example, they can reveal whether GC content or chromatin accessibility had a stronger influence on guide efficacy.
          </p>
          
          <h3 className="text-xl font-bold text-orange-700 mt-6 mb-2 font-space">Other Interpretability Methods:</h3>
          <p className="mb-4">
            Tools like LIME (Local Interpretable Model-Agnostic Explanations) or attention-based visualization in neural networks can also provide insights into model behavior.
          </p>
          
          <h2 className="text-2xl font-bold text-orange-800 mt-8 mb-4 font-space">Upcoming Post</h2>
          <p className="mb-4">
            The foundation of any ML model is high-quality data. In the context of CRISPR research, datasets are often referred to as libraries or screens. These datasets are crucial for training models to predict outcomes such as gRNA efficiency or specificity.
          </p>
          
          <p className="mb-4">
            In the upcoming post, I will explore the types of data commonly used to train ML models for CRISPR applications. This will include:
          </p>
          
          <ul className="list-disc pl-5 mb-4">
            <li>A list of published bulk CRISPR screens from existing publications for CRISPRko, CRISPRi, and CRISPRa.</li>
            <li>For each screen, a detailed discussion of its design and biological insights, highlighting how these screens contribute to the development of robust datasets for ML.</li>
          </ul>
          
          <p className="mb-4">
            Stay tuned for a comprehensive dive into how these screens provide the foundation for CRISPR ML advancements!
          </p>
          
          <div className="mt-12 border-t border-orange-200 pt-6">
            <h3 className="text-xl font-bold text-orange-800 mb-4 font-space">Other Blog Posts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

export default MachineLearningCRISPR;
