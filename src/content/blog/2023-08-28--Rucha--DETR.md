---
author: Rucha Bhalchandra Joshi
pubDatetime: 2023-08-28T14:00:00.000+05:30
modDatetime:
title: End-to-end Object Detection with Transformers
featured: false
draft: false
slug: detr-contd
tags:
  - "2023"
  - detr
  - transformers
  - object detection
description: This talk presents DETR, a new method for object detection that streamlines the pipeline by removing the need for components like non-maximum suppression and anchor generation.
---

We present a new method that views object detection as a direct set prediction problem. Our approach streamlines the detection pipeline, effectively removing the need for many hand-designed components like a non-maximum suppression procedure or anchor generation that explicitly encode our prior knowledge about the task. The main ingredients of the new framework, called DEtection TRansformer or DETR, are a set-based global loss that forces unique predictions via bipartite matching, and a transformer encoder-decoder architecture. Given a fixed small set of learned object queries, DETR reasons about the relations of the objects and the global image context to directly output the final set of predictions in parallel. The new model is conceptually simple and does not require a specialized library, unlike many other modern detectors. DETR demonstrates accuracy and run-time performance on par with the well-established and highly-optimized Faster RCNN baseline on the challenging COCO object detection dataset. Moreover, DETR can be easily generalized to produce panoptic segmentation in a unified manner. We show that it significantly outperforms competitive baselines. Training code and pretrained models are available at https://github.com/facebookresearch/detr.

Additional resources:
https://ai.meta.com/research/publications/end-to-end-object-detection-with-transformers/

<embed src="/assets/slides/2023-08-28--Rucha--DETR.pdf" type="application/pdf" width="100%" height="600px">
