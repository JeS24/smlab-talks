---
author: Sikta Mohanty
pubDatetime: 2024-06-10T14:00:00.000+05:30
modDatetime:
title: Characterizing Graph Datasets for Node Classification - Homophily-Heterophily Dichotomy and Beyond
featured: false
draft: false
slug: homophily-heterophily-dichotomy
tags:
  - "2024"
  - graph neural networks
  - label informativeness
  - homophily
  - heterophily
  - adjusted homophily
description: This work explores the concept of homophily in graph datasets and proposes a measure called adjusted homophily. It also introduces a new characteristic called label informativeness (LI) to distinguish different types of heterophily. The study shows that LI better correlates with graph neural network performance compared to traditional homophily measures.
---

Homophily is a graph property describing the tendency of edges to connect
similar nodes; the opposite is called heterophily. It is often believed that
heterophilous graphs are challenging for standard message-passing graph neural
networks (GNNs), and much effort has been put into developing efficient methods for
this setting. However, there is no universally agreed-upon measure of homophily in
the literature. In this work, we show that commonly used homophily measures have
critical drawbacks preventing the comparison of homophily levels across different
datasets. For this, we formalize desirable properties for a proper homophily measure
and verify which measures satisfy which properties. In particular, we show
that a measure that we call adjusted homophily satisfies more desirable properties
than other popular homophily measures while being rarely used in graph machine
learning literature. Then, we go beyond the homophily-heterophily dichotomy and
propose a new characteristic that allows one to further distinguish different sorts
of heterophily. The proposed label informativeness (LI) characterizes how much
information a neighbor's label provides about a node's label. We prove that this
measure satisfies important desirable properties. We also observe empirically that
LI better agrees with GNN performance compared to homophily measures, which
confirms that it is a useful characteristic of the graph structure.

Additional resources:
https://arxiv.org/abs/2209.06177

<embed src="/labtalks/assets/slides/2024-06-10--Sikta--homophily-heterophily-dichotomy.pdf" type="application/pdf" width="100%" height="600px">
