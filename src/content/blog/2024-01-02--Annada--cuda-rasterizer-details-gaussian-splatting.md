---
author: Annada Prasad Behera
pubDatetime: 2024-01-02T14:00:00.000+05:30
modDatetime:
title: Nitty Gritty Details of the CUDA Rasterizer Used in Gaussian Splatting
featured: false
draft: false
slug: cuda-rasterizer-details-gaussian-splatting
tags:
  - "2024"
  - gaussian splatting
  - cuda
description: This talk delves into the details of the CUDA rasterizer used in Gaussian splatting. It covers the theory behind Gaussian splatting, the implementation of the `cuda_rasterizer.cu`, and the backward pass that enables optimizing algorithms such as Adam or SGD to optimize the Gaussians with respect to a given input image and produce novel views of the scene.
---

This talk presents a detailed explanation for all the parts of the Gaussian splatting rasterizer and how the `cuda_rasterizer.cu` implements the theory behind the Gaussian splatting. Spherical harmonics for view dependent color, frustrum culling for the culling rasterizers in camera space, splatting the Gaussians from 3D to 2D screen space, rendering the pixles, tiling on GPU to improve performance, the covariance matrix and at the end most important of all, the backward pass that enables optimizing algorithms suck as Adam or SGD to optimize the Gaussians with respect to a given input image and produce novel views of the scene are discussed.

<embed src="/labtalks/assets/slides/2024-01-02--Annada--cuda-rasterizer-details-gaussian-splatting.pdf" type="application/pdf" width="100%" height="600px">
