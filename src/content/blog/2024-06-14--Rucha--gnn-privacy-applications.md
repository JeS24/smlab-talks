---
author: Rucha Bhalchandra Joshi
pubDatetime: 2024-06-14T14:00:00.000+05:30
modDatetime:
title: Graph Neural Networks - Privacy and Applications
featured: false
draft: false
slug: gnn-privacy-applications
tags:
  - "2024"
  - graph neural networks
  - privacy
  - differential privacy
  - graph-structured data
description: This work discusses the complex relationships within graph-structured data and the use of graph neural networks (GNNs) for tasks such as node classification and link prediction. It also addresses privacy concerns in GNNs and presents a privacy-preserving approach that safeguards local graph structures while enabling meaningful analysis and insights.
---

Understanding and leveraging the complex relationships within graph-structured data is essential to address tasks such as node classification, link prediction, and graph classification. Effectively addressing these tasks is crucial for tasks like personalized recommendations, identifying fraud in financial networks, predicting protein interactions in bioinformatics, and generally making informed decisions in scenarios where entities and their relationships play a critical role. Graph Neural Networks (GNNs) are known to address such tasks over graph-structured data, which is widely used to represent many real-world systems. However, the collection and analysis of graph data using GNNs raise significant privacy concerns regarding the disclosure of sensitive information about individuals and their relationships. To address this challenge, we present a privacy-preserving approach that safeguards the privacy of local graph structures while still enabling meaningful analysis and insights.

In this work, we proposed methods, namely EP-GNN, LSPGNN, and GraphPrivatizer, to ensure the structural privacy of the nodes of the graph. Our method follows a local privacy setting with centralized training. The graph's locally perturbed neighborhood structure is shared with the server to train a GNN. In addition, the feature and label information corresponding to the nodes is perturbed. This ensures that the perturbation follows the $\epsilon$-LDP (Local Differential Privacy), where $\epsilon$ is the sum of privacy budgets for feature, label, and structure perturbation. While giving theoretical guarantees, we also performed empirical analysis over real-world datasets.
In addition to privacy in GNNs, we look at a few application areas where GNN helps solve different problems specific to the systems. We examined two applications: 1. Energy analysis in Building Information Modelling and 2. indoor localization. Using different and suitable variations of GNN techniques, we perform experiments to get better performances than the state-of-the-art in these application areas.

<!-- <embed src="/assets/slides/2024-06-14--Rucha--gnn-privacy-applications.pdf" type="application/pdf" width="100%" height="600px"> -->
<!-- FIXME: slides -->
