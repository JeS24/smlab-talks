---
author: Jyotirmaya Shivottam
pubDatetime: 2023-09-12T00:14:00.000+05:30
modDatetime:
title: Exploring Long-term (Time-)Series Forecasting (LTSF) using Echo State Networks (ESNs) and comparisons with Single-Layer Perceptron (SLP), MLP, LSTM and especially Attention-based methods
featured: false
draft: false
slug: comparing-esn-lstm-transformers-for-ltsf
tags:
  - "2023"
  - Time Series Forecasting
  - Echo State Networks
  - Transformers
description: This talk will explore Echo State Networks (ESNs) and their applications in Long-term (Time-)Series Forecasting (LTSF). We will compare ESNs with Single-Layer Perceptron (SLP), Multi-Layer Perceptron (MLP), Long Short-Term Memory (LSTM) networks, and especially attention-based methods for LTSF.
---

ESNs are a type of Recurrent Neural Networks that are designed to capture long-term dependencies in sequential, usually time-series, data. Training the model involves training only the readout layer of the network, while the internal weights are randomly initialized and kept fixed. This makes the training process very fast and efficient, enabling ESNs to be great online learners. The random initialization of the internal weights is done in such a way that the network has the so-called Echo State Property, which is responsible for the network's ability to capture long-term dependencies, even in chaotic data. ESNs have been shown to outperform all methods in LTSF, and are also much faster to train. However, they are not as popular as LSTMs or now, transformers, and are not as well-studied. In this talk, we will: 1. explore what ESNs are & resources therein; 2. look at a recent ESN architecture - HP-MRESN 3. compare them with LSTMs - several works & own experiments; 4. and, in particular, compare them with recent results for attention-based methods for LTSF.

Additional resources:
https://arxiv.org/abs/2205.13504

NOTE: The talk on September 22 follows this talk. The slides below are the same for both talks.

<embed src="/labtalks/assets/slides/2023-09-12--Jyotirmaya--esn-v-transformers.pdf" type="application/pdf" width="100%" height="600px">
