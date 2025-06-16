---
title: "Introduction"
sidebar_position: 1
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Overview
Once a device model has been created in the Aquarius Device Editor, it can be loaded into a circuit environment to define the electrical circuit surrounding the device. This step is essential for simulating real-world operating conditions and interactions between the device and external components.

The mixed mode capabilities of the simulator mean that the circuit may contain passive and active components as well as other two-dimensional devices or predefined circuit models. Once a suitable circuit has been defined, the device structure can be simulated in any one of three modes of operation:

1. Steady State
2. Transient
3. IV Curve Trace

Simulations can also be re-started from existing simulations as a continuation run from an initial condition. Sometimes re-starting a simulation from an initial condition is desirable when the numerical complexity of a model is such that the solver will fail to converge on a solution and an indirect approach is required. The solver employed in the simulation of the circuit and solution of the device physics equations is fully configurable. In many cases, the default settings of the solver will be appropriate for most simulations. However, for highly non-linear problems the user can adjust the search parameters to achieve optimum convergence on a solution.
