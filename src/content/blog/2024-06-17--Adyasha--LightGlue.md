---
author: Adyasha M.
pubDatetime: 2024-06-17T14:00:00.000+05:30
modDatetime:
title: LightGlue - Local Feature Matching at Light Speed
featured: false
draft: false
slug: lightglue
tags:
  - "2024"
  - SuperGlue
  - LightGlue
  - Image Matching
  - Feature Matching
  - Computer Vision
description: This paper introduces LightGlue, a deep neural network that learns to match local features across images. It presents improvements over the state-of-the-art sparse matching method, SuperGlue, making LightGlue more efficient, accurate, and easier to train. The paper provides the implementation code for LightGlue.
---

We introduce LightGlue, a deep neural network that learns to match local features across images. We revisit multiple design decisions of SuperGlue, the state of the art in sparse matching, and derive simple but effective improvements. Cumulatively, they make LightGlue more efficient– in terms of both memory and computation, more accurate, and much easier to train. One key property is that LightGlue is adaptive to the difficulty of the problem: the inference is much faster on image pairs that are intuitively easy to match, for example, because of a larger visual overlap or limited appearance change. This opens up exciting prospects for deploying deep matchers in latency-sensitive applications like 3D reconstruction.

Additional resources:

- Paper: https://arxiv.org/abs/2306.13643
- Code: https://github.com/cvg/LightGlue

<embed src="/labtalks/assets/slides/2024-06-17--Adyasha--LightGlue.pdf" type="application/pdf" width="100%" height="600px">
