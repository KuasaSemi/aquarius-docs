---
sidebar_position: 2
---

# Device Modelling
The definition of a physical device model consists of several steps. This includes the definition of the device geometry, doping and physical properties of the device, as well as the finite element mesh used in the analysis and the models employed to simulate the device.

To define the device geometry directly, a user friendly CAD interface is provided that enables the user to rapidly construct complex device structures and to define the material regions. The user can also define ancillary items and properties such as electrical and thermal contacts and interface states.

The doping profile of the device is normally defined in the fabrication process model. However, the doping profile can also be defined directly without reference to a process model. Functions are provided to allow the user to apply uniform doping concentrations to device regions and the definition of more complex profiles specified through windows which can be placed on any horizontal surface in the geometry. Standard functions (Guassian and error function) or a use defined profile can be specified though each window. The user defined data can come from measurements or from a process simulation package such as SUPREM. All the different doping steps are summed to give a total doping concentration. The shape of the lateral doping profile can also be specified.

The finite element mesh generator is based on the Delaunay triangulation method for connecting up a given set of points into an optimum set of triangles. Using this technique, any set of points can be triangulated to give a set of triangles with positive pipe-widths along triangle edges. This is a very important consideration when solving the current continuity equations in the main solver. The difficulty is thus defining the location of a set of nodes for the analysis. The user has the task of defining a set of orthogonal lines in the x any y directions. The intersection of these lines gives a set of nodes that will be used in the mesh definition. Lines need not extend the entire span of the device in the x or y directions. The termination of the lines in this way allows regions of localised refinement to be defined, allowing the nodes to be placed in the place they are needed. An existing mesh may also be refined in the X or Y direction to refine a mesh in a given region.

Finally, a range of physical models are available to be used in the simulation of the device being defined and can be configured by the user. The available models include:

- Mobility:
  - Constant
  - Impurity
  - Carrier-Scattering
  - Surface
  - Field Dependent

- Generation Recombination:
  - Shockley-Read-Hall
  - Direct
  - Auger
  - Impact Ionisation

- Optical
- Band-gap Narrowing
- Fermi-Dirac Statistics
- Temperature
- Surface Recombination Effects

The physical models employed by the simulator are described in more detail in the reference section at the end of this document.