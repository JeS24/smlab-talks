---
author: Rishi Raj Sahoo
pubDatetime: 2024-10-07T11:00:00.000+05:30
modDatetime: 
title: Online Dynamics Learning for Predictive Control with an Application to Aerial Robots
featured: false
draft: false
slug: online-knode
tags:
  - "2024"
  - "KNODE"
  - "neural-differential-equations"
  - "online-training"
  - "robotics"
  - "model-predictive-control"
description: This work presents an online dynamics learning framework to improve the accuracy of model predictive control (MPC) during deployment. Using knowledge-based neural ODEs (KNODEs) and transfer learning techniques, the model continually adapts to disturbances, demonstrated through simulations and quadrotor experiments. Results show improved trajectory tracking under varying conditions.
---

In this work, we consider the task of improving the accuracy of dynamic models for model predictive control (MPC) in an online setting. Although prediction models can be learned and applied to model-based controllers, these models are often learned offline. In this offline setting, training data is first collected and a prediction model is learned through an elaborated training procedure. However, since the model is learned offline, it does not adapt to disturbances or model errors observed during deployment. To improve the adaptiveness of the model and the controller, we propose an online dynamics learning framework that continually improves the accuracy of the dynamic model during deployment. We adopt knowledge-based neural ordinary differential equations (KNODE) as the dynamic models, and use techniques inspired by transfer learning to continually improve the model accuracy. We demonstrate the efficacy of our framework with a quadrotor, and verify the framework in both simulations and physical experiments. Results show that our approach can account for disturbances that are possibly time-varying, while maintaining good trajectory tracking performance.

Additional resources:
* https://arxiv.org/abs/2207.09344

<embed src="/labtalks/assets/slides/2024-10-07--Rishi--OnlineKNODE.pdf" type="application/pdf" width="100%" height="600px">

For the video in the presentation, refer below:
<video width="100%" controls>
  <source src="/labtalks/media/2024-10-07--Rishi--OnlineKNODE.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
