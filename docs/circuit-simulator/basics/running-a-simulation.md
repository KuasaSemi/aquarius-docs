---
title: "Running a Simulation"
sidebar_position: 3
---

## Overview
Aquarius can perform three main types of simulation namely, Steady State (DC), Transient (time dependant). Simulations can also be re-started from existing simulations as a continuation run from an initial condition.

:::info
To run any type of simulation, the circuit must be correctly connected and meet the requirements for a valid configuration. For more details on what constitutes a valid circuit, click here.
:::

## Steady State
To perform a steady state simulation:
1. From the main menu, select Simulation -> Steady State.
2. The simulation window will appear and the simulation will start.
3. When the simulation has finished, close the simulation window

## Curve Trace
A curve trace simulation is a type of steady-state simulation used to characterise the electrical behaviour of semiconductor devices. This type of simulation uses an IV Curve Tracing Algorithm and may be preferred over a simple DC source with fixed steps because it provides more precise control over the sweep profile, allowing for accurate capture of rapid current changes and non-linear device behaviour which enables finer resolution around critical operating points.

## Transient
To perform a transient simulation:
1. From the main menu, select Simulation -> Transient.
2. Set the simulation end time to the required value.
3. When the simulation has finished, close the simulation window
Simulations can also be re-started from existing simulations as a continuation run from
an initial condition. Sometimes re-starting a simulation from an initial condition is
desirable when the numerical complexity of a model is such that the solver will fail to
converge on a solution and an indirect approach is required.


## Restart
To restart an existing simulation:
1. From the main menu, select Simulation..Restart.
2. When prompted select the existing simulation you wish to restart from.
3. Select the restart case or simulation time.
If the file from which the initial condition is being read is a transient then the time
parameter may be used to find the nearest case in the results files to the time specified.
Otherwise the case parameter provides the case number to read in for the initial
condition.