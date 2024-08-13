---
author: Annada Prasad Behera
pubDatetime: 2023-11-03T14:00:00.000+00:00
modDatetime:
title: 3D Gaussian Splatting for Real-Time Radiance Field Rendering
featured: false
draft: false
slug: 3d-gaussian-splatting
tags:
  - "2023"
  - radiance field
  - real-time rendering
  - gaussian splatting
description: In this talk, we present a novel method for real-time radiance field rendering using 3D Gaussian splatting. Our approach achieves state-of-the-art visual quality while maintaining competitive training times and allows high-quality real-time novel-view synthesis at 1080p resolution. We introduce three key elements that enable this - 3D Gaussians for scene representation, interleaved optimization/density control, and a fast visibility-aware rendering algorithm. We demonstrate the effectiveness of our method on several established datasets.
---

Radiance Field methods have recently revolutionized novel-view synthesis of scenes captured with multiple photos or videos. However, achieving high visual quality still requires neural networks that are costly to train and render, while recent faster methods inevitably trade off speed for quality. For unbounded and complete scenes (rather than isolated objects) and 1080p resolution rendering, no current method can achieve real-time display rates. We introduce three key elements that allow us to achieve state-of-the-art visual quality while maintaining competitive training times and importantly allow high-quality real-time (≥ 100 fps) novel-view synthesis at 1080p resolution. First, starting from sparse points produced during camera calibration, we represent the scene with 3D Gaussians that preserve desirable properties of continuous volumetric radiance fields for scene optimization while avoiding unnecessary computation in empty space; Second, we perform interleaved optimization/density control of the 3D Gaussians, notably optimizing anisotropic covariance to achieve an accurate representation of the scene; Third, we develop a fast visibility-aware rendering algorithm that supports anisotropic splatting and both accelerates training and allows realtime rendering. We demonstrate state-of-the-art visual quality and real-time rendering on several established datasets.

Additional resources:
https://repo-sam.inria.fr/fungraph/3d-gaussian-splatting/

**No slides are available for this talk.**
