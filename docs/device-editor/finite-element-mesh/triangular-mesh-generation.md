---
sidebar_position: 3
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Mesh Generation

## Usage Instructions
Before creating a finite element device model, it is important to ensure that at least one region is defined.

To generate a finite element model:
1. From the Menu, select Mesh -> Generate Finite Element Mesh Model. This will open the mesh properties dialog.

<p align="center">
  <img src={useBaseUrl('img/device-editor/finite-element-mesh/triangular-mesh-generation/01.png')} width="800"/>
</p>

2. From this window various mesh size hints can be defined. These give the approximate size of mesh elements in the device.
   The size of the mesh can be specified for the whole device and near the metallurgical junction and oxide boundary.
   If you require mesh refinement in other areas you can add [mesh windows](/device-editor/finite-element-mesh/mesh-windows).

<p align="center">
  <img src={useBaseUrl('img/device-editor/finite-element-mesh/triangular-mesh-generation/02.png')} width="600"/>
</p>

3. Once you are satisfied with the settings, click `OK` to generate the mesh.

4. Depending on the complexity of the device model and the meshing grid, the generation process may take some time.
   The progress of the mesh generation will be displayed in the status window in the centre of the screen.
   Once complete, the finished FE model will be displayed.
   The P and N regions of the device will be shown in red and blue, highlighting the position of the metallurgical junction, which is the point where the net doping concentration is zero Atoms/cm³.

<p align="center">
  <img src={useBaseUrl('img/device-editor/finite-element-mesh/triangular-mesh-generation/03.png')} width="800"/>
</p>

## Parameters

<div class="properties-table">

| Name                       | Description                                                                                                                                            | Unit      |
|----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|
| Max Element Size Hint      | The approximate size of mesh elements throughout the whole device.                                                                                     | Microns   |
| Min Angle                  | Triangles in the mesh will have internal angles above this value. This affects the smoothness of the mesh but higher values can cause meshing to fail. | Degrees   |
| Distance to Junction       | Additional refinement will be applied to elements within this distance to the metallurgical junction. The size of elements will scale linearly from the minimum size at the junction to the maximum size at this distance  | Microns |
| Distance to Oxide Boundary | Additional refinement will be applied to elements within this distance to the oxide boundary. The size of elements will scale linearly from the minimum size at the boundary to the maximum size at this distance          | Microns |
| Minimum Size Hint          | The approximate size of mesh elements at the junction/boundary.                                                                                        | Microns   |
| Maximum Size Hint          | The approximate size of mesh elements at the specified distance to the junction/boundary.                                                              | Microns   |

</div>
