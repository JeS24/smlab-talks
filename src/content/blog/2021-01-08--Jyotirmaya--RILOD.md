---
author: Jyotirmaya Shivottam
pubDatetime: 2021-01-08T19:00:00.000+05:30
modDatetime:
title: Near Real-Time Incremental Learning for Object Detection at the Edge
featured: false
draft: false
slug: rilod
tags:
  - "2021"
  - RILOD
  - Incremental Learning
  - Object Detection
  - Computer Vision
  - Edge Computing
description: In this talk, we will discuss a paper about real-time Incremental Learning of new object classes for object detection at the edge.
---

One of the most interesting areas for application of object detection techniques is Internet of Things (IoT) or in a nutshell, "Edge Computing devices". Most of current research is focussed on tuning and compressing networks that can be run with limited resources on such devices, but this usually takes hours of training time. As such, a crucial component for AI on the edge has to be real-time Incremental Learning (IL) of new object classes. In this talk, the paper I will be presenting, explores this avenue and combats the problem of Catastrophic Forgetting (CF), by introducing a novel one-stage deep object detection algorithm, that incorporates some insights from the Learning without Forgetting (LwF) Knowledge Distillation technique. Additionally, the authors have designed an automated training dataset construction pipeline for the new object class, that ensures that the inference capability of the edge device is near real-time.

Additional resources:
https://arxiv.org/abs/1904.00781

<embed src="/assets/slides/2021-01-08--Jyotirmaya--RILOD.pdf" type="application/pdf" width="100%" height="600px">
