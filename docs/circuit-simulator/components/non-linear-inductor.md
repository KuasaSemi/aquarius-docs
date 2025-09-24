---
title: "Non Linear Inductor"
sidebar_position: 7
---

## Overview
This provides an inductor where the inductance is a function of the current.

The inductor obeys the equation:

$$
V(t) = L(I)\frac{dI(t)}{dt}
$$

or in integral form:

$$
I(t) = I(t_0) + \frac{1}{L(I)} \int_{t_0}^t V(\tau) \, d\tau 
$$

When not running a transient simulation the inductor is ignored (i.e. treated as a short circuit).

## Specifying Values
The relationship between inductance and current is specified as piecewise linear with pairs of current and inductance specified in the properties. Between the points specified linear interpolation is used to find the inductance. Outside the range of points, the first and last pair will be used.

## Parameters

<div class="properties-table">

| Name         | Description                                                | Unit     |
|--------------|------------------------------------------------------------|----------|
| `Name`       | A unique identifier for the component.                     | -        |
| `Current`    | ($I$) Value of current with a known inductance             | Amperes  |
| `Inductance` | ($L$) Inductance of the inductor at the specified current. | Henries  |

</div>