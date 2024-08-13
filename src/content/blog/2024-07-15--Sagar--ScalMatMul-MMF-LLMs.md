---
author: Sagar Prakash Barad
pubDatetime: 2024-07-15T14:00:00.000+05:30
modDatetime:
title: Scalable MatMul-free Language Modeling
featured: false
draft: false
slug: scalmatmul-mmf-llms
tags:
  - "2024"
  - MatMul-free language model
  - Ternary Weights
  - Large Language Models
description: This talk presents a paper that proposes a scalable MatMul-free language model, challenging the assumption that matrix multiplications are essential for high-performing language models. The paper demonstrates that by using ternary weights and element-wise Hadamard products, MatMul operations can be completely removed from large language models while maintaining strong performance. The paper provides an optimized implementation of the MatMul-free language model, achieving significant reductions in memory usage and latency compared to conventional models.
---

For this week's talk, I will be presenting a paper that proposes the first scalable MatMul-free language model, challenging the assumption that matrix multiplications (MatMuls) are essential for high-performing language models. The paper demonstrates that by using ternary weights in dense layers and element-wise Hadamard products for self-attention-like functions, MatMul operations can be completely removed from large language models (LLMs) while maintaining strong performance at billion-parameter scales. The performance of the MatMul-free language model is compared against a state-of-the-art Transformer architecture on a range of language tasks. Results demonstrate that MatMul-free architectures can achieve competitive zero-shot performance on these tasks. Notably, the performance gap between MatMul-free LMs and Transformers narrows with increasing model size. The paper provides an optimized implementation of the MatMul-free language model that enhances both training and inference efficiency. This implementation achieves significant reductions in memory usage and latency compared to conventional Transformers. The authors further present an FPGA implementation of the model, highlighting its potential for efficient deployment on resource-constrained hardware.

For the talk, I will start with a brief introduction to transformer language models and how they work. Interested individuals can also visit the following link for more information.

Additional resources:
https://nlp.seas.harvard.edu/2018/04/03/attention.html.

<embed src="/labtalks/assets/slides/2024-07-15--Sagar--ScalMatMul-MMF-LLMs.pdf" type="application/pdf" width="100%" height="600px">
