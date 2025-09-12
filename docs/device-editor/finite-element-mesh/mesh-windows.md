---
title: "Mesh Windows"
sidebar_position: 4
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Mesh Windows

## Overview
Mesh windows are used to specify an area of the device where mesh elements will be additionally refined.
Mesh windows can only be used to specify a maximum mesh size. 
Where mesh windows overlap with other areas of mesh refinement (near the metallurgical junction, oxide boundary or other mesh windows) the smallest size hint will be used.

## Usage Instructions
To define a mesh window:
1. From the Menu, select Define -> Window -> Mesh.

<p align="center">
  <img src={useBaseUrl('img/device-editor/finite-element-mesh/mesh-windows/01.png')} width="800"/>
</p>

2. Use your cursor and mouse buttons to define a rectangular mesh window.

<p align="center">
  <img src={useBaseUrl('img/device-editor/finite-element-mesh/mesh-windows/02.png')} width="800"/>
</p>

3. Once the window's shape has been defined the mesh window's properties dialog box will appear.  Use this dialog to set the window's properties.

<p align="center">
  <img src={useBaseUrl('img/device-editor/finite-element-mesh/mesh-windows/03.png')} width="800"/>
</p>

## Parameters

<div class="properties-table">

| Name             | Description                                                                      | Unit       |
|------------------|----------------------------------------------------------------------------------|------------|
| `Name`           | A unique identifier for the window.                                              | -          |
| `Colour`         | Used to define visual colour of the region (Not used in the solver).             | -          |
| `Top`            | The position of the top of the window.                                           | Microns    |
| `Bottom`         | The position of the bottom of the window.                                        | Microns    |
| `Left`           | The position of the left of the window.                                          | Microns    |
| `Right`          | The position of the right of the window.                                         | Microns    |
| `Mesh Size Hint` | The approximate size of mesh elements within this window.                        | Microns    |

</div>
