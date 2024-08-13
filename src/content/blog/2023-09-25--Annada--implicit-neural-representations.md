---
author: Annada Prasad Behera
pubDatetime: 2023-09-25T14:00:00.000+05:30
modDatetime:
title: Implicit Neural Representations with Periodic Activation Functions
featured: false
draft: false
slug: implicit-neural-representations
tags:
  - "2023"
  - implicit-neural-representations
  - periodic-activation-functions
description: Implicitly defined, continuous, differentiable signal representations parameterized by neural networks offer many benefits over conventional representations. We propose leveraging periodic activation functions for implicit neural representations, dubbed sinusoidal representation networks (SIRENs). SIRENs are ideally suited for representing complex natural signals and their derivatives, and can solve challenging boundary value problems.
---

Implicitly defined, continuous, differentiable signal representations parameterized by neural networks have emerged as a powerful paradigm, offering many possible benefits over conventional representations. However, current network architectures for such implicit neural representations are incapable of modeling signals with fine detail, and fail to represent a signal's spatial and temporal derivatives, despite the fact that these are essential to many physical signals defined implicitly as the solution to partial differential equations. We propose to leverage periodic activation functions for implicit neural representations and demonstrate that these networks, dubbed sinusoidal representation networks or SIRENs, are ideally suited for representing complex natural signals and their derivatives. We analyze SIREN activation statistics to propose a principled initialization scheme and demonstrate the representation of images, wavefields, video, sound, and their derivatives. Further, we show how SIRENs can be leveraged to solve challenging boundary value problems, such as particular Eikonal equations (yielding signed distance functions), the Poisson equation, and the Helmholtz and wave equations. Lastly, we combine SIRENs with hypernetworks to learn priors over the space of SIREN functions.

Additional resources:
https://proceedings.neurips.cc/paper/2020/hash/53c04118df112c13a8c34b38343b9c10-Abstract.html

**No slides are available for this talk.**
