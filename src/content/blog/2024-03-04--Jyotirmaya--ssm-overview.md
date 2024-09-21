---
author: Jyotirmaya Shivottam
pubDatetime: 2024-03-04T10:00:00.000+05:30
modDatetime:
title: A Brief Overview of Recent Advances in Sequence Modeling Through Structured State Space Models
featured: false
draft: false
slug: ssm-overview
tags:
  - "2024"
  - sequence modeling
  - state space models
  - structured ssm
  - mamba
  - seminar
description: This talk outlines recent advances in sequence modeling using structured state space models, starting with the basic formulation that initiated this line of research and moving on to more recent works (Mamba) that present complete architectures operating under certain assumptions. Core techniques that make these models work efficiently on long sequences, such as discretization and an associative scan operation to parallelize the computation, will also be discussed.
---

In this seminar presentation, I will present a concise overview of sequence modeling using Structured State Space Models. I will start with an introduction to sequence modeling and motivate the use of state space models (SSMs) for deep learning on sequential data, specifically for long sequences where prevalent architectures do not scale efficiently. We will look into some works [1-3] in this domain that leverage structured state space models, starting with the basic formulation that initiated this line of research [1], and then move on to more recent works that present complete architectures (S4 [2]) operating under certain assumptions. We will then relax some assumptions to allow for more flexible and expressive models (Mamba [3]). We will also explore some core techniques that make these models work efficiently on long sequences, such as discretization and an associative scan operation to parallelize the computation. I will conclude by discussing some challenges with SSMs and outlining prospective research directions.

Additional resources:
1. HiPPO: Recurrent Memory with Optimal Polynomial Projections - https://arxiv.org/abs/2008.07669
2. S4: Efficiently Modeling Long Sequences with Structured State Spaces - https://arxiv.org/abs/2111.00396
3. Mamba (S6): Linear-Time Sequence Modeling with Selective State Spaces - https://arxiv.org/abs/2312.00752
4. Resurrecting Recurrent Neural Networks for Long Sequences - https://arxiv.org/abs/2303.06349
5. Diagonal State Spaces are as Effective as Structured State Spaces - https://arxiv.org/abs/2203.14343
6. Notes on the Mamba and the S4 model (Mamba: Linear-Time Sequence Modeling with Selective State Spaces) - https://github.com/hkproj/mamba-notes | https://www.youtube.com/watch?v=8Q_tqwpTpVU

<embed src="/labtalks/assets/slides/2024-03-04--Jyotirmaya--ssm-overview.pdf" type="application/pdf" width="100%" height="600px">
