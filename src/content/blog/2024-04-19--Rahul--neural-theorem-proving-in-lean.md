---
author: Rahul Vishwakarma
pubDatetime: 2024-04-19T14:00:00.000+05:30
modDatetime:
title: Neural Theorem Proving in Lean
featured: false
draft: false
slug: neural-theorem-proving-in-lean
tags:
  - "2024"
  - neural theorem proving
  - lean
  - large language models
description: This talk explores integrating large language models (LLMs) and interactive theorem provers (ITPs) like Lean to automate theorem proving. It covers recent advancements, data augmentation, dynamic sampling methods, and the development of tools to facilitate experiments in Lean 4.
---

Theorem proving is a fundamental task in mathematics. With the advent of large language models (LLMs) and interactive theorem provers (ITPs) like Lean, there has been growing interest in integrating LLMs and ITPs to automate theorem proving. In this approach, the LLM generates proof steps (tactics), and the ITP checks the applicability of the tactics at the current goal. The two systems work together to complete the proof. In this talk, in the first half, I will discuss two recent advancements in the field of neural theorem proving - AlphaGeometry - Solving olympiad geometry without human demonstrations Graph2Tac - Learning hierarchical representations of math concepts in theorem proving. In the second half of the talk, I will discuss the progress of my work on neural theorem proving in Lean. This includes data augmentation, introduction of dynamic sampling methods, our public website for proving mathematical statements with its API usage, porting of standard datasets (ProofNet and MiniF2F) to Lean 4 to facilitate experiments in Lean 4, and the development of a new tokenizer for Lean to make the tactic generator model more efficient.

**No slides are available for this talk.**
