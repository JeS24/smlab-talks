---
author: Aritra Mukhopadhaya
pubDatetime: 2023-08-21T14:00:00.000+05:30
modDatetime:
title: You Only Look Once - Unified, Real-Time Object Detection
featured: false
draft: false
slug: yolo
tags:
  - "2023"
  - object detection
  - YOLO
description: This talk discusses YOLO, a groundbreaking method for object detection. YOLO revolutionizes object detection with real-time processing, using a single network for bounding box and class probability predictions, excelling in speed and domain generalization.
---

We present YOLO, a new approach to object detection. Prior work on object detection repurposes classifiers to perform detection. Instead, we frame object detection as a regression problem to spatially separated bounding boxes and associated class probabilities. A single neural network predicts bounding boxes and class probabilities directly from full images in one evaluation. Since the whole detection pipeline is a single network, it can be optimized end-to-end directly on detection performance. Our unified architecture is extremely fast. Our base YOLO model processes images in real-time at 45 frames per second. A smaller version of the network, Fast YOLO, processes an astounding 155 frames per second while still achieving double the mAP of other real-time detectors. Compared to state-of-the-art detection systems, YOLO makes more localization errors but is less likely to predict false positives on background. Finally, YOLO learns very general representations of objects. It outperforms other detection methods, including DPM and R-CNN, when generalizing from natural images to other domains like artwork.

Additional resources:
https://pjreddie.com/darknet/yolo/

<embed src="/assets/slides/2023-08-21--Aritra--YOLO.pdf" type="application/pdf" width="100%" height="600px">
