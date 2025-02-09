---
sidebar_position: 5
---

# Doping Windows
One of the most important features of the Aquarius's device modelling capabilities is the ability to define the geometry of a device's regions using the Rectangle, Rounded Rectangle, Polygon and Import from CSV drawing functions.

After the outline geometry of a device has been drawn, the regions properties can be defined and material properties assigned to them.

To define a region:
1. From the Menu, select Define -> Region and select the type of geometry you would like to define (Rectangle, Polygon etc.).

<p align="center">
  <img src="/img/02.png" alt="Centered Image" width="800"/>
</p>

2. Use your cursor and mouse buttons to define the region shape. Or if importing geometry from a .csv file, select the file you want to use.

3. Once the region's shape has been defined the region properties dialog box will appear.  Use this dialog to set the region's properties.

<p align="center">
  <img src="/img/03.png" alt="Centered Image" width="800"/>
</p>

## Region Properties
#### General
- Name: 
  A unique idemtifier for the region. No two regions may share the same name.
- Material: Used to define the material properties of the region. Available materials include Si, SiC, Oxide, Air (more coming soon). The properties of these materials can be fully customised by the user during setup of the device model. Note: There are two general types of semiconductor can be defined, namely:  
  1. Single Composition (e.g. Si, GaAs, SiC)
  2. Variable Composition (e.g. AlGaN, AlGaAs).  

#### Doping
- Acceptor Doping: Used to define the acceptor doping concentration in the region. (Units = Atoms/cm3).
- Donor Doping: Used to define the donor doping concentration in the region. (Units = Atoms/cm3).

#### Composition (Coming soon)
After a region has been defined, the user can specify a constant compositional profile over the region. The mole fraction X for a ternary compound and both X and Y mole fractions for quaternary materials can be specified. This command sets a constant values in a specified region.

Parameters:
- Mole Fractions X and Y: Used define the mole fractions X and Y. Value range between 0 and 1.  
- Wavelength: Re-calculates X and Y from the cut-off wavelength of the specific material.  
- Force All Edges to Specified Composition: Forces all the lines (edges) of a defined region to have the compositions defined by X and Y in the Mole-fraction parameter.  
- InGaAsP Lattice Match: Uses the value of the Y mole fraction to re-calculate the X mole fraction in order give the correct compositions for the specified lattice matching (Only applies to InGaAsP structures). Options to specify Off, GaAs or InP.

#### Point Coordinates
Once a region has been defined, users can modify its geometric points to adjust its shape. Users can add, edit, and delete points as needed.

- Editing Coordinates: Modify the region’s coordinates by directly editing the values in the table cells.
- Adding a Point: Click the Add button to insert a new point.
- Deleting a Point: Select the point to be removed and click Delete Region.

The region points are specified in a clockwise direction, so ensure they remain in the correct order to avoid inverting the shape.