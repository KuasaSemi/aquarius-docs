---
sidebar_position: 2
---

# Regions

## Overview
One of the most important features of the Aquarius's device modelling capabilities is the ability to define the geometry of a device's regions using the Rectangle, Rounded Rectangle, Polygon and Import from CSV drawing functions. After the outline geometry of a device has been drawn, the regions properties can be defined and material properties assigned to them.

## Usage Instructions
To define a region:
1. From the Menu, select Define -> Region and select the type of geometry you would like to define (Rectangle, Polygon etc.).

<p align="center">
  <img src="/img/regions/01.png" width="800"/>
</p>

2. Use your cursor and mouse buttons to define the region shape. Or if importing geometry from a .csv file, select the file you want to use.

<p align="center">
  <img src="/img/regions/02.png" width="800"/>
</p>

3. Once the region's shape has been defined the region properties dialog box will appear.  Use this dialog to set the region's properties.

<p align="center">
  <img src="/img/regions/03.png" width="800"/>
</p>

## Parameters
### General
<div class="properties-table">

| Name       | Description                                                          | Unit       |
|------------|----------------------------------------------------------------------|------------|
| `Name`     | A unique identifier for the region.                                  | -          |
| `Material` | Used to define the material properties of the region.                | -          |
| `Colour`   | Used to define visual colour of the region (Not used in the solver). | -          |

</div>

The properties of these materials can be fully customised by the user during setup of the device model. There are two general types of semiconductor can be defined, namely:  
- Single Composition (e.g. Si, GaAs, SiC)
- Variable Composition (e.g. AlGaN, AlGaAs).

### Doping
<div class="properties-table">

| Name       | Description                                                     | Unit       |
|------------|-----------------------------------------------------------------|------------|
| `Acceptor` | Used to define the acceptor doping concentration in the region. | Atoms/cm³  |
| `Donor`    | Used to define the donor doping concentration in the region.    | Atoms/cm³  |

</div>

### Composition
After a region has been defined, the user can specify a constant compositional profile over the region. The mole fraction X for a ternary compound and both X and Y mole fractions for quaternary materials can be specified. This command sets a constant values in a specified region.

<div class="properties-table">

| Name              | Description                                                   | Unit       |
|-------------------|---------------------------------------------------------------|------------|
| `Mole Fraction X` | Used define the mole fraction X. Value range between 0 and 1. | -          |
| `Mole Fraction Y` | Used define the mole fraction Y. Value range between 0 and 1. | -          |
| `Force All Edges to Specified Composition` | Forces all the edges of a defined region to have the compositions defined by  mole-fraction parameters. Options: [True, False] | -  |

</div>

### Point Coordinates
Once a region has been defined, users can modify its geometric points to adjust its shape. Users can add, edit, and delete points as needed.

- Editing Coordinates: Modify the region’s coordinates by directly editing the values in the table cells.
- Adding a Point: Click the Add button to insert a new point.
- Deleting a Point: Select the point to be removed and click Delete Region.

The region points are specified in a clockwise direction, so ensure they remain in the correct order to avoid inverting the shape.

Each point has two parameters.

<div class="properties-table">

| Name        | Description                       | Unit       |
|-------------|-----------------------------------|------------|
| `X`         | Used to define the X coordinate.  | Microns    |
| `Y`         | Used to define the Y coordinate.  | Microns    |

</div>