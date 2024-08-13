---
author: Adhilsha A.
pubDatetime: 2024-07-22T14:00:00.000+05:30
modDatetime:
title: The Era of 1-bit LLMs - A Brief Overview
featured: false
draft: false
slug: 1-bit-LLMs
tags:
  - "2024"
  - 1-bit LLMs
  - BitNet
  - Scaling Laws
  - Large Language Models
description: This overview discusses the concept of 1-bit Large Language Models (LLMs) based on the paper "The Era of 1-bit LLMs - All Large Language Models are in 1.58 Bits". It presents BitNet b1.58, a 1-bit LLM variant that achieves competitive performance with full-precision Transformer LLMs while being more cost-effective in terms of latency, memory, throughput, and energy consumption. The overview highlights the potential of 1-bit LLMs in defining new scaling laws, training models, and designing hardware optimized for 1-bit LLMs.
---

Based on the paper "The Era of 1-bit LLMs: All Large Language Models are in 1.58 Bits", we will have a brief overview on 1-bit LLMs. Recent research, such as BitNet, is paving the way for a new era of 1-bit Large Language Models (LLMs). In this work, we introduce a 1-bit LLM variant, namely BitNet b1.58, in which every single parameter (or weight) of the LLM is ternary {-1, 0, 1}. It matches the full-precision (i.e., FP16 or BF16) Transformer LLM with the same model size and training tokens in terms of both perplexity and end-task performance, while being significantly more cost-effective in terms of latency, memory, throughput, and energy consumption. More profoundly, the 1.58-bit LLM defines a new scaling law and recipe for training new generations of LLMs that are both high-performance and cost-effective. Furthermore, it enables a new computation paradigm and opens the door for designing specific hardware optimized for 1-bit LLMs.

Additional resources:
https://arxiv.org/abs/2402.17764

<embed src="/assets/slides/2024-07-22--Adhilsha--1-bit-LLMs.pdf" type="application/pdf" width="100%" height="600px">
