---
author: Anubhav Vishwakarma
pubDatetime: 2024-07-12T14:00:00.000+05:30
modDatetime:
title: SplaTAM - Splat, Track & Map 3D Gaussians for Dense RGB-D SLAM
featured: false
draft: false
slug: splatam
tags:
  - "2024"
  - SplaTAM
  - SLAM
  - Dense SLAM
  - RGB-D SLAM
  - 3D Reconstruction
  - 3D Gaussians
  - Novel View Synthesis
description: This paper introduces SplaTAM, an approach that leverages explicit volumetric representations, specifically 3D Gaussians, for dense simultaneous localization and mapping (SLAM) from a single RGB-D camera. SplaTAM achieves high-fidelity reconstruction and superior performance in camera pose estimation, map construction, and novel-view synthesis compared to existing methods. The implementation code for SplaTAM is available on GitHub.
---

Dense simultaneous localization and mapping (SLAM) is crucial for robotics and augmented reality applications. However, current methods are often hampered by the non-volumetric or implicit way they represent a scene. This work introduces SplaTAM, an approach that, for the first time, leverages explicit volumetric representations, i.e., 3D Gaussians, to enable high-fidelity reconstruction from a single unposed RGB-D camera, surpassing the capabilities of existing methods. SplaTAM employs a simple online tracking and mapping system tailored to the underlying Gaussian representation. It utilizes a silhouette mask to elegantly capture the presence of scene density. This combination enables several benefits over prior representations, including fast rendering and dense optimization, quickly determining if areas have been previously mapped, and structured map expansion by adding more Gaussians. Extensive experiments show that SplaTAM achieves up to 2x superior performance in camera pose estimation, map construction, and novel-view synthesis over existing methods, paving the way for more immersive high-fidelity SLAM applications.

Additional resources:
https://github.com/spla-tam/SplaTAM

**No slides are available for this talk.**
