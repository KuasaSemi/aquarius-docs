---
title: "Capacitor"
sidebar_position: 2
---

## Overview
This component provides an ideal capacitor between its two terminals. An ideal capacitor is a passive, linear component that stores electrical energy in the form of an electric field. It opposes changes in voltage by accumulating or releasing charge, with the relationship between charge ($Q$), capacitance  ($C$), and voltage  ($V$) defined by:
$$
Q=CV
$$
The voltage across an ideal capacitor is related to the current  ($I$) flowing through it by:
$$
I = C \frac{dv}{dt}
$$

where $C$ is the fixed capacitance value, and $\frac{dv}{dt}$ is the rate of change of the voltage.

## Parameters

<div class="properties-table">

| Name          | Description                                         | Unit   |
|---------------|-----------------------------------------------------|--------|
| `Name`        | A unique identifier for the component.              | -      |
| `Capacitance` | The fixed capacitance value of the ideal capacitor. | Farads |

</div>


## Usage Instructions
:::tip
For instructions on adding a component to the simulation circuit, click [here](../basics/adding-components.md).
:::