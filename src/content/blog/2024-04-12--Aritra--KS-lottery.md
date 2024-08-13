---
author: Aritra Mukhopadhaya
pubDatetime: 2024-04-12T14:00:00.000+05:30
modDatetime:
title: KS-Lottery - Finding Certified Lottery Tickets for Multilingual Language Models
featured: false
draft: false
slug: ks-lottery
tags:
  - "2024"
  - lottery ticket hypothesis
  - multilingual language models
description: The KS-Lottery method identifies a small subset of LLM parameters highly effective in multilingual fine-tuning. This talk covers the theoretical foundation, experimental results, and surprising findings, such as fine-tuning 18 tokens’ embedding of LLaMA sufficing to reach full fine-tuning translation performance.
---

The lottery ticket hypothesis posits the existence of “winning tickets” within a randomly initialized neural network. Do winning tickets exist for LLMs in fine-tuning scenarios? How can we find such winning tickets? In this paper, we propose KS-Lottery, a method to identify a small subset of LLM parameters highly effective in multilingual fine-tuning. Our key idea is to use Kolmogorov-Smirnov Test to analyze the distribution shift of parameters before and after fine-tuning. We further theoretically prove that KS-Lottery can find the certified winning tickets in the embedding layer, fine-tuning on the found parameters is guaranteed to perform as well as full fine-tuning. Comparing KS-Lottery with other parameter-efficient tuning algorithms on translation tasks, the experimental results show that KS-Lottery finds a much smaller set of parameters for fine-tuning while achieving the comparable performance as full finetuning LLM. Surprisingly, we find that fine-tuning 18 tokens’ embedding of LLaMA suffices to reach the fine-tuning translation performance.

**No slides are available for this talk.**
