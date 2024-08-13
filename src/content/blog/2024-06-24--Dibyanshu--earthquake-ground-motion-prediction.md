---
author: Dibyanshu Mohapatra
pubDatetime: 2024-06-24T14:00:00.000+05:30
modDatetime:
title: Application of a New Machine Learning Model to Improve Earthquake Ground Motion Predictions
featured: false
draft: false
slug: earthquake-ground-motion-prediction
tags:
  - "2024"
  - SeisEML
  - ML Applications
description: This paper presents a cross-region prediction model named SeisEML for predicting peak ground acceleration (PGA) during earthquakes. The SeisEML model combines hybridized models, kernel-based algorithms, tree regression algorithms, and regression algorithms to achieve improved accuracy compared to conventional attenuation relations. The model has been tested on datasets from Japan and Iran, demonstrating its potential for regional and global earthquake predictions.
---

A cross-region prediction model named SeisEML (an acronym for Seismological Ensemble Machine Learning) has been developed in this paper to predict the peak ground acceleration (PGA) at a given site during an earthquake. The SeisEML model consists of hybridized models, kernel-based algorithms, tree regression algorithms, and regression algorithms. The model ablation study is conducted to examine the performance and the selection of meta-machine learning models in the SeisEML. The training and testing dataset consists of 20852 and 6256 accelerograms recorded by the Kyoshin Network, Japan. The mean absolute error (MAE) and root mean square error (RMSE) have been utilized to compare the predicted peak ground acceleration (PGA) for the test data. The SeisEML model yields approximately half the MAE and RMSE values obtained with conventional attenuation relations. The SeisEML model has been used to compute Japan’s iso acceleration contour map of three earthquakes ( 7.4, 6.6, and 6.1). The qualitative comparison of iso acceleration contours obtained from actual and predicted PGA using SeisEML clearly shows that the model can reliably predict the PGA distribution during an earthquake compared to the regional ground motion prediction equation (GMPE). The cross-region prediction was performed on the datasets of the Iranian earthquakes using SeisEML. The comparison of predicted and observed peak ground acceleration in terms of MAE and RMSE shows that the machine learning model’s performance is superior to the regional attenuation relation. The predictions of PGA from the developed ML model indicate that this trained model has the potential for predicting regional and global scenarios with similar tectonic setups. The ML model developed in this paper can considerably enhance the reliability of PGA prediction for seismic hazard mapping of any region and can serve as a reliable substitute for GMPEs.

Additional resources:
https://doi.org/10.1007/s11069-023-06230-4

<embed src="/assets/slides/2024-06-24--Dibyanshu--earthquake-ground-motion-prediction.pdf" type="application/pdf" width="100%" height="600px">
