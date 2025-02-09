---
sidebar_position: 5
---

# Doping Windows

## Overview
One of the most important features of the Aquarius's device modelling capabilities is the ability to define the geometry of a device's regions using the Rectangle, Rounded Rectangle, Polygon and Import from CSV drawing functions.

After the outline geometry of a device has been drawn, the regions properties can be defined and material properties assigned to them.


## How to use
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

## Properties

## Region Properties
### General
<div class="properties-table">

| Name        | Description                                                 | Unit       |
|-------------|-------------------------------------------------------------|------------|
| `Name`     | A unique identifier for the region.                      | -          |
| `Material`     | Used to define the material properties of the region.     | -          |
| `Colour`     | Used to define visual colour of the region (Not used in the solver). | -          |

</div>

Available materials include Si, SiC, Oxide, Air (more coming soon). The properties of these materials can be fully customised by the user during setup of the device model. There are two general types of semiconductor can be defined, namely:  
- Single Composition (e.g. Si, GaAs, SiC)
- Variable Composition (e.g. AlGaN, AlGaAs).

### Doping
<div class="properties-table">

| Name        | Description                                                 | Unit       |
|-------------|-------------------------------------------------------------|------------|
| `Acceptor`  | Used to define the acceptor doping concentration in the region.                         | Atoms/cm³  |
| `Donor`     | Used to define the donor doping concentration in the region.       | Atoms/cm³  |

</div>

### Composition (Coming soon)
After a region has been defined, the user can specify a constant compositional profile over the region. The mole fraction X for a ternary compound and both X and Y mole fractions for quaternary materials can be specified. This command sets a constant values in a specified region.

<div class="properties-table">

| Name        | Description                                                 | Unit       |
|-------------|-------------------------------------------------------------|------------|
| `Mole Fraction X` | Used to define the acceptor doping concentration in the region.                         | Atoms/cm³  |
| `Mole Fraction Y` | Used to define the donor doping concentration in the region.       | Atoms/cm³  |

</div>

## Calculation of Vertical Diffusions
### Vertical Gaussian Scaling Factor

$$
y_{fact} = N_0 \exp \left( -\frac{y - y_{offset}}{\sigma_v} \right)
$$

- $N_0$ is the Peak doping concentration, given as the first vertical parameter.
- $y$ is the distance in y direction below/above window.
- $\sigma_v$ is the vertical straddle, given as 2nd vertical parameter.
- $y_{offset}$ is the offset of vertical peak below window, given as 3rd vertical parameter.

### Vertical Erfc Scaling Factor

$$
y_{\text{fact}} = N_0 \operatorname{erfc} \left( \frac{y}{\sigma_v} \right)
$$

- $N_0$ is the Peak doping concentration, given as the first vertical parameter.
- $y$ is the distance in y direction below/above window.
- $\sigma_v$ is the vertical straddle, given as 2nd vertical parameter.
- $y_{offset}$ is the offset of vertical peak below window, given as 3rd vertical parameter.

### Vertical User Defined Scaling Factor

$$
y_{\text{fact}} = y_{\text{user}} \left( {y} \right)
$$

- $N_0$ is the Peak doping concentration, given as the first vertical parameter.
- $y$ is the distance in y direction below/above window.
- $y_{\text{user}} \left( {y} \right)$ is the user profile.
- $\sigma_v$ is the vertical straddle, given as 2nd vertical parameter.
- $y_{offset}$ is the offset of vertical peak below window, given as 3rd vertical parameter.

## Calculation of Lateral Diffusions
The lateral extent of the profile is controlled by the point types, and the lateral choice.

### Lateral Rotation Scaling Factor
The lateral rotation scaling factor defines a series of elliptical contours for the lateral profile. Its value ranges from 0 to 1, where 1 represents a circular shape. Typically, values between 0.5 and 0.8 are used.

For $x$ outside window:

$$
x_{\text{fact}} = \sqrt{\left(\frac{x - x_w}{r}\right)^2 + y^2}
$$

Otherwise:

$$
x_{\text{fact}} = 1
$$

- $x$ is the current x coordinate.
- $x_w$ is either window edge.
- $y$ is the distance in y direction below/above window.
- $r$ is the Radial reduction factor, given as 1st lateral parameter.

### Lateral Erfc Scaling Factor
If both points are window points:

$$
x_{\text{fact}} = \operatorname{erfc}{\left(\frac{x - x_y}{\sigma_l}\right) - \operatorname{erfc}\left(\frac{x - x_l}{\sigma_l}\right)  }
$$

If only a left point is a window point:

$$
x_{\text{fact}} = -\operatorname{erfc}\left(\frac{x - x_l}{\sigma_l}\right)^2
$$

If only a right point is a window point:

$$
x_{\text{fact}} = \operatorname{erfc}\left(\frac{x - x_y}{\sigma_l}\right)^2
$$

If neither point is a window point:

$$
x_{\text{fact}} = 1
$$

- $y$ is the distance in y direction below/above window.
- $\sigma_l$ is the lateral straddle, given as 1st lateral parameter.

A window point is defined as...?

## Total Doping
The total doping at point is defined as:
$$
N(x, y) = x_{\text{fact}} \cdot y_{\text{fact}}
$$