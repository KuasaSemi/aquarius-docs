---
title: "Switch"
sidebar_position: 9
---

## Overview

A simple voltage controlled switch.
When the control voltage is greater than the Upper Threshold Voltage ($V_H$) the switch has resistance equal to the Output Resistance On ($R_L$).
When the control voltage is less than the Lower Threshold Voltage ($V_L$) the switch has resistance equal to the Output Resistance Off ($R_H$).
The resistance ($R$) varies linearly when the control voltage ($V$) is between these thresholds:

$$
R = R_L + \frac{(R_H-R_L)}{(V_H-V_L)}  * (V-V_L)
$$

The upper threshold must be higher than the lower threshold.

## Parameters

<div class="properties-table">

| Name                      | Description                                      | Unit     |
|---------------------------|--------------------------------------------------|----------|
| `Name`                    | A unique identifier for the component.           | -        |
| `Lower Threshold Voltage` | ($V_L$) Threshold below which the switch is off. | Volts    |
| `Upper Threshold Voltage` | ($V_H$) Threshold above which the switch is on.  | Volts    |
| `Output Resistance Off`   | ($R_H$) Resistance in off state.                 | Ohms     |
| `Output Resistance On`    | ($R_L$) Resistance in on state .                 | Ohms     |

</div>