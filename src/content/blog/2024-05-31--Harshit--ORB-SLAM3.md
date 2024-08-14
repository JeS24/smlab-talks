---
author: Harshit Agarwal
pubDatetime: 2024-05-31T14:00:00.000+05:30
modDatetime:
title: ORB-SLAM3 - An Accurate Open-Source Library for Visual, Visual-Inertial and Multi-Map SLAM
featured: false
draft: false
slug: orb-slam3
tags:
  - "2024"
  - SLAM
  - ORB-SLAM3
  - Visual-Inertial SLAM
  - Monocular
  - Computer Vision
description: This paper presents ORB-SLAM3, the first system able to perform visual, visual-inertial and multi-map SLAM with monocular, stereo and RGB-D cameras. The system operates robustly in real time, in small and large, indoor and outdoor environments, and is two to ten times more accurate than previous approaches.
---

This paper presents ORB-SLAM3, the first system able to perform
visual, visual-inertial and multi-map SLAM with monocular, stereo
and RGB-D cameras, using pin-hole and fisheye lens models. The
first main novelty is a feature-based tightly-integrated
visual-inertial SLAM system that fully relies on
Maximum-a-Posteriori (MAP) estimation, even during the IMU
initialization phase. The result is a system that operates robustly
in real time, in small and large, indoor and outdoor environments,
and is two to ten times more accurate than previous approaches.

The second main novelty is a multiple map system that relies
on a new place recognition method with improved recall. Thanks
to it, ORB-SLAM3 is able to survive to long periods of poor
visual information: when it gets lost, it starts a new map that
will be seamlessly merged with previous maps when revisiting
mapped areas. Compared with visual odometry systems that
only use information from the last few seconds, ORB-SLAM3
is the first system able to reuse in all the algorithm stages all
previous information. This allows to include in bundle adjustment
co-visible keyframes, that provide high parallax observations
boosting accuracy, even if they are widely separated in time or
if they come from a previous mapping session.

Our experiments show that, in all sensor configurations,
ORBSLAM3 is as robust as the best systems available in the literature,
and significantly more accurate. Notably, our stereo-inertial
SLAM achieves an average accuracy of 3.5 cm in the EuRoC
drone and 9 mm under quick hand-held motions in the room of
TUM-VI dataset, a setting representative of AR/VR scenarios.
For the benefit of the community we make public the source
code.

Additional resources:
- https://arxiv.org/pdf/2007.11898
- https://github.com/UZ-SLAMLab/ORB_SLAM3

<embed src="/labtalks/assets/slides/2024-05-31--Harshit--ORB-SLAM3.pdf" type="application/pdf" width="100%" height="600px">
