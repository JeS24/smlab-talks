---
author: Sahel Mohammad Iqbal
pubDatetime: 2021-11-23T15:00:00.000+05:30
modDatetime:
title: Neural Networks at a Fraction with Pruned Quaternions
featured: false
draft: false
slug: pruned-quaternions
tags:
  - "2021"
  - pruning
  - quaternions
description: In this talk, we discuss neural networks at a fraction with pruned quaternions.
---

Contemporary state-of-the-art neural networks have increasingly large numbers of parameters, which prevents their deployment on devices with limited computational power. Pruning is one technique to remove unnecessary weights and reduce resource requirements for training and inference. In addition, for ML tasks where the input data is multi-dimensional, using higher-dimensional data embeddings such as complex numbers or quaternions has been shown to reduce the parameter count while maintaining accuracy. For computer vision applications, since the inputs are arrays of pixels that are each made up of 3 channels, quaternions provide a natural way to represent the pixels as single entities. In this talk, I will present the results for pruning experiments conducted on real and quaternion-valued implementations of different architectures on object detection tasks. The results indicate that for very high model sparsities, quaternion models provide higher accuracies than their real counterparts.

**No slides are available for this talk.**
