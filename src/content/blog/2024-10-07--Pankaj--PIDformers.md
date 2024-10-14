---
author: PANKAJ KUMAR
pubDatetime: 2024-10-07T11:00:00.000+05:30
modDatetime: 
title: PIDformers (Transformers meet control theory)
featured: false
draft: false
slug: Intro-to-pid-control-in-transformers
tags:
  - "2024" 
  - "Adversarial Attacks"
  - "Transformers"
 
description: This talk address two key shortcomings of transformer architectures, input corruption and rank collapse in output representation. By framing self-attention as a state-space model, and reveal its tendency towards lower-rank outputs and sensitivity to input perturbations. To enhance robustness and representation capacity, a Proportional-Integral-Derivative (PID) feedback control system is introduced.
---

 In this work, we address two main shortcomings of transformer architectures: input corruption and rank collapse in their output representation. We unveil self-attention as an autonomous state-space model that inherently promotes smoothness in its solutions, leading to lower-rank outputs and diminished representation capacity. Moreover, the steady-state solution of the model is sensitive to input perturbations. We incorporate a Proportional-Integral-Derivative (PID) closed-loop feedback control system with a reference point into the model to improve robustness and representation capacity. This integration aims to preserve high-frequency details while bolstering model stability, rendering it more noise-resilient. The resulting controlled state-space model is theoretically proven robust and adept at addressing the rank collapse. Motivated by this control framework, we derive a novel class of transformers, PID-controlled Transformer (PIDformer), aimed at improving robustness and mitigating the rank-collapse issue inherent in softmax transformers. We empirically evaluate the model for advantages and robustness against baseline transformers across various practical tasks, including object classification, image segmentation, and language modeling.

Additional resources:
1. PIDformer: Transformer Meets Control Theory - https://arxiv.org/abs/2402.15989

<embed src="/labtalks/assets/slides/2024-10-07--Pankaj--PIDformers.pdf" type="application/pdf" width="100%" height="600px">
