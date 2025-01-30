---
author: Rishi Raj Sahoo
pubDatetime: 2025-01-22T14:00:00.000+05:30 
modDatetime: 
title: Private Graph Extraction via Feature Explanation
featured: false
draft: false
slug: private-graph-extraction
tags:
  - "2024" 
  - "xAI"
  - "explainability"
  - "privacy"
  - "GNN"
  - "reconstruction-attack"
description: This study explores privacy leakage in GNNs through graph reconstruction attacks using feature explanations. It compares explanation methods—gradient-based, perturbation-based, and surrogate model-based—showing that explanations aid graph reconstruction, with a trade-off between privacy and utility. A defense using randomized response is proposed to reduce attack success.
---
Privacy and interpretability are two important ingredients for achieving trustworthy machine learning. We study the interplay of these two aspects in graph machine learning through graph reconstruction attacks. The goal of the adversary here is to reconstruct the graph structure of the training data given access to model explanations. Based on the different kinds of auxiliary information available to the adversary, we propose several graph reconstruction attacks. We show that additional knowledge of post-hoc feature explanations substantially increases the success rate of these attacks. Further, we investigate in detail the differences between attack performance with respect to three different classes of explanation methods for graph neural networks: gradient-based, perturbation-based, and surrogate model-based methods. While gradient-based explanations reveal the most in terms of the graph structure, we find that these explanations do not always score high in utility. For the other two classes of explanations, privacy leakage increases with an increase in explanation utility. Finally, we propose a defense based on a randomized response mechanism for releasing the explanations, which substantially reduces the attack success rate.

Additional resources:
* https://arxiv.org/abs/2206.14724
* https://github.com/iyempissy/graph-stealing-attacks-with-explanation
* https://youtu.be/My8q5dO12A4?si=Yj3P6AsdjgDoCIJ3

<embed src="/labtalks/assets/slides/2025-01-22--Rishi--Graph-Extraction.pdf" type="application/pdf" width="100%" height="600px">
