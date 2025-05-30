---
title: "Capacitor"
sidebar_position: 2
---

## Overview
Shockley-Read-Hall (SRH) windows allow the user to define a rectangular region where the default carrier lifetimes for SRH recombination can be adjusted. Within this window, the carrier lifetimes are scaled by a constant factor, providing precise control over the recombination dynamics in specific regions of the device.

## Usage Instructions
To define an SRH window:
1. From the Menu, select Define -> Window -> Shockley-Read-Hall.

<p align="center">
  <img src="/img/device-editor/windows/srh/01.png" width="800"/>
</p>

2. Use your cursor and mouse buttons to define a rectangular doping window.

<p align="center">
  <img src="/img/device-editor/windows/srh/02.png" width="800"/>
</p>

3. Once the window's shape has been defined the SRH window's properties dialog box will appear.  Use this dialog to set the window's properties.

<p align="center">
  <img src="/img/device-editor/windows/srh/03.png" width="400"/>
</p>

## Parameters

### General
<div class="properties-table">

| Name                                | Description                                                               | Unit       |
|-------------------------------------|---------------------------------------------------------------------------|------------|
| `Name`                              | A unique identifier for the window.                                       | -          |
| `Colour`                            | Used to define visual colour of the window (Not used in the solver).      | -          |
| `Scale Factor for Carrier Lifetime` | Multiplies the default carrier lifetimes within the window by this value. | -          |

</div>

### Geometry
<div class="properties-table">

| Name    | Description                                                     | Unit    |
|---------|-----------------------------------------------------------------|---------|
| `Top`   | The y-coordinate of the top edge of the SRH window.             | Microns |
| `Depth` | The vertical distance from the top to the bottom of the window. | Microns |
| `Left`  | The x-coordinate of the left edge of the SRH window.            | Microns |
| `Right` | The x-coordinate of the right edge of the SRH window.           | Microns |

</div>