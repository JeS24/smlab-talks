---
author: Rishi Raj Sahoo
pubDatetime: 2024-11-11T14:00:00.000+05:30 
modDatetime: 
title: GNNX-BENCH - Perturbation-based GNN Explainers
featured: false
draft: false
slug: GNNX-Bench
tags:
  - "2024" 
  - "xAI"
  - "explainability"
  - "perturbation"
  - "GNN"
description: This work presents a benchmark for Graph Neural Network Explainability with perturbation. This involves some metrics like Sufficiency, Necessity, Stability, and Reproducibility to observe which method performs better. Finally, the work provides recommendations for choosing methods for particular graph tasks.

---
Numerous explainability methods have been proposed to shed light on the inner workings of GNNs. Despite the inclusion of empirical evaluations in all the proposed algorithms, the interrogative aspects of these evaluations lack diversity. As a result, various facets of explainability pertaining to GNNs, such as a comparative analysis of counterfactual reasoners, their stability to variational factors such as different GNN architectures, noise, stochasticity in non-convex loss surfaces, feasibility amidst domain constraints, and so forth, have yet to be formally investigated. Motivated by this need, we present a benchmarking study on perturbation-based explainability methods for GNNs, aiming to systematically evaluate and compare a wide range of explainability techniques. Among the key findings of our study, we identify the Pareto-optimal methods that exhibit superior efficacy and stability in the presence of noise. Nonetheless, our study reveals that all algorithms are affected by stability issues when faced with noisy data. Furthermore, we have established that the current generation of counterfactual explainers often fails to provide feasible recourses due to violations of topological constraints encoded by domain-specific considerations. Overall, this benchmarking study empowers stakeholders in the field of GNNs with a comprehensive understanding of the state-of-the-art explainability methods, potential research problems for further enhancement, and the implications of their application in real-world scenarios.

Additional resources:
* https://arxiv.org/abs/2310.01794

<embed src="/labtalks/assets/slides/2024-11-11--Rishi--GNNX-Bench.pdf" type="application/pdf" width="100%" height="600px">
