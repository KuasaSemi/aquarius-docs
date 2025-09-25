---
title: "Inductor"
sidebar_position: 6
---

## Overview
This provides an inductor with a fixed inductance.
The inductor obeys the equation:

$$
V(t) = L\frac{dI(t)}{dt}
$$

or in integral form:

$$
I(t) = I(t_0) + \frac{1}{L} \int_{t_0}^t V(\tau) \, d\tau 
$$

When not running a transient simulation the inductor is ignored (i.e. treated as a short circuit).

## Parameters

<div class="properties-table">

| Name         | Description                                       | Unit     |
|--------------|---------------------------------------------------|----------|
| `Name`       | A unique identifier for the component.            | -        |
| `Inductance` | ($L$) The fixed inductance of the inductor.       | Henries  |

</div>