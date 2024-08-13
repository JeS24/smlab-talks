---
author: Rahul Vishwakarma
pubDatetime: 2023-08-14T14:00:00.000+05:30
modDatetime:
title: DT-Solver - Automated Theorem Proving with Dynamic-Tree Sampling Guided by Proof-level Value Function
featured: false
draft: false
slug: DT-solver
tags:
  - "2023"
  - theorem proving
  - dynamic-tree sampling
description: This talk discusses DT-Solver, a novel approach to automated theorem proving that uses dynamic-tree Monte-Carlo search and a proof-level value function for improved state exploration.
---

Recent advances in neural theorem-proving resort to large language models and tree searches. When proving a theorem, a language model advises single-step actions based on the current proving state and the tree search finds a sequence of correct steps using actions given by the language model. However, prior works often conduct constant computation efforts for each proving state while ignoring that the hard states often need more exploration than easy states. Moreover, they evaluate and guide the proof search solely depending on the current proof state instead of considering the whole proof trajectory as human reasoning does. So we will discuss the work of the paper DT-Solver: Automated Theorem Proving with Dynamic-Tree Sampling Guided by Proof-level Value Function, which proposes a novel Dynamic-Tree Driven Theorem Solver (DT-Solver) to accommodate general theorems, by guiding the search procedure with state confidence and proof-level values. Specifically, DT-Solver introduces a dynamic-tree Monte-Carlo search algorithm, which dynamically allocates computing budgets for different state confidences, guided by a new proof-level value function to discover proof states that require substantial exploration.

Additional resources:
https://aclanthology.org/2023.acl-long.706.pdf

<embed src="/labtalks/assets/slides/2023-08-14--Rahul--DT-solver.pdf" type="application/pdf" width="100%" height="600px">
