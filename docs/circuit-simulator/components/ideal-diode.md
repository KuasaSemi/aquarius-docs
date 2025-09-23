---
title: "Ideal Diode"
sidebar_position: 4
---

## Overview
This component provides a diode which obeys the Shockley Diode Equation:

$$
I_D = I_S (e^{V_D/nV_T} - 1)
$$

where
$I_D$ is the diode current,
$I_S$ is the reverse-bias saturation current and
$V_D$ is the voltage across the diode.

Thermal voltage $V_T$ is defined by $KT/q$ where $K$ is the Boltzmann constant, $T$ is the temperature at the junction and $q$ is the electron charge.

The idealty factor $n$ is 1 for an ideal diode. Higher values account for imperfect junctions.

## Parameters

<div class="properties-table">

| Name                     | Description                                | Unit    |
|--------------------------|--------------------------------------------|---------|
| `Name`                   | A unique identifier for the component.     | -       |
| `Saturation Current`     | ($I_S$) Reverse-bias saturation current    | Amperes |
| `Idealty Factor`         | ($n$)                                      | -       |
| `Forward Bias Resistance`| The fixed resistance value in forward bias | Ohms    |

</div>

## Usage Instructions
:::tip
For instructions on adding a component to the simulation circuit, click [here](../basics/adding-components.md).
:::