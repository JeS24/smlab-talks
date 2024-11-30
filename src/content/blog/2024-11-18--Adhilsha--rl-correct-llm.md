---
author: Adhilsha Ansad
pubDatetime: 2024-11-18T15:45:00.000+05:30
modDatetime: 
title: Training LLMs to Self-Correct via RL
featured: false
draft: false
slug: rl-correct-llm
tags:
  - "2024"
  - reinforcement learning
  - self correction
  - large language models
description: This talk will discuss the training of large language models (LLMs) to self-correct their predictions using reinforcement learning (RL).
---

This talk presents a novel multi-turn online reinforcement learning framework designed to enhance the self-correction capabilities of large language models (LLMs). Unlike conventional methods, this approach leverages entirely self-generated data, addressing key limitations of supervised fine-tuning (SFT), such as its ineffectiveness in fostering self-correction and its susceptibility to distribution mismatches between training data and model outputs. The proposed two-stage framework first optimizes correction behavior and subsequently amplifies self-correction through a reward-based mechanism during training. Applied to Gemini 1.0 Pro and 1.5 Flash models, this method achieves state-of-the-art self-correction performance, demonstrating a 15.6% improvement on the MATH benchmark and a 9.1% improvement on HumanEval compared to the base models.

Additional resources:
1. Training Language Models to Self-Correct via Reinforcement Learning - https://arxiv.org/abs/2409.12917

<embed src="/labtalks/assets/slides/2024-11-18--Adhilsha--rl-correct-llm.pdf" type="application/pdf" width="100%" height="600px">
