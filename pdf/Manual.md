# Aquarius TCAD User Manual
## Pre-Release DRAFT

<div style="page-break-after: always"></div>

# Table of contents


1. General Introduction
2. Device Modelling  
2.1. Introduction  
2.2. Device Shape  
2.3 Device Geometry  
2.4. Device Regions  
2.5. Region Composition  
2.6. Graded Composition

1. Device Shape  
1. Device Geometry  
 2. Device Regions  
2.5. Region Composition  
2.6. Graded Composition  
2.7. Material Properties  
2.8. Materials Models  
2.9. Contacts  
2.10. Surface States
2.11. Doping Windows  
2.12. SRH Windows  
2.13. Optical Illumination Windows  
2.14. Meshing Grid  
2.15. Finite Element Grid  
2.16. Mesh Refinement  
1. Circuit Simulation  
3.1. Circuit Components  
3.2. IV Curve Tracer Components  
3.3. Wiring Circuits  
3.4. Performing a Simulation  
3.5. Solver Controls  
1. Simulation Results  
4.1. Introduction  
4.2. Circuit Level Results  
4.3. Device Level Results  
1. Reference  
5.1. Physical Models  
1. License Agreement  
2. Ordering  

<div style="page-break-after: always"></div>

# General Introduction

Aquarius is a mixed mode 2D semiconductor process, device and circuit simulator for the desktop PC. With Aquarius you can create complex physical models of semiconductor devices and build sophisticated circuits with the minimum of effort in a powerful, yet easy to use TCAD environment. With access to the full range of device physics (including electro-thermal modelling), Aquarius provides a reliable and cost effective way to evaluate the performance and characteristics of most semiconductor devices before committing to fabrication.

Aquarius is composed of three highly integrated modules:

**Device Simulator**: Used to define the physical attributes of a two-dimensional semiconductor device structure. The definition of the device may be imported from a fabrication process model or defined directly without reference to a process model. The device model is then conveyed to the circuit simulator module for electrothermal simulation in the context of a circuit.

**Circuit Simulator**: Used to define the circuit and bias conditions for the device, it also solves the device and circuit equations, saving the results to a disk file.

**Post Processor**: Used to view the results of a simulation and to obtain hard copies.

<div style="page-break-after: always"></div>

## Device Modelling
The definition of a physical device model consists of several steps. This includes the definition of the device geometry, doping and physical properties of the device, as well as the finite element mesh used in the analysis and the models employed to simulate the device.

To define the device geometry directly, a user friendly CAD interface is provided that enables the user to rapidly construct complex device structures and to define the material regions. The user can also define ancillary items and properties such as electrical and thermal contacts and interface states.

The doping profile of the device is normally defined in the fabrication process model. However, the doping profile can also be defined directly without reference to a process model. Functions are provided to allow the user to apply uniform doping concentrations to device regions and the definition of more complex profiles specified through windows which can be placed on any horizontal surface in the geometry. Standard functions (Guassian and error function) or a use defined profile can be specified though each window. The user defined data can come from measurements or from a process simulation package such as SUPREM. All the different doping steps are summed to give a total doping concentration. The shape of the lateral doping profile can also be specified.

The finite element mesh generator is based on the Delaunay triangulation method for connecting up a given set of points into an optimum set of triangles. Using this technique, any set of points can be triangulated to give a set of triangles with positive pipe-widths along triangle edges. This is a very important consideration when solving the current continuity equations in the main solver. The difficulty is thus defining the location of a set of nodes for the analysis. The user has the task of defining a set of orthogonal lines in the x any y directions. The intersection of these lines gives a set of nodes that will be used in the mesh definition. Lines need not extend the entire span of the device in the x or y directions. The termination of the lines in this way allows regions of localised refinement to be defined, allowing the nodes to be placed in the place they are needed. An existing mesh may also be refined in the X or Y direction to refine a mesh in a given region.

Finally, a range of physical models are available to be used in the simulation of the device being defined and can be configured by the user. The available models include:
- **Mobility** 
  - Constant
  - Impurity
  - Carrier-Scattering
  - Surface
  - Field Dependent
- **Generation Recombination**
  - Shockley-Read-Hall
  - Direct
  - Auger
  - Impact Ionisation
- **Optical**
- **Band-gap Narrowing**
- **Fermi-Dirac Statistics**
- **Temperature**
- **Surface Recombination Effects**

The physical models employed by the simulator are described in more detail in the reference section at the end of this document.

## Circuit Simulation
The previous section described the definition of a two-dimensional device model. The next step involves the definition of a circuit to drive the device model. Principally, this involves loading the device model into the circuit environment and defining a complete circuit around it. The mixed mode capabilities of the simulator mean that the circuit may contain passive and active components as well as other two-dimensional devices or predefined circuit models. Once a suitable circuit has been defined, the device structure can be simulated in any one of three modes of operation:

1. **Steady State** - Define a set of steady state (DC) bias points.
2. **Transient** - Define a transient waveform and perform a temporal simulation.
3. **IV Curve Tracer** - Perform a steady state curve trace.

Simulations can also be re-started from existing simulations as a continuation run from an initial condition. Sometimes re-starting a simulation from an initial condition is desirable when the numerical complexity of a model is such that the solver will fail to converge on a solution and an indirect approach is required.

The solver employed in the simulation of the circuit and solution of the device physics equations is fully configurable. In many cases, the default settings of the solver will be appropriate for most simulations. However, for highly non-linear problems the user can adjust the search parameters to achieve optimum convergence on a solution.

## Simulation Results
The post processor module is used to view the results of the numerical calculations and to export the relevant data. The module enables the following results to be extracted from the simulation:

- **Cut Line**  - For producing line plots on "cuts" through the 2D cross-section of device models.
- **Contour** - For producing contour plots at device level.
- **Isometric** (coming soon) - For producing 3-D isometric plots at device level.
- **I-V Plot** for producing terminal I/V characteristics at circuit level.
- **Transient** (coming soon) - For plotting transient terminal and circuit waveforms at circuit level.

The first three modes are used to plot the internal distributions in the device, and the last two are for looking at the terminal quantities of the device.

The philosophy for viewing the internal distributions is to define what you want to plot. This will include the selection of the required plot variable (e.g. Electrostatic Potential, Electron Concentration, Net Doping Concentration etc.), the required result case number(s) and the type of plot (i.e. Cut Line, Isometric or Contour Plot). Terminal quantities are extracted directy at circuit level.

The following results are available at device level:
- Electrostatic Potential
- Hole and Electron Quasi-Fermi Levels
- Electron and Lattice Temperatures
- Acceptor and Donor Concentrations
- Valence and Conduction Band Energies
- Intrinsic Fermi-Energy
- Hole and Electron Quasi-Fermi Energies
- Hole and Electron Concentrations
- Intrinsic Carrier Concentration
- Valence and Conduction Band Off-set Parameters
- Net Doping Concentration
- Net Charge Concentration
- Recombination Rate
- Hole and Electron Mobilities
- E-Field Magnitude (or X and Y components of)
- Hole Current Magnitude (or X and Y components of)
- Electron Current Magnitude (or X and Y components of)
- Total Current Magnitude (or X and Y components of)

<div style="page-break-after: always"></div>

# Release History

Current Release : Version 0.0.1

Release History:
v0.0.1 : (December 09, 2024)
- Initial Release.

<div style="page-break-after: always"></div>

# Device Modelling

## Introduction to Device Modelling
The definition of a physical device model consists of several steps. This includes the definition of the geometry, doping and physical properties of the device, as well as the finite element mesh used in the analysis and the models employed to simulate the device. The geometry, doping profile and meshing of a device may be (*imported from a fabrication process simulation - coming soon*) or defined directly without reference to a process model.  

To create a new device model directly without reference to process model data:
1. From the Main Window, Select New Device Model.
2. When prompted *Do you want to create a new Device Model (.sdm) file?*, click OK.

<p align="center">
  <img src="images/Picture1.png" alt="Image 1" width="700">
</p>

The definition of a physical device model consists of several steps. This includes the definition of the device geometry, doping and physical properties of the device, as well as the finite element mesh used in the analysis and the models employed to simulate the device.

To define the device geometry directly, a user friendly CAD interface is provided that enables the user to rapidly construct complex device structures and to define the material regions. The user can also define ancillary items and properties such as electrical and thermal contacts and interface states.

The doping profile of the device is normally defined in the fabrication process model. However, the doping profile can also be defined directly without reference to a process model. Functions are provided to allow the user to apply uniform doping concentrations to device regions and the definition of more complex profiles specified through windows which can be placed on any horizontal surface in the geometry. Standard functions (Guassian and error function) or a use defined profile can be specified though each window. The user defined data can come from measurements or from a process simulation package such as SUPREM. All the different doping steps are summed to give a total doping concentration. The shape of the lateral doping profile can also be specified.

The finite element mesh generator is based on the Delaunay triangulation method for connecting up a given set of points into an optimum set of triangles. Using this technique, any set of points can be triangulated to give a set of triangles with positive pipe-widths along triangle edges. This is a very important consideration when solving the current continuity equations in the main solver. The difficulty is thus defining the location of a set of nodes for the analysis. The user has the task of defining a set of orthogonal lines in the x any y directions. The intersection of these lines gives a set of nodes that will be used in the mesh definition. Lines need not extend the entire span of the device in the x or y directions. The termination of the lines in this way allows regions of localised refinement to be defined, allowing the nodes to be placed in the place they are needed. An existing mesh may also be refined in the X or Y direction to refine a mesh in a given region.

Finally, a range of physical models are available to be used in the simulation of the device being defined and can be configured by the user. The available models include:
- **Mobility** 
  - Constant
  - Impurity
  - Carrier-Scattering
  - Surface
  - Field Dependent
- **Generation Recombination**
  - Shockley-Read-Hall
  - Direct
  - Auger
  - Impact Ionisation
- **Optical**
- **Band-gap Narrowing**
- **Fermi-Dirac Statistics**
- **Temperature**
- **Surface Recombination Effects**

The physical models employed by the simulator are described in more detail in the reference section at the end of this document.

<div style="page-break-after: always"></div>


## 2.2 Device Shape (Not sure if this is right? - I think this is now defined in the circuit simulator)

**Device Shape**

The shape of a device can be defined as either linear or cylindrical. The z axis depth of the device (into the screen) can also be specified.  

To edit the global shape properties of the device:
1. From the main menu, select Device..Shape.

![alt text](image-9.png)

**Parameters**  

*Depth Scale Factor*: The device is assumed to be 1cm deep in the z-direction by default
if a linear device is used, and the area if a cylindrical device is chosen is calculated by
rotating the device around the specified origin. This parameter allows the device depth /
effective area to be increased by a scaling factor.

*Device Shape*: Either linear or cylindrical. Selects how device is represented in the 3rd
spatial dimension. If cylindrical is selected the device is solved in cylindrical co-ordinates
and is swept around the x values specified by the parameter x axis rotation origin.

*X Axis Rotation Origin*: Origin around which the device is rotated if cylindrical type is
chosen.

<div style="page-break-after: always"></div>

## 2.4 Device Regions
One of the most important features of the Aquarius's device modelling capabilities is the ability to define the geometry of a device's regions using the Rectangle, Rounded Rectangle, Polygon and Import from CSV drawing functions.

After the outline geometry of a device has been drawn, the regions properties can be defined and material properties assigned to them.

To define a region:
1. From the Menu, select Define..Region and select the type of geometry you would like to define (Rectangle, Polygon etc.).
2. Once the region's shape has been defined, it will be filled with colour to denote that it is a defined region and the region properties dialog box will appear.

<p align="center">
  <img src="images/Picture2.png" alt="Image 1" width="700">
</p>

### Region Properties
#### General
- Name: 
  A unique idemtifier for the region. Note: No two regions may share the same name.
- Material: Used to define the material properties of the region. Available materials include Si, SiC, Oxide, Air (more coming soon). The properties of these materials can be fully customised by the user during setup of the device model. Note: There are two general types of semiconductor can be defined, namely:  
1. Single Composition (e.g. Si, GaAs)
2. Variable Composition (e.g. AlGaN).  

#### Doping
Parameters:
- Acceptor Doping: Used to define the acceptor doping concentration in the region. (Units = Atoms/cm3).
- Donor Doping: Used to define the donor doping concentration in the region. (Units = Atoms/cm3).

#### Composition (Coming soon)
After a region has been defined, the user can specify a constant compositional profile over the region. The mole fraction X for a ternary compound and both X and Y mole fractions for quaternary materials can be specified. This command sets a constant values in a specified region.

Parameters:
- Mole Fractions X and Y: Used define the mole fractions X and Y. Value range between 0 and 1.  
- Wavelength: Re-calculates X and Y from the cut-off wavelength of the specific material.  
- Force All Edges to Specified Composition: Forces all the lines (edges) of a defined region to have the compositions defined by X and Y in the Mole-fraction parameter.  
- InGaAsP Lattice Match: Uses the value of the Y mole fraction to re-calculate the X mole fraction in order give the correct compositions for the specified lattice matching (Only applies to InGaAsP structures). Options to specify Off, GaAs or InP.

<div style="page-break-after: always"></div>


### 2.6 Graded Composition (Coming Soon)
Graded Composition Windows allow a user to specify a rectangular window where a graded compositional profile can set up for hetero-junction structures.

To draw a graded composition window:
1. From the main menu, select Define..Window..Composition.
2. Drag the cursor to define a rectangular graded composition window.

Once a graded composition window has been defined, the graded composition window properties dialog box will appear. In this dialog, a graded mole fraction profile can be specified. Double-click the cursor on the window to edit its properties at any time.

![alt text](image-13.png)

**Parameters**

*Mole Fractions*: Used define the mole fraction grading across the window. If a horizontal
gradient direction is specified then the user can input the left and right mole fractions to
correspond with the left and right sides of the graded composition window. If a vertical
gradient direction is specified then the user can input the top and bottom mole fractions
to correspond with the top and bottom sides of the graded composition window.  
*Gradient profile*: Used select the type of grading of the composition. Options are linear
or hyperbolic tangent (tanh) functions.  
*Gradient direction*: Used select the direction of the gradient. Options are vertical (top to
bottom) grading of the mole fraction or horizontal (left to right) grading of the mole
fraction.  
*Layout parameters*: Used the specifiy the position of the graded composition window.

<div style="page-break-after: always"></div>


### 2.7 Material Properties

**Material Properties**

Aquarius contains a library of materials for the commonly used semiconductor and
non-semiconductor materials.
To edit material properties:
1. From the main menu, select Device..Materials.
2. Select the Properties tab. In the materials library the user can edit the properties
associated with each individual material and even define completely new materials.  

![alt text](image-14.png)

**Parameters**

General Properties:  

*Semcn*: Semiconductor material (1=yes, -1=no)  
*Fixsc*: Fixed semiconductor (1=single composition material e.g. silicon, -1=variable
composition material e.g. AlGaAs). Used in heterojunction module.  
*Epslr*: Relative dielectric constant Eg: Band gap (eV)  
*Affin*: Electron Affinity (eV)  
*Mass_p*: Relative hole and electron effective masses  
*Mass_n*: Relative hole and electron effective masses  
*Lat_const*: Lattice constant (Angstroms)<p>&nbsp;</p>


Mobility Properties:

*Mu_0_p*: Constant mobilities for holes and electrons (cm2/Vs)  
*Mu_0_n*: Constant mobilities for holes and electrons (cm2/Vs)  
*Mu_AlpT_p*: Temperature coefficients for lattice scattering mobility  
*Mu_AlpT_n*: Temperature coefficients for lattice scattering mobility  
*Mu_max_p*: Maximum mobilities, also used in lattice scattering mobility which reduces
maximum mobility with increasing lattice temperature (cm2/Vs)  
*Mu_min_p*: Minimum mobilities, used in the impurity and carrier scattering mobility
expression (cm2/Vs)  
*Mu_nref_p*: Reference doping used in the impurity and carrier scattering mobility
expression (cm-3)  
*Mu_alpD_p*: Coefficients used in the impurity and carrier scattering mobility expression
(units)  
*Mu_max_n*: Maximum mobilities, also used in lattice scattering mobility which reduces
maximum mobility with increasing lattice temperature (cm2/Vs)  
*Mu_min_n*: Minimum mobilities, used in the impurity and carrier scattering mobility
expression (cm2/Vs)  
*Mu_nref_n*: Reference doping used in the impurity and carrier scattering mobility
expression (cm-3)  
*Mu_alpD_n*: Coefficients used in the impurity and carrier scattering mobility expression  
*Mu_vsat_p*: Carrier saturation velocities at 300K (cm s-1)  
*Mu_beta_p*: Coefficients for field dependent mobility  
*Mu_vsat_n*: Carrier saturation velocities at 300K (cm s-1)  
*Mu_beta_n*: Coefficients for field dependent mobility  
*Mu_gsur_p*: Oxide interface mobility reduction factor  
*Mu_gsur_n*: Oxide interface mobility reduction factor  
*Mu_S_Ec_p*: Critical electric fields for electron and hole oxide interface mobility model:
(V cm-1)  
*Mu_S_Ec_n*: Critical electric fields for electron and hole oxide interface mobility model:
(V cm-1)  
*E_trap*: Trap energy relative to the intrinsic Fermi-level (eV)  <p>&nbsp;</p>

Recombination Properties:  

*SRH_TAU_p*: Minority carrier lifetimesunits (secs)  
*SRH_Ap*: Coefficients used in doping dependent lifetime models  
*SRH_Bp*: Coefficients used in doping dependent lifetime models  
*SRH_Cp*: Coefficients used in doping dependent lifetime models  
*SRH_Dp*: Coefficients used in doping dependent lifetime models  
*SRH_Nrefp*: Reference doping concentrations for lifetime models (cm-3)  
*SRH_TAU_n*: Minority carrier lifetimesunits (secs)   
*SRH_An*: Coefficients used in doping dependent lifetime models  
*SRH_Bn*: Coefficients used in doping dependent lifetime models  
*SRH_Cn*: Coefficients used in doping dependent lifetime models  
*SRH_Dn*: Coefficients used in doping dependent lifetime models  
*SRH_Nrefn*: Reference doping concentrations for lifetime models (cm-3)  
*Auger_Cp*: Auger coefficients (cm6 s-1)  
*Auger_Cn*: Auger coefficients: (cm6 s-1)  
*Direct_C*: Direct recombination coefficient (cm3 s-1)  
*Av_alph_p*: Avalanche prefactor coefficients (cm-1)  
*Av_beta_p*: Avalanche exponential coefficients (V/cm)  
*Av_alph_n*: Avalanche prefactor coefficients (cm-1)  
*Av_beta_n*: Avalanche exponential coefficients (V/cm)  <p>&nbsp;</p>

Optical Properties:

*Abscoeff*: Optical absorption coefficient (cm-1)<p>&nbsp;</p>

Thermal Properties:

*Ther_cond*: Thermal conductivity  
*Heat_Capa*: Thermal heat capacity  
*Ther_coef*: Coefficient for thermal conductivity  
*Vs_coefTp*: Coefficients for temperature dependent saturation velocity  
*Vs_coefTn*: Coefficients for temperature dependent saturation velocity  

<div style="page-break-after: always"></div>


### 2.8 Material Models

**Material Models**

The physical models implemented in the simulator are fully configurable.
To configure the physical models:
1. From the main menu, select Device..Materials.
2. Select the Models tab.

![alt text](image-15.png)

**Parameters**

General Parameters:

*Reference Material*: Used to select reference material to calculate reference energy
levels to. Used mainly in heterojunction devices.  
*Temperature*: Ambient temperature for the simulation. Kelvin<p>&nbsp;</p>

Mobility Models:

*Low Field Mobility*: Option to set as constant, lattice, impurity or carrier_carrier. If the
constant model is selected then mobility is set to the value supplied in the properties
command. If the lattice model is selected then the reduction in mobility due to increased
collision with the lattice with increased temperature will be taken into account. If the
impurity model is selected then the reduction in mobility due to extra collisions with the
lattice is taken into account. If the carrier_carrier model is selected then the reduction in mobility due to extra collisions with the lattice is taken into account, except that
the carrier concentration is taken into account (very important at high injection
levels). Note: If the high field model is selected then the low-field mobility model will
feed into the high field-mobility model. Otherwise it will be the mobility used in the
simulation.  
*High Field Mobility*: Option to set as none, e_field or j_field. The e_field or j_field models
are used to select the high-field mobility model, which can be based on either the
electric field magnitude or the magnitude of the field in the direction of the current.  
*High Field Calculation:* Option to set as edge or element. Used to choode how the highfield
mobility field is calculated. This will either use the values along an element edge or
calculate the field based on the whole element.  
*Surface Mobility*: Option to set as yes or no. Used to select surface mobility along oxide
semiconductor interfaces. This model only affects those edges that actually lie along the
interface.<p>&nbsp;</p>

Recombination Models:

*SRH*: Option to set as yes or no. Used to select Shockley Read Hall recombination
model.  
*Auger*: Option to set as yes or no. Used to select Auger recombination model.
*Direct*: Option to set as yes or no. Used to select direct band-to-band recombination
model.  
*Avalanche*: Option to set as none, II_ELEM or II_EDGE. II_ELEM is used to select an
impact-ionisation model based on a discretisation that uses the full elemental
information. II_EDGE is used to select an impact-ionisation model based on a
discretisation along an edge of an element only.<p>&nbsp;</p>


Other Models:

*Band Gap Narrowing:* Option to set as none, Slotboom, Gaur. Used to select the bandgap
narrowing model used in regions of heavy doping. Both Slotboom and Gaur models
are empirical and are descibed in the reference section of this manual.  
*Transport*: Option to set as drift-diffusion or energy. Used to select drift-diffusion or
energy transport model (not fully implemented)  
*Statistics*: Option to set as boltz or fermi. Used to select Boltzmann or Fermi-Dirac
carrier statistics. Using Fermi-direct is slightly slower than the Boltzmann approximation.  
*Heat Source:* Option to set as element or edge. Used to select how to calculate the heat
source term in an electro-thermal simulation.

<div style="page-break-after: always"></div>


### 2.9 Contacts

**Electrical and Thermal Contacts**

Electrical and/or thermal contacts can be added to any edge or combination of edges on
the perimeter of a region. Individual contacts can be made up of several different edges.
Contacts can also be split across different regions and can occur at the junction between
two different regions. In order to successfully model a device, the model requires a
minimum of two contacts to be specified. The maximum number of contacts than can be
added to a device model is eight. 

To define a contact:

1. From the main toolbar, click on the Select Edge button.
2. With the cursor, select all the geometric edges which comprise the contact.
3. Select Device..Define..Contact from the main menu to create a contact.

Once a contact has been defined, the contact properties dialog box will appear allowing
its properties to be edited. Double-click the cursor on the contact to activate the contact
properties dialog box at any time.

![alt text](image-16.png)

**Parameters**

*Contact Type:* Option to set as Ohmic or Schottky. Selects how contact will interact with
the semiconductor.  
*Work Function:* Work function of the metal. Used to calculate the barrier height for a
Schottky diode or the Flat-band voltage for an oxide contact.  
*P Richardson:* If set to a non-zero value is used as the Richardson constant to calculate
the thermionic emission current for holes.  
*N Richardson*: If set to a non-zero value is used as the Richardson constant to calculate the thermionic emission current for electrons.  
*Barrier Lowering*: Option to set on or off. Select if image force barrier lowering is
included at a Schottky contact.  
*Dipole Alpha*: Coefficient for calculating dipole lowering of Schottky barrier height.  
*Resistance*: Thermal resistance at ambient temperature. Kelvin / Watt  
*Capacitance*: Thermal capacitance at ambient temperature. Joules / Kelvin.  
*Ambient Temperature*: Ambient temperature used in the simulation. Kelvin  

<div style="page-break-after: always"></div>


### 2.10 Surface States

**Surface States**

A surface state can be added to any edge or combination of edges on the perimeter of a
region. This allows the user to specify interface/surface properties, including
recombination velocities, fixed charges and fast surface states. Individual surface
states can be composed of several different edges. Surface states can also be split
across different regions and can occur at the junction between two different regions.

To define a surface state:
1. From the main toolbar, click on the Select Edge button.
2. With the cursor, select all the geometric edges which comprise the contact.
3. Select Device..Define..Surface from the main menu to create a surface state.

Once a surface state has been defined, the properties dialog box will appear allowing its
properties to be edited. Double-click the cursor on the surface state to activate the
properties dialog box at any time.

![alt text](image-17.png)

**Parameters**

*NSurface*: Electron surface recombination velocity. cm s-1  
*PSurface*: Hole surface recombination velocity. cm s-1  
*QFixed*: Fixed interface charge. cm-2  
*NAcceptor*: Electron acceptor trapped charge density. cm s-1  
*PAcceptor*: Hole acceptor trapped charge density. cm s-1  
*NDonor*: Electron donor trapped charge density. cm s-1  
*PDonor*: Hole donor trapped charge density. cm s-1  
*QInsulator*: Insulator trapped charge density. cm s-1  
*QDistribution*: Specification of charge density in insulator. No units  

<div style="page-break-after: always"></div>


### 2.11 Doping Windows

**Doping Windows**

Doping windows are used to specify an implant/diffusion doping profile through a
window. The vertical profile maybe a Gaussian, a complementary Error function or a
user specified profile. Doping windows can also be projected in the upward or downward
directions or even in both directions simultaneously. The doping profile of a device is
built-up using region doping and horizontal doping windows, which are summed to give
a total doping concentration.

To draw a horizontal doping window:
1. From the main menu, select Device..Window..Doping.
2. Drag the cursor to define a rectangular doping window.
3. Click on the screen to finish.

Once a doping window has been defined, the doping windows properties dialog box will
appear. In this dialog, the properties and profile of the doping window can be edited.
Double-click the pointer on the doping window to activate the doping window dialog box
at any time.

![alt text](image-18.png)

**Parameters**

Window and Layout:

*Type*: Option to set as normal, left symetric, right symetric or double symetric. Used to
select the shape of the diffusion.  
*Direction*: Option to set as upwards, downwards or both. Used to select the direction of the implant.
*Doping*: Option to set as acceptor or donor. Used to specify the type of doping implant.
*Left*: X coordinate of left hand side of the window. Microns.  
*Top*: Y coordinate of top of the window. Microns.  
*Width*: Width of the window. Microns.  
*Depth*: Height of the window. Microns.<p>&nbsp;</p>

Vertical Parameters:

*Doping Type*: Option to set as Gaussian, erfc, user. Used to specify the functiont that
controls the scaling of the diffusion in the vertical direction.  
*Peak Concentration*: Used to specify the peak doping concentration. For a diffusion
implanted in the downwards direction, the peak concentration will occur at the top of the
window.  
*Junction Doping:* Used to specify the doping concentration. For a diffusion implanted in
the downwards direction, the junction concentration will occur at the bottom of the
window.  
*Straddle*: Not used.  
*User Doping Profil*e: Used to specify a user defined doping profile. The profiles is
defined using a data table that is formatted into two columns, the first value gives the
depth (co-ordinate in microns) the second gives the doping concentration (in cm-3). The
data table can be applied through a non-uniform window. Interpolation is used to
calculate the doping profile at the points below the window.<p>&nbsp;</p>

Lateral Parameters:

*Type*: Option to set as rotate or erfc. Used to specify the lateral profile type. The rotate
option causes the doping profile to rotate around the end window point. The erfc option
provides a lateral erfc type profile with a lateral set in LPARAMS.   
*Reduction*: The lateral reduction factor is used to reduce the lateral spread can be
reduced. If the 'rotate' option is chosen then this parameter specifies the lateral
reduction factor. If the option chosen is 'erfc' then the lateral spread length is specified.<p>&nbsp;</p>

**Calculation of Vertical and Lateral Diffusions**

**Vertical Gaussian scaling factor**

$$
y_{\text{fact}} = N_0 \, \text{erfc} \left( \frac{y}{\sigma_v} \right)
$$


2.7. Material Properties  
2.8. Materials Models  
2.9. Contacts  
2.10. Surface States  
2.11. Doping Windows  
2.12. SRH Windows  
2.13. Optical Illumination Windows  
2.14. Meshing Grid  
2.15. Finite Element Grid  
2.16. Mesh Refinement  
3. Circuit Simulation  
3.1. Circuit Components  
3.2. IV Curve Tracer Components  
3.3. Wiring Circuits  
3.4. Performing a Simulation  
3.5. Solver Controls  
4. Simulation Results  
4.1. Introduction  
4.2. Circuit Level Results  
4.3. Device Level Results  
5. Reference  
5.1. Physical Models  
6. License Agreement  
7. Ordering  

<div style="page-break-after: always"></div>

## 1 Introduction

**Welcome to Aquarius Semiconductor Device Modelling..**

**Aquarius** is a mixed mode 2D semiconductor process, device and circuit
simulator for the desktop PC. With Aquarius you can create complex physical models
of semiconductor devices and build sophisticated circuits with the minimum of effort in a
powerful, yet easy to use TCAD environment. With access to the full range of device
physics (including electro-thermal modelling), Aquarius provides a reliable and cost
effective way to evaluate the performance and characteristics of most semiconductor
devices before committing to fabrication.

Aquarius is composed of four highly integrated modules:

*Process Simulator*`*` : used to simulate fabrication processes, including the simulation of
implantation and multiparticle diffusion steps, including one dimensional thermal
oxidation. Once simulated, fabrication process models are conveyed to the device
simulator module for further development.

`*`MUSIC Multigrid Process Simulator. Copyright (C) 1991-2006 Prof. Dr. S. Mijalkovic

*Device Simulator*: used to define the physical attributes of a two-dimensional
semiconductor device structure. The definition of the device may be imported from
a fabrication process model or defined directly without reference to a process
model. The device model is then conveyed to the circuit simulator module for electrothermal
simulation in the context of a circuit.

*Circuit Simulator*: used to define the circuit and bias conditions for the device, it also
solves the device and circuit equations, saving the results to a disk file.

*Simulation Results*: used to view the results of a simulation and to obtain hard copies.<p>&nbsp;</p>

**Process Simulation**

The process simulator* module is used to model the device fabrication processes,
including the implantation of impurities (phosphorus, boron, arsenic and/or antimony),
multiparticle diffusions and one dimensional thermal oxidation. The module is based on
a multigrid adaptive strategy which is characterized by a highly efficient convergence
rate in the solution of multiparticle diffusion equations, robustness and natural
parallelization of all simulation procedures. This approach enables rapid simulation
of manufacturing processes, eliminating the bottlenecks present in the existing two dimensional
process simulation programs.

Typically, the simulation of a fabrication process will involve the definition of the
substrate geometry and impurity concentration and the definition of a sequence
of implants, diffusions and thermal oxidations to form a process 'recipe'. Once
simulated, fabrication process models are conveyed to the device simulator module for
further development.<p>&nbsp;</p>

**Device Modelling**

The definition of a physical device model consists of several steps. This includes the
definition of the device geometry, doping and physical properties of the device, as well
as the finite element mesh used in the analysis and the models employed to simulate
the device. The geometry, doping profile and meshing of a device may be imported from
a fabrication process simulation or defined directly without reference to a process
model.

To define the device geometry directly (without reference to a process model), a user
friendly CAD interface is provided that enables the user to rapidly construct complex
device structures and to define the material regions. The user can also define ancillary
items and properties such as electrical and thermal contacts and interface states.

The doping profile of the device is normally defined in the fabrication process model.
However, the doping profile can also be defined directly without reference to a process
model. Functions are provided to allow the user to apply uniform doping concentrations
to device regions and the definition of more complex profiles specified through windows
which can be placed on any horizontal surface in the geometry. Standard functions
(Guassian and error function) or a use defined profile can be specified though each
window. The user defined data can come from measurements or from a process
simulation package such as SUPREM. All the different doping steps are summed to give
a total doping concentration. The shape of the lateral doping profile can also be
specified.

The finite element mesh generator is based on the Delaunay triangulation method for
connecting up a given set of points into an optimum set of triangles. Using this
technique, any set of points can be triangulated to give a set of triangles with positive
pipe-widths along triangle edges. This is a very important consideration when solving
the current continuity equations in the main solver. The difficulty is thus defining the
location of a set of nodes for the analysis. The user has the task of defining a set of
orthogonal lines in the x any y directions. The intersection of these lines gives a set of
nodes that will be used in the mesh definition. Lines need not extend the entire span of
the device in the x or y directions. The termination of the lines in this way allows regions
of localised refinement to be defined, allowing the nodes to be placed in the place they
are needed. An existing mesh may also be refined in the x or y direction to refine a
mesh in a given region.

Finally, a range of physical models are available to be used in the simulation of the
device being defined and can be configured by the user. The available models include:
- Mobility: Constant, Impurity, Carrier-scattering, Surface, Field dependent
- Generation Recombination: Shockley-Read-Hall, Direct, Auger, Impact Ionisation, User
- Defined
- Band-gap narrowing
- Fermi-Dirac statistics
- Temperature
- Surface recombination effects

The physical models employed by the simulator are described in more detail in the
reference section at the end of this document.<p>&nbsp;</p>

**Circuit Simulation**

The previous section described the definition of a two-dimensional device model. The
next step involves the definition of a circuit to drive the device model. Principally, this
involves loading the device model into the circuit environment and defining a complete
circuit around it. The mixed mode capabilities of the simulator mean that the circuit may
contain passive and active components as well as other two-dimensional devices or predefined
circuit models. Once a suitable circuit has been defined, the device structure can
be simulated in any one of three modes of operation:

1. Steady state - define a set of steady state (dc) bias points.
2. Transient - define a transient waveform and perform a temporal simulation.
3. IV Curve Tracer - perform a steady state curve trace.

Simulations can also be re-started from existing simulations as a continuation run from
an initial condition. Sometimes re-starting a simulation from an initial condition is
desirable when the numerical complexity of a model is such that the solver will fail to
converge on a solution and an indirect approach is required.

The solver employed in the simulation of the circuit and solution of the device physics
equations is fully configurable. In many cases, the default settings of the solver will
be appropriate for most simulations. However, for highly non-linear problems the user
can adjust the search parameters to achieve optimum convergence on a solution.

**Simulation Results**
The results query module is used to view the results of the numerical calculations on the
screen and to produce hardcopies. The results query modules enables the following
results to be extracted from the simulation:

Line: for producing line plots on "cuts" through the 2D cross-section of device models.
Isometric: for producing 3-D isometric plots at device level
Contour: for producing contour plots at device level
Ivplot: for producing terminal I/V characteristics at circuit level
Transient: for plotting transient terminal and circuit waveforms at circuit level

The first three modes are used to plot the internal distributions in the device, and the
last two are for looking at their terminal quantities of the device. The philosophy for
viewing the internal distributions is to define what you want to plot. This will include the
selection of the required plot variable (e.g. potential, electron concentration, net doping
concentration etc), the required result cases and the manner of presentation (i.e. line,
isometric or contour plot). Terminal quantities are extracted directy at circuit level.

The following device level results are available at device level:
Electrostatic Potential
Hole and Electron Quasi-Fermi Levels
Electron and Lattice Temperatures
Acceptor and Donor Concentrations
Aquarius User Manual | 6
Valence and Conduction Band Energies
Intrinsic Fermi-Energy
Hole and Electron Quasi-Fermi Energies
Hole and Electron Concentrations
Intrinsic Carrier Concentration
Valence and Conduction Band Off-set Parameters
Net Doping Concentration
Net Charge Concentration
Recombination Rate
Hole and Electron Mobilities
E-Field Magnitude (or X and Y components of)
Hole Current Magnitude (or X and Y components of)
Electron Current Magnitude (or X and Y components of)
Total Current Magnitude (or X and Y components of)

<div style="page-break-after: always"></div>

## 2 Device Modelling

<div style="page-break-after: always"></div>

### 2.1 Introduction

**Introduction to Device Modelling**

The definition of a physical device model consists of several steps. This includes the
definition of the device geometry, doping and physical properties of the device, as well
as the finite element mesh used in the analysis and the models employed to simulate
the device. The geometry, doping profile and meshing of a device may be imported from
a fabrication process simulation or defined directly without reference to a process
model.  

To create a new device model using data derived from a process simulation:
1. Refer to the 'Process Simulation' section of this document.  


To create a new device model directly without reference to process model data:
1. From the main menu, select **File..New**.
2. Select the 'Device Model' option and click **OK**.

![alt text](image-8.png)

To define the device geometry directly (without reference to a process model), a user
friendly CAD interface is provided that enables the user to rapidly construct complex
device structures and to define the material regions. The user can also define ancillary
items and properties such as electrical and thermal contacts and interface states.  

The doping profile of the device is normally defined in the fabrication process model.
However, the doping profile can also be defined directly without reference to a process
modlel. Functions are provided to allow the user to apply uniform doping concentrations
to device regions and the definition of more complex profiles specified through windows
which can be placed on any horizontal surface in the geometry. Standard functions
(Guassian and error function) or a use defined profile can be specified though each
window. The user defined data can come from measurements or from a process
simulation package such as SUPREM. All the different doping steps are summed to give
a total doping concentration. The shape of the lateral doping profile can also be
specified.

The finite element mesh generator is based on the Delaunay triangulation method for connecting up a given set of points into an optimum set of triangles. Using this technique, any set of points can be triangulated to give a set of triangles with positive pipe-widths along triangle edges. This is a very important consideration when solving
the current continuity equations in the main solver. The difficulty is thus defining the
location of a set of nodes for the analysis. The user has the task of defining a set of
orthogonal lines in the x any y directions. The intersection of these lines gives a set of
nodes that will be used in the mesh definition. Lines need not extend the entire span of
the device in the x or y directions. The termination of the lines in this way allows regions
of localised refinement to be defined, allowing the nodes to be placed in the place they
are needed. An existing mesh may also be refined in the x or y direction to refine a
mesh in a given region.

Finally, a range of physical models are available to be used in the simulation of the
device being defined and can be configured by the user. The available models include: 

Mobility: Constant, Impurity, Carrier-scattering, Surface, Field dependent  
Generation Recombination: Shockley-Read-Hall, Direct, Auger, Impact Ionisation, User
Defined  
Band-gap narrowing  
Fermi-Dirac statistics  
Temperature  
Surface recombination effects  

The physical models employed by the simulator are described in more detail in the
reference section at the end of this document.

<div style="page-break-after: always"></div>


### 2.2 Device Shape

**Device Shape**

The shape of a device can be defined as either linear or cylindrical. The z axis depth of
the device (into the screen) can also be specified.  

To edit the global shape properties of the device:
1. From the main menu, select Device..Shape.

![alt text](image-9.png)

**Parameters**  

*Depth Scale Factor*: The device is assumed to be 1cm deep in the z-direction by default
if a linear device is used, and the area if a cylindrical device is chosen is calculated by
rotating the device around the specified origin. This parameter allows the device depth /
effective area to be increased by a scaling factor.

*Device Shape*: Either linear or cylindrical. Selects how device is represented in the 3rd
spatial dimension. If cylindrical is selected the device is solved in cylindrical co-ordinates
and is swept around the x values specified by the parameter x axis rotation origin.

*X Axis Rotation Origin*: Origin around which the device is rotated if cylindrical type is
chosen.

<div style="page-break-after: always"></div>


### 2.3 Device Geometry

**Device Geometry**

One of the most important features of the Aquarius's device modelling capabilities is
the ability to define the geometry of a device using the point, line, polyline, spline,
rectangle, arc, circle and ellipse drawing functions. At this stage, it is only necessary
to draw the outline geometry that defines the perimeter of each device region.

To draw a polyline:
1. From the main menu, select **Draw..Polyline**.
2. Click the cursor down and drag to draw the first line segment.
3. Move to the next point and click the cursor to draw the next line segment.
4. Repeat step 3 until the required shape is drawn.
5. Right click the cursor on the main view and select **End Polyline** from the popup menu.

All drawing functions can be accessed through Draw on the main menu or from the main
toolbar. Polylines can be terminated by right clicking on the main view and selecting End
Polyline from the popup menu. Splines are terminated in a similar manner.

![alt text](image-10.png)

<div style="page-break-after: always"></div>


### 2.4 Device Regions

**Device Regions**

After the outline geometry of a device has been drawn, the material
regions that comprise the device can be defined and material properties assigned to
them. 

To define a region:
1. From the main menu, select Device..D**efine..Region**.
2. Click the cursor on a point inside the boundary of the region to be defined

Once a region has been defined, it will be filled with colour to denote that it is a defined
region and the region properties dialog box will appear. Double-click the cursor on the
region to activate the region properties dialog box

![alt text](image-11.png)

**Parameters**

*Material*: Use to define the material properties of the region. Available materials include
Silicon, AlGaAs, Oxide, Air, AlAs, GaAs, GaP, GaAsP, InP, InGaAsP. Note that there are
two general types of semiconductor can be defined, namely (i) single composition (e.g.
silicon, GaAs) and, (ii) variable composition (e.g. AlGaAs).    
*Acceptor Doping*: Used to define the acceptor doping concentration in the region.
Atoms/cm3  
*Donor Doping*: Used to define the donor doping concentration in the region. Atoms/cm3

<div style="page-break-after: always"></div>


### 2.5 Region Composition

**Device Regions**

After a region has been defined, the user can specify a constant compositional profile
over the region. The mole fraction x for a ternary compound and both x and y mole
fractions for quaternary materials can be specified. This command sets a constant
values in a specified region.  

To edit region composition:
1. Double-click the cursor on the region to activate the region properties dialog box.
2. Select the composition tab and edit the constant composition parameter.

![alt text](image-12.png)

**Parameters**

*Mole Fractions X and Y*: Used define the mole fractions x and y. Value range between 0
and 1.  
*Wavelength*: Re-calculates x and y from the cut-off wavelength of the specific material.  
*Force All Edges to Specified Composition*: Forces all the lines of a defined region to have
the compositions defined by x and y in the Mole-fraction parameter.  
*InGaAsP Lattice Match*: Uses the value of the y mole fraction to re-calculate the x mole
fraction in order give the correct compositions for the specified lattice matching (Only
applies to InGaAsP structures). Options to specify OFF, GaAs or InP.

<div style="page-break-after: always"></div>


### 2.6 Graded Composition

**Graded Composition Windows**

Allows user to specify a rectangular window where a graded compositional profile can
set up for hetero-junction structures.

To draw a graded composition window:
1. From the main menu, select **Device**..**Window**..**Composition**.
2. Drag the pointer to define a rectangular graded composition window.

Once a graded composition window has been defined, the graded composition window
properties dialog box will appear. In this dialog, a graded mole fraction profile can be
specified. Double-click the cursor on the window to edit its properties at any time.

![alt text](image-13.png)

**Parameters**

*Mole Fractions*: Used define the mole fraction grading across the window. If a horizontal
gradient direction is specified then the user can input the left and right mole fractions to
correspond with the left and right sides of the graded composition window. If a vertical
gradient direction is specified then the user can input the top and bottom mole fractions
to correspond with the top and bottom sides of the graded composition window.  
*Gradient profile*: Used select the type of grading of the composition. Options are linear
or hyperbolic tangent (tanh) functions.  
*Gradient direction*: Used select the direction of the gradient. Options are vertical (top to
bottom) grading of the mole fraction or horizontal (left to right) grading of the mole
fraction.  
*Layout parameters*: Used the specifiy the position of the graded composition window.

<div style="page-break-after: always"></div>


### 2.7 Material Properties

**Material Properties**

Aquarius contains a library of materials for the commonly used semiconductor and
non-semiconductor materials.
To edit material properties:
1. From the main menu, select Device..Materials.
2. Select the Properties tab. In the materials library the user can edit the properties
associated with each individual material and even define completely new materials.  

![alt text](image-14.png)

**Parameters**

General Properties:  

*Semcn*: Semiconductor material (1=yes, -1=no)  
*Fixsc*: Fixed semiconductor (1=single composition material e.g. silicon, -1=variable
composition material e.g. AlGaAs). Used in heterojunction module.  
*Epslr*: Relative dielectric constant 
*Eg*: Band gap (eV)  
*Affin*: Electron Affinity (eV)  
*Mass_p*: Relative hole and electron effective masses  
*Mass_n*: Relative hole and electron effective masses  
*Lat_const*: Lattice constant (Angstroms)<p>&nbsp;</p>


Mobility Properties:

*Mu_0_p*: Constant mobilities for holes and electrons (cm2/Vs)  
*Mu_0_n*: Constant mobilities for holes and electrons (cm2/Vs)  
*Mu_AlpT_p*: Temperature coefficients for lattice scattering mobility  
*Mu_AlpT_n*: Temperature coefficients for lattice scattering mobility  
*Mu_max_p*: Maximum mobilities, also used in lattice scattering mobility which reduces
maximum mobility with increasing lattice temperature (cm2/Vs)  
*Mu_min_p*: Minimum mobilities, used in the impurity and carrier scattering mobility
expression (cm2/Vs)  
*Mu_nref_p*: Reference doping used in the impurity and carrier scattering mobility
expression (cm-3)  
*Mu_alpD_p*: Coefficients used in the impurity and carrier scattering mobility expression
(units)  
*Mu_max_n*: Maximum mobilities, also used in lattice scattering mobility which reduces
maximum mobility with increasing lattice temperature (cm2/Vs)  
*Mu_min_n*: Minimum mobilities, used in the impurity and carrier scattering mobility
expression (cm2/Vs)  
*Mu_nref_n*: Reference doping used in the impurity and carrier scattering mobility
expression (cm-3)  
*Mu_alpD_n*: Coefficients used in the impurity and carrier scattering mobility expression  
*Mu_vsat_p*: Carrier saturation velocities at 300K (cm s-1)  
*Mu_beta_p*: Coefficients for field dependent mobility  
*Mu_vsat_n*: Carrier saturation velocities at 300K (cm s-1)  
*Mu_beta_n*: Coefficients for field dependent mobility  
*Mu_gsur_p*: Oxide interface mobility reduction factor  
*Mu_gsur_n*: Oxide interface mobility reduction factor  
*Mu_S_Ec_p*: Critical electric fields for electron and hole oxide interface mobility model:
(V cm-1)  
*Mu_S_Ec_n*: Critical electric fields for electron and hole oxide interface mobility model:
(V cm-1)  
*E_trap*: Trap energy relative to the intrinsic Fermi-level (eV)  <p>&nbsp;</p>

Recombination Properties:  

*SRH_TAU_p*: Minority carrier lifetimesunits (secs)  
*SRH_Ap*: Coefficients used in doping dependent lifetime models  
*SRH_Bp*: Coefficients used in doping dependent lifetime models  
*SRH_Cp*: Coefficients used in doping dependent lifetime models  
*SRH_Dp*: Coefficients used in doping dependent lifetime models  
*SRH_Nrefp*: Reference doping concentrations for lifetime models (cm-3)  
*SRH_TAU_n*: Minority carrier lifetimesunits (secs)   
*SRH_An*: Coefficients used in doping dependent lifetime models  
*SRH_Bn*: Coefficients used in doping dependent lifetime models  
*SRH_Cn*: Coefficients used in doping dependent lifetime models  
*SRH_Dn*: Coefficients used in doping dependent lifetime models  
*SRH_Nrefn*: Reference doping concentrations for lifetime models (cm-3)  
*Auger_Cp*: Auger coefficients (cm6 s-1)  
*Auger_Cn*: Auger coefficients: (cm6 s-1)  
*Direct_C*: Direct recombination coefficient (cm3 s-1)  
*Av_alph_p*: Avalanche prefactor coefficients (cm-1)  
*Av_beta_p*: Avalanche exponential coefficients (V/cm)  
*Av_alph_n*: Avalanche prefactor coefficients (cm-1)  
*Av_beta_n*: Avalanche exponential coefficients (V/cm)  <p>&nbsp;</p>

Optical Properties:

*Abscoeff*: Optical absorption coefficient (cm-1)<p>&nbsp;</p>

Thermal Properties:

*Ther_cond*: Thermal conductivity  
*Heat_Capa*: Thermal heat capacity  
*Ther_coef*: Coefficient for thermal conductivity  
*Vs_coefTp*: Coefficients for temperature dependent saturation velocity  
*Vs_coefTn*: Coefficients for temperature dependent saturation velocity  

<div style="page-break-after: always"></div>


### 2.8 Material Models

**Material Models**

The physical models implemented in the simulator are fully configurable.
To configure the physical models:
1. From the main menu, select **Device**..**Materials**.
2. Select the **Models** tab.

![alt text](image-15.png)

**Parameters**

General Parameters:

*Reference Material*: Used to select reference material to calculate reference energy
levels to. Used mainly in heterojunction devices.  
*Temperature*: Ambient temperature for the simulation. Kelvin<p>&nbsp;</p>

Mobility Models:

*Low Field Mobility*: Option to set as constant, lattice, impurity or carrier_carrier. If the
constant model is selected then mobility is set to the value supplied in the properties
command. If the lattice model is selected then the reduction in mobility due to increased
collision with the lattice with increased temperature will be taken into account. If the
impurity model is selected then the reduction in mobility due to extra collisions with the
lattice is taken into account. If the carrier_carrier model is selected then the reduction in mobility due to extra collisions with the lattice is taken into account, except that
the carrier concentration is taken into account (very important at high injection
levels). Note: If the high field model is selected then the low-field mobility model will
feed into the high field-mobility model. Otherwise it will be the mobility used in the
simulation.  
*High Field Mobility*: Option to set as none, e_field or j_field. The e_field or j_field models
are used to select the high-field mobility model, which can be based on either the
electric field magnitude or the magnitude of the field in the direction of the current.  
*High Field Calculation:* Option to set as edge or element. Used to choode how the highfield
mobility field is calculated. This will either use the values along an element edge or
calculate the field based on the whole element.  
*Surface Mobility*: Option to set as yes or no. Used to select surface mobility along oxide
semiconductor interfaces. This model only affects those edges that actually lie along the
interface.<p>&nbsp;</p>

Recombination Models:

*SRH*: Option to set as yes or no. Used to select Shockley Read Hall recombination
model.  
*Auger*: Option to set as yes or no. Used to select Auger recombination model.
*Direct*: Option to set as yes or no. Used to select direct band-to-band recombination
model.  
*Avalanche*: Option to set as none, II_ELEM or II_EDGE. II_ELEM is used to select an
impact-ionisation model based on a discretisation that uses the full elemental
information. II_EDGE is used to select an impact-ionisation model based on a
discretisation along an edge of an element only.<p>&nbsp;</p>


Other Models:

*Band Gap Narrowing:* Option to set as none, Slotboom, Gaur. Used to select the bandgap
narrowing model used in regions of heavy doping. Both Slotboom and Gaur models
are empirical and are descibed in the reference section of this manual.  
*Transport*: Option to set as drift-diffusion or energy. Used to select drift-diffusion or
energy transport model (not fully implemented)  
*Statistics*: Option to set as boltz or fermi. Used to select Boltzmann or Fermi-Dirac
carrier statistics. Using Fermi-direct is slightly slower than the Boltzmann approximation.  
*Heat Source:* Option to set as element or edge. Used to select how to calculate the heat
source term in an electro-thermal simulation.

<div style="page-break-after: always"></div>


### 2.9 Contacts

**Electrical and Thermal Contacts**

Electrical and/or thermal contacts can be added to any edge or combination of edges on
the perimeter of a region. Individual contacts can be made up of several different edges.
Contacts can also be split across different regions and can occur at the junction between
two different regions. In order to successfully model a device, the model requires a
minimum of two contacts to be specified. The maximum number of contacts than can be
added to a device model is eight. 

To define a contact:

1. From the main toolbar, click on the **Select Edge** button.
2. With the cursor, select all the geometric edges which comprise the contact.
3. Select **Device**..**Define**..Contact from the main menu to create a contact.

Once a contact has been defined, the contact properties dialog box will appear allowing
its properties to be edited. Double-click the cursor on the contact to activate the contact
properties dialog box at any time.

![alt text](image-16.png)

**Parameters**

*Contact Type:* Option to set as Ohmic or Schottky. Selects how contact will interact with
the semiconductor.  
*Work Function:* Work function of the metal. Used to calculate the barrier height for a
Schottky diode or the Flat-band voltage for an oxide contact.  
*P Richardson:* If set to a non-zero value is used as the Richardson constant to calculate
the thermionic emission current for holes.  
*N Richardson*: If set to a non-zero value is used as the Richardson constant to calculate the thermionic emission current for electrons.  
*Barrier Lowering*: Option to set on or off. Select if image force barrier lowering is
included at a Schottky contact.  
*Dipole Alpha*: Coefficient for calculating dipole lowering of Schottky barrier height.  
*Resistance*: Thermal resistance at ambient temperature. Kelvin / Watt  
*Capacitance*: Thermal capacitance at ambient temperature. Joules / Kelvin.  
*Ambient Temperature*: Ambient temperature used in the simulation. Kelvin  

<div style="page-break-after: always"></div>


### 2.10 Surface States

**Surface States**

A surface state can be added to any edge or combination of edges on the perimeter of a
region. This allows the user to specify interface/surface properties, including
recombination velocities, fixed charges and fast surface states. Individual surface
states can be composed of several different edges. Surface states can also be split
across different regions and can occur at the junction between two different regions.

To define a surface state:
1. From the main toolbar, click on the **Select Edge** button.
2. With the cursor, select all the geometric edges which comprise the contact.
3. Select **Device**..**Define**..**Surface** from the main menu to create a surface state.

Once a surface state has been defined, the properties dialog box will appear allowing its
properties to be edited. Double-click the cursor on the surface state to activate the
properties dialog box at any time.

![alt text](image-17.png)

**Parameters**

*NSurface*: Electron surface recombination velocity. cm s-1  
*PSurface*: Hole surface recombination velocity. cm s-1  
*QFixed*: Fixed interface charge. cm-2  
*NAcceptor*: Electron acceptor trapped charge density. cm s-1  
*PAcceptor*: Hole acceptor trapped charge density. cm s-1  
*NDonor*: Electron donor trapped charge density. cm s-1  
*PDonor*: Hole donor trapped charge density. cm s-1  
*QInsulator*: Insulator trapped charge density. cm s-1  
*QDistribution*: Specification of charge density in insulator. No units  

<div style="page-break-after: always"></div>


### 2.11 Doping Windows

**Doping Windows**

Doping windows are used to specify an implant/diffusion doping profile through a
window. The vertical profile maybe a Gaussian, a complementary Error function or a
user specified profile. Doping windows can also be projected in the upward or downward
directions or even in both directions simultaneously. The doping profile of a device is
built-up using region doping and horizontal doping windows, which are summed to give
a total doping concentration.

To draw a horizontal doping window:
1. From the main menu, select **Device**..**Window**..**Doping**.
2. Drag the cursor to define a rectangular doping window.
3. Click on the screen to finish.

Once a doping window has been defined, the doping windows properties dialog box will
appear. In this dialog, the properties and profile of the doping window can be edited.
Double-click the pointer on the doping window to activate the doping window dialog box
at any time.

![alt text](image-18.png)

**Parameters**

Window and Layout:

*Type*: Option to set as normal, left symetric, right symetric or double symetric. Used to
select the shape of the diffusion.  
*Direction*: Option to set as upwards, downwards or both. Used to select the direction of the implant.
*Doping*: Option to set as acceptor or donor. Used to specify the type of doping implant.
*Left*: X coordinate of left hand side of the window. Microns.  
*Top*: Y coordinate of top of the window. Microns.  
*Width*: Width of the window. Microns.  
*Depth*: Height of the window. Microns.<p>&nbsp;</p>

Vertical Parameters:

*Doping Type*: Option to set as Gaussian, erfc, user. Used to specify the functiont that
controls the scaling of the diffusion in the vertical direction.  
*Peak Concentration*: Used to specify the peak doping concentration. For a diffusion
implanted in the downwards direction, the peak concentration will occur at the top of the
window.  
*Junction Doping:* Used to specify the doping concentration. For a diffusion implanted in
the downwards direction, the junction concentration will occur at the bottom of the
window.  
*Straddle*: Not used.  
*User Doping Profil*e: Used to specify a user defined doping profile. The profiles is
defined using a data table that is formatted into two columns, the first value gives the
depth (co-ordinate in microns) the second gives the doping concentration (in cm-3). The
data table can be applied through a non-uniform window. Interpolation is used to
calculate the doping profile at the points below the window.<p>&nbsp;</p>

Lateral Parameters:

*Type*: Option to set as rotate or erfc. Used to specify the lateral profile type. The rotate
option causes the doping profile to rotate around the end window point. The erfc option
provides a lateral erfc type profile with a lateral set in LPARAMS.   
*Reduction*: The lateral reduction factor is used to reduce the lateral spread can be
reduced. If the 'rotate' option is chosen then this parameter specifies the lateral
reduction factor. If the option chosen is 'erfc' then the lateral spread length is specified.<p>&nbsp;</p>

**Calculation of Vertical and Lateral Diffusions**

**Vertical Gaussian scaling factor**

$$
y_{\text{fact}} = N_0 \exp \left( -\left( \frac{y - y_{\text{offset}}}{\sigma_y} \right) \right)
$$

$N_0$ is the Peak doping concentration, given as 1st vertical parameter  
$y$ is the distance in y direction below/above window  
$\sigma_\nu$  is the vertical straddle, given as 2nd vertical parameter  
$y$ $offset$ is the offset of vertical peak below window, given as 3rd vertical parameter.<p>&nbsp;</p>

**Vertical ERFC Scaling Factor**
$$y_{\text {fact }}=N_0 \operatorname{erfc}\left(\frac{y}{\sigma_\nu}\right)$$

$y$ is the distance in y direction below/above window  
$N_0$ is the peak doping concentration, fiven as 1st vertical parameter  
$\sigma_\nu$  is the vertical straddle, given as 2nd vertical parameter <p>&nbsp;</p> 

**Vertical user defined scaling factor**  
$y_{\text {fact }}=y_{\text {user }}(y)$
$y$ is the distance in y direction below/above window  
$\mathrm{y}_{\mathrm{user}}(y)$ is the user profile
The lateral extent of the profile is controlled by the point types, and the lateral choice.<p>&nbsp;</p>


**Lateral rotation scaling factor**  
The lateral rotation scaling factor defines a set of elliptical contours for lateral profile
(circular if r=1), typically used in the range 0.5 to 0.8.

![alt text](image-28.png)  
$y$ is the distance in y direction below/above window  
$r$ is the Radial reducation factor, given as 1st parameter <p>&nbsp;</p>


**Lateral ERFC scaling factor**  
![alt text](image-29.png)  
$y$ is the distance in y direction below/above window.   
$\sigma_l$ is the lateral straddle, given as 1st lateral parameter.

**Total doping**   
$N(x, y)=x_{\text {fact }} \cdot y_{\text {fact }}$





<div style="page-break-after: always"></div>


### 2.14 SRH Windows

**SRH (Shockley Reed Hall) Windows**

Allows user to specify a rectangular window where the default value of the SRH carrier lifetimes can be altered by multiplying them by a constant scale factor within the window.

To draw a SRH window:
1. From the main menu, select Device..Window..SRH.
2. Drag the pointer to define a rectangular SRH window.
Once a SRH window has been defined, the SRH window properties dialog box will
appear. In this dialog, the SRH lifetime can be specified. Double-click the cursor on
the window to edit its properties at any time.

![alt text](image-19.png)

**Parameters**

*Left*: X coordinate of left hand side of the window. Microns.  
*Top*: Y coordinate of top of the window. Microns.  
*Width*: Width of the window. Microns.  
*Depth*: Height of the window. Microns.  
*Scale Factor*: Scale factor for carrier lifetime Units : none  
<div style="page-break-after: always"></div>

### 2.13 Optical Illumination Windows

**Optical Illumination Windows**

Optically illuminated windows are used to set up an optical illumination in a specified
region of a device. In steady state simulations, the photon flux density list specifies the
flux that will be used at each separate bias point in the simulation. In the case of a
transient simulation the photon flux can be modulated with time.

To draw an optically illuminated window:
1. From the main menu, select **Device**..**Window**..**Illumination**.
2. Drag the pointer to define a rectangular optically illuminated window.
Once an optically illuminated window has been defined, the illuminated window
properties dialog box will appear. Double-click the cursor on the window to activate the
properties dialog box at any time.

![alt text](image-20.png)

**Parameters**

*Xmin*: Minimum x co-ordinate of the window. Microns.  
*Xmax*: Maximum x co-ordinate of the window. Microns.  
*Ymin*: Minimum y co-ordinate of the window. Microns.  
*Ymax*. Maximum y co-ordinate of the window. Microns.  
*Photon Flux*: List of photon flux densities. In the dc case it specifies a flux that will be
used on each separate bias point. If there are more bias points than specified values
then the late value will be used. Units of photon flux density are cm-2 s-1.  
*Time*: List of times which combine with the Photon Flux list to give an optical modulation
of the optical generation. Not functional at present.<p>&nbsp;</p>

**Calculations**

If the window defines a surface (aligned with either the x or y axis) then it will be
assumed to be a window and the following expressions for absorption will be used:

$U_{O P T}(x)=\alpha \Phi \exp (-\alpha x)$  

where G is the generation rate due to optical illumination, is the absorption coefficient
(specified for the material by Abscoeff in the properties command of Mprep), is the
photon flux and x is the distance of the point below the window. Otherwise it us
assumed it is a region in which case all the points inside the window will have the
following generation rate:  
$U_{O P T}(x)=\Phi$  
<div style="page-break-after: always"></div>


### 2.14 Meshing Grid

**Meshing Grid**

In order to create a triangulated finite element model of a device, the user must define
the form and layout of the mesh required. A mesh is defined from a set of triangles
which are created by triangulation of a set of nodes in 2D space. The meshing grid is
used to define the positioning of this set of nodes. The nodes are located at the
intersection of these mesh lines which are either aligned in the x-direction or the ydirection.
The user has the task of defining groups of orthogonal lines in both the horizontal
and vertical directions to form a template for the construction of the mesh. The
intersections of these orthogonal lines with each other and with the region boundaries
defines a set of geometric node points that are used to construct the finite element
mesh.

To define a rectangular meshing grid:
1. From the main menu, select **Device**..**Mesh Grid** to display the meshing grid dialog.
2. Select the **Vertical Lines** at **Regular Intervals** option from the combo box.
3. Click on the **Add** button and a dialog box will appear.
4. Define a rectangular area in terms of X and Y coordinates e.g. (0,0) to (5,5)
5. Specify the spacing between the each line.
5. Click on **OK** and a series of regularly spaced vertical lines will appear over the defined
area.
6. Repeat the above procedure, but this time select the **Horizontal Lines** at **Regular
Intervals** option from the dropdown combo box in the meshing grid dialog.

This process of generating line groups in the x and y directions is repeated until a
suitable meshing grid of intersecting lines is achieved.

![alt text](image-21.png)

<div style="page-break-after: always"></div>


### 2.15 Finite Element Mesh

**Finite Element Mesh**

Having defined a mesh in terms of a set of mesh lines, this command will generate the
nodes at the intersection of the mesh lines and triangulate them into a mesh. The
Delauney algorithm is used to triangulate the nodes. In order to create a finite element
(FE) device model, at least one region and two contacts must be defined and a suitable
meshing grid specified.

To generate a FE device model:
1. From the main menu, select **Device**..**FE Mesh Model**.
To exit the FE model at any time
1. From the device model window, select **Exit Mesh**.

Depending on the complexity of the device geometry and the meshing grid, it may take
some time for the system to generate a fully triangulated finite element model. The
progress of the mesh generator will be displayed in the status bar at the bottom of the
screen and when complete, the finished FE model will be dispayed in the main view.
The p and n regions in the device will also be plotted, thus defining the position of the
metallurgical junction i.e. the position where net doping is zero atoms/cm3.

![alt text](image-22.png)

<div style="page-break-after: always"></div>


### 2.16 Mesh Refinement

**Mesh Refinement**

The quality of an FE device model is largely governed by the quality of the initial
meshing grid defined by the user. However, three methods are provided for improving
the quality of the mesh and the refinement the triangular elements. <p>&nbsp;</p>

**Junction refinement**

The junction refinement function enables the user to refine a band of triangular
elements that fall within within a specified distance of the metallurgical junction. In fact,
facilities are provided to enable a number of successive refinements in order to derive
the best possible quality mesh around the junction

To refine the mesh around a metallurgical junction:
1. From the main menu, select **Device**..**Refine** and a dialog will appear.
2. Choose the **Junction** tab.
3. Specify the distance to refine around the junction.
4. Specify the number of successive refinements required.
5. Click the **Apply** button to initiate the refinement.

![alt text](image-23.png)<p>&nbsp;</p>

**Selective Refinement**

The selective refinement function enables the user to interactively select and refine
individual or groups of mesh elements.
To selectively refine groups of mesh elements:
1. From the main toolbar, choose the **Select Object** button
2. Drag a rectangular selection window over the model to select a group of mesh
elements.
3. From the main menu, select **Device**..**Refine** and a dialog will appear.
4. Choose the **Selected** tab.
5. Choose the direction of the refinement required
6. Click the **Apply** button the initiate the refinement.<p>&nbsp;</p>

**Set meshing tolerances**

As noted at the start of this topic, the initial quality of a mesh is governed by the quality
of the mesh points defined by the user. During the mesh generation process however,
the triangulation of these mesh points is largely undertaken with only minimal
consideration to the shape and size of the triangular elements that will be generated. As
a result, poor quality triangular elements may sometimes be created.

The quality of most meshes can be improved by setting a tolerance value for the
minimum allowable spacing between adjacent node points on the boundary of a region
and for the minimum allowable spacing between points inside a region and those on a
region boundary. By setting these tolerance values to an appropriate value, unwanted
nodes can be eliminated from the mesh and the quality of the triangles will often be
improved.

To set the meshing tolerances:
1. From the main menu, select **Device**..**Refine** and a dialog will appear.
2. Choose the **Tolerances** tab.
2. Specify suitable tolerance values.
3. Click the **Apply** button the initiate the refinement.

<div style="page-break-after: always"></div>

## 3 Circuit Simulation
<div style="page-break-after: always"></div>


### 5.1 Circuit Components

**Circuit Components**

The following components can be added to the circuit: Resistor, Capacitor, Linear
Inductor, Non-Linear Inductor, DC Voltage Source, DC Current Source, Transient
Voltage Source, Transient Current Source, Ground, Diode, Zener Diode, Dependant
Source, Initial Voltage, Comparator, Switch, 2 Coil Transformer, 3 Coil Transformer and
circuit Models for NPN, PNP, MOSFET, Npt IGBT (Non punch through IGBT), Pt IGBT
(Punch Through IGBT), Thyristor and PIN Diode devices.

To add a component to the circuit:
1. From the main toolbar, click on the required component toolbar button.
2. Click the cursor on the main view to add the component to the circuit.

2D Physical Device Models can also be added to the circuit. The process of creating a 2D
physical device model is described in detail in the previous chapter.

To add a 2D device model to a circuit:
1. From the main menu, select **Circuit**..**Device Model**.
2. Click the cursor on the main window to add a device model to the circuit.
3. Double click on the device model component and a file dialog will appear.
4. Browse for the previously saved FE model file. e.g. '\TCADStudio\Projects\PiN.sdm'.
5. Click **OK**to load the model

The properties of all components can be edited by double clicking them with the cursor.
The position of all components can be changed by dragging them to a new position with
the cursor and the orientation of components by selecting the component and then
selecting **Edit**..**R**otate Left** or **Edit**..**Rotate Right** from the main menu.

**Parameters**

The operation of most components is self explanatory, however some additional notes
are given below:

*Ground*: There must be at least one ground in any circuit.

*Initial Voltage*: Used to specify an initial voltage to a network node. This is done in order to aid the
solution process, by giving it a good initial guess. It is not part of the circuit.

*Diodes*: There are two ideal diodes available, the standard diode and a zener diode. In the
forward bias case they are identical and need the same parameters specified. As the
forward bias voltage increases, so the resistance of the diode decreases very rapidly.
The minimum forward bias resistance should be entered. In the case of the Zener diode
the extra parameters required are the breakdown voltage and the resistance of the
diode in breakdown.  

*Comparator*: The Comparator has the following model
V4 = V3 + Output Voltage HIGH if V1 - V2 > Threshold Voltage
V4 = V3 + Output Voltage LOW if V1 - V2 < Threshold Voltage  
*Switch* The Switch has the following model
Rout = Output Resistance OFF if Vin < Lower Threshold Voltage
Rout = Output Resistance ON if Vin > Upper Threshold Voltage
For Vin between Lower Threshold Voltage and Upper Threshold Voltage the Output
Resistance is linearly extrapolated between Output Resistance OFF and Output
Resistance ON.  

*Steady State Current and Voltage Sources*
In steady state analysis mode, steady state current and voltage sources are used to
specify a list of current or voltage values for steady state cases.

*Transient Current and Voltage Sources*: In transient analysis mode, transient current and voltage sources are used to define a
current v time waveform or a voltage v time waveform. Four types of source are
available, including the periodic source, sine wave source, triangle wave source and
rectangle wave source.
Periodic sources enable the user to define any shape of current v time or voltage v time
waveforms. The waveform can be repeated with the period set at the longest time point
programmed in the waveform.

The sine wave source is defined as:

The triangle wave source is defined as:

![alt text](image-24.png)

The rectangle wave source is defined as:

![alt text](image-25.png)


<div style="page-break-after: always"></div>

### 3.2 IV Curve Tracer Component

**IV Curve Tracer Component**

The current voltage (IV) tracing algorithm is used to automatically trace around
awkward IV characteristics by specifying how to start off the trace and when to stop the
trace. The algorithm will then fill in the points in-between. This is particularly useful
when the curve becomes very steep (such as in the case of avalanche breakdown) in
which case the voltage source driven device becomes very unstable and will not
converge. This algorithm drives one of the device contacts with a variable impedance
current source (a voltage source in series with a resistor), this allows the source to look
more like a current source on vertical sections of the curve. Using this algorithm it is
possible to trace round complete curves that would not ordinarily be possible, such as
the forward break-over characteristics of a thyristor. The algorithm uses the number of
Newton iterations to control the step size.  

The IV Trace component is only valid for steady state simulation mode, and a 2D
physical device model must also be present in the circuit. An IV trace should be directly
connected to a device contact. Wires should not be used to connnect the IV trace to a
device contact.

**Parameters**

*Start Bias:* Normally the sweep will start from the origin. If it is desired to solve from
some other point then the starting bias must be specified. This may need to be used in
conjunction with an appropriate initial solution from a previous run  
*Initial Step*: Size of first voltage step in IV trace. The next step will be taken as half the
first and the automatic curve tracing takes over.  
*Vmax:* Maximum voltage allowed in curve tracing algorithm. When Vmax is reached the
solver will stop.  
*Imax:* Maximum current allowed in curve tracing algorithm. When Imax is reached the
solver will stop.  
*Min Newton:* If the number of Newton iterations falls below Min Newton the step length
will be increased.    
*Max Newton:* If the number of Newton iterations is greater than Max Newton the step
length will be decreased. Simulation mode is automatically set to Curve Trace mode.

<div style="page-break-after: always"></div>


### 3.3 Wiring Circuits

**Wiring Circuits**

Connections should only be drawn between two component nodes - these points are
marked clearly on the screen by a small blue cross. Individual wires cannot be
connected together, except at common component nodes.

To connect circuit components together with wires:
1. From the main menu, select Circuit..Connection.
2. Click the cursor on a component node and drag the cursor to join it to the next node.
3. Double click the cursor to end the connection.
3. Repeat the above steps to complete the circuit wiring.

<div style="page-break-after: always"></div>

### 3.4 Performing a Simulation

**Performing a Simulation**

Aquarius can perform two main types of simulation namely, steady state
(DC), Transient (time dependant) simulations. Simulations can also be re-started from
existing simulations as a continuation run from an initial condition.

To perform a steady state simulation:
1. From the main menu, select Simulation..Steady State.
2. The simulation window will appear and the simulation will start.
3. When the simulation has finished, close the simulation window.<p>&nbsp;</p>

To perform a transient simulation:
1. From the main menu, select Simulation..Transient.
2. Set the simulation end time to the required value.
3. When the simulation has finished, close the simulation window<p>&nbsp;</p>

Simulations can also be re-started from existing simulations as a continuation run from
an initial condition. Sometimes re-starting a simulation from an initial condition is
desirable when the numerical complexity of a model is such that the solver will fail to
converge on a solution and an indirect approach is required.<p>&nbsp;</p>

To restart an existing simulation:
1. From the main menu, select Simulation..Restart.
2. When prompted select the existing simulation you wish to restart from.
3. Select the restart case or simulation time.<p>&nbsp;</p>

If the file from which the initial condition is being read is a transient then the time
parameter may be used to find the nearest case in the results files to the time specified.
Otherwise the case parameter provides the case number to read in for the initial
condition.<p>&nbsp;</p>

**Parameters**

*Case*: Used to select steady state or transient case number to used as initial condition to
simulation. Care should be taken to ensure that the case chosen has a full internal
solution saved in the case of a 2-D device simulation.  
*Time*: Used to scan through the transient results file and find the nearest case with a full
solution to use as the initial condition.

<div style="page-break-after: always"></div>

### 3.5 Solver Controls

**Solver Options**

The solver employed in the simulation of the circuit and solution of the device physics
equations is fully configurable. In most cases, the default settings are appropriate for
common simulations. However, users can configure the settings to their own
requirements.

To edit the solver settings:
1. From the main menu, select Simulation..Solver Options<p>&nbsp;</p>

**Parameters**

**General**  
*Monitor*: Options are yes or no. Display more detailed monitor information as solution
progresses.    
*Minimum Resistance:* Used to specify the value of the linking resistor used to link a
device into the circuit.

**Solver Equations**  
*Coupled Type:* Options are Fully Decoupled, Decoupled Elec Therm and Fully Coupled.
Used to select the coupling used in the solution process.  
*Poisson:* Options are yes or no. Used to solve Poisson's equation.  
*Hole Continuity:* Options are yes or no. Used to solve hole continuity equation.  
*Electron Continuity*: Options are yes or no. Used to solve electron continuity equation  
*Heat Equation:* Options are yes or no. Used to solve heat equation.  
*Elect Temp:* Options are yes or no. Used to solve energy transport equation. Not active.

**Linear Solver**  
*Solver Type: *Options are CGS, CGSTAB or DIRECT. Type of linear algebra to use.  
*Max Linear Loops:* Maximum number of iterations allowed for ICCG, CGS and   CGS-STAB
solvers  
*Linear Tolerance:* Tolerance for ICCG, CGS and CGS-STAB iterative linear solvers  
*Pivot Factor:* Provides extra working space for direct solver. Large values are needed
when the matrix becomes ill-conditioned.

**Decoupled Solver**  
MAX_DECOUPLED_LOOPS: Maximum number of de-coupled (Gummel) loops allowed.  
DECOUPLED_TOL: Tolerance for de-coupled (Gummel) solver.

**Newton Search**  
MAX_NEWTON_LOOPS: Maximum number of Newton loops allowed  
NETWORK_TOL: Tolerance for network voltage convergence  
VOLTAGE_TOL: Tolerance for voltage convergence  
MAX_VOLT_UPDATE: Maximum voltage update at any node in the mesh for a single
Newton step  
TEMPERATURE_TOL: Tolerance for temperature convergence  
MAX_TEMP_UPDATE: Maximum temperature update at any node in the mesh for a
single Newton step  
DELTA_TEMP: Temperature step used in numerical calculations of derivatives with
respect to temperature  

**Back Tracking**  
MAX_INCREASE: Maximum times solution update is allowed to increase before solution
is assumed to have failed and back-tracking is used  
MAX_BACK_STEP: Maximum times solution is allowed to back-track during a single
Newton-process  
BT_INC_FAC Real:: Multiplication factor for increasing bias after back-tracking is used  
BT_DEC_FAC: Division factor for reducing bias when back-tracking is used  
SAVE_BACK_TRACK: Options are yes or no. Save solution points when the process
back-tracks. <p>&nbsp;</p>

### Time Stepping (Transient Simulations)
This is used to control the time steps in a transient simulation. The simulator uses a
backward Euler time stepping algorithm. The time steps can be supplied either manually
or selected by the simulator in two ways.

When supplying the time steps manually, they are supplied as a sequence of break
points. These are given as a pair of values; time and time step. The time specifies when
the time step will start, which will be used until another break point is encountered. The
times are given in a real list and the time step vales as another real list which means
they are enclosed in parenthesis.

Automatic time stepping is controlled in two ways. Firstly, based on a predictor-corrector
method, the error between the forward (explicit) and backward (implicit) solutions are
compared. The time step may be rejected based on this comparison and recalculated
with a new time step, or it may be selected and a suggested value for the next time step
selected.

The second method for time step selection is based on monitoring the number of
Newton-loops taken per non-linear solution step. The algorithm will expand the time
step if the number of Newton iterations is small and reduce the time step if the number
of iteration is large.

In all three cases above it is likely that at some point the Newton-process will fail. If this
happens the simulator will 'back-track', this involves reducing the time step until the
process converges. This will always happen since at very small time steps the difference
between the solution at the last time step and that at this time step are sufficiently small that the solution must converge. Once convergence is achieved the process will
continue on forward again.<p>&nbsp;</p>

**Parameters**  
TIME: Provide a set of break points at which the time step will change. The number
must match the number of time step values specified in the DELTA_T list of values.  
DELTA_T: Provide a set time step values. The number must match the number of time
step values specified in the TIME list of values  
AUTO_TIME: Options are on, off or newton_loops. Used to select method of time step
control. 'Off' uses manual time steps specified by the TIME and DELTA_T. 'On' uses
automatic time stepping based on comparing difference in solutions between forward
and backward difference methods. 'Newton_loops' adjusts the time step based on the
number of Newton loops taken to converge in the non-linear process. The rate at which
the step is increased and decreased is set by the MIN_NEWTON, MAX_NEWTON and
STEP_INCREASE, STEP_DECREASE parameters.  
MIN_DELTA_T: Minimum allowed time step.  
MAX_DELTA_T: Maximum allowed time step.  
EPSILON_R: Relative error tolerance for time automatic time-stepping algorithm.  
EPSILON_A: Absolute error tolerance for time automatic time-stepping algorithm.  
MIN_NEWTON: Specify number of Newton loops that will trigger an increase in the time
step. NewTimeStep = OldTimeStep*STEP_INCREASE  
MAX_NEWTON: Specify number of Newton loops that will trigger an decrease in the time
step NewTimeStep = OldTimeStep/STEP_DECREASE  
STEP_INCREASE: Specify how much a time step will increase by  
STEP_DECREASE: Specify how much a time step will decrease by <p>&nbsp;</p>

### Write Times (Transient Simulations)
This command controls when the full internal solution is written to disk for a transient
simulation. For a steady state simulation the internal solution is written for each bias
point. At every point in the transient solution and dc. Simulation, the terminal solution
(Currents, voltages, network voltages) will always be written to the ASCII results file
(*.res). However, the internal solution is written out separately into a file referenced by
the results file but containing only one internal solution. If multiple devices are being
simulated each device will be written to a separate file. There are three ways of
selecting whether a full solution is written, these are selected by the WRITE_TYPE
parameter.  

Firstly, the results may be written out at equally spaced time intervals. Next, a set of
specific times may be specified to write the full internal solution. Both these methods
will force solutions to occur at the specified times. Finally, the solution may be written at
an equi-spaced number of time steps. <p>&nbsp;</p>

**Parameters**

WRITE_TYPE: Options are equal_spacing, specified or time_steps. Used to select criteria for writing out a full internal device solution fir a transient simulation. The method is
described above.  

TIMES: Meaning of this parameter depends on the method selected by WRITE_TYPE
above. equal_spacing : first value in list specifies time between writing out full device
solutionsspecified : list of values specifying times for writing out full device
solutionstime_steps : first value is converted to an integer and used as number of time
steps between writing the full internal solution out

<div style="page-break-after: always"></div>


## 4 Simulation Results
<div style="page-break-after: always"></div>

### 4.1 Introduction

**Introduction to Simulation Results**

The results query module is used to view the results of the numerical calculations on the
screen and to produce hardcopies. The results query modules enables the following
results to be extracted from the simulation:

Line: for producing line plots on "cuts" through the 2D cross-section of device models.  
Isometric: for producing 3-D isometric plots at device level  
Contour: for producing contour plots at device level  
Ivplot: for producing terminal I/V characteristics at circuit level  
Transient: for plotting transient terminal and circuit waveforms at circuit level

The first three modes are used to plot the internal distributions in the device, and the
last two are for looking at their terminal quantities of the device. The philosophy for
viewing the internal distributions is to define what you want to plot. This will include the
selection of the required plot variable (e.g. potential, electron concentration, net doping
concentration etc), the required result cases and the manner of presentation (i.e. line,
isometric or contour plot). Terminal quantities are extracted directy at circuit level.

<div style="page-break-after: always"></div>

### 4.2 Circuit Level Results

**Circuit Level Results**
Simulation results can be obtained at circuit level using the Query Circuit function. The
Query Circuit function provides the facility to generate 2D XY line plots of circuit level
currents and voltages in both steady state and transient simulations.

To create a 2D XY line plot of circuit level results:
1. From the Results Manager window, select Query Circuit.
2. Click the pointer on a circuit component or contact and a popup menu will appear.
3. From the popup menu, select the required variable (the X graph variable).
4. Again, click the pointer on a circuit component or contact and a popup menu will
appear.
5. From the popup menu, select the required variable (the Y graph variable).
6. A graph showing the IV characteristic will now appear.

To print or edit the graph, right click the cursor on the graph window and a pop-up
menu with various options will appear.

<div style="page-break-after: always"></div>

### 4.3 Device Level Results

**Device Level Results**

Simulation results can be obtained at device level using the Query Device function. The
Query Device function provides the facility to generate 2D XY line plots of results
through a device and 3D isometric or contour plots of results for complete devices.

**2D XY line plots at device level**

In order to take a 2D line plot at device level, we need to specify the coordinates of a
section (or a cut) through the device where we wish to obtain results from.

1. From the Results Manager window, select Query Device and the results wizard will
appear.
2. In the wizard, select 2D Line Plot and then click Next.
3. Check the required variable in the variables window and then click Next.
4. Check the required case in the cases list and then click Next.
5. Add an X or Y cut position to the cut list and then click Next to finish.
6. A graph showing the required variable plot will now appear.
To print or edit the graph, right click the cursor on the graph window and a pop-up
menu with various options will appear. <p>&nbsp;</p>

**3D isometric plots at device level**
1. From the Results Manager window, select Query Device and the results wizard will
appear.
2. In the wizard, select 3D Isometric Plot and then click Next.
3. Check the required variable the variables window and then click Next.
4. Check the required case in the cases list and then click Next.
5. A graph showing an isometric plot of the required variable will now appear.

To print or edit the graph, right click the cursor on the graph window and a pop-up
menu with various options will appear.<p>&nbsp;</p>

The following device level results are available at device level:  

Electrostatic Potential  
Hole and Electron Quasi-Fermi Levels  
Electron and Lattice Temperatures  
Acceptor and Donor Concentrations  
Valence and Conduction Band Energies  
Intrinsic Fermi-Energy  
Hole and Electron Quasi-Fermi Energies  
Hole and Electron Concentrations  
Intrinsic Carrier Concentration  
Valence and Conduction Band Off-set Parameters  
Net Doping Concentration  
Net Charge Concentration  
Recombination Rate  
Hole and Electron Mobilities  
E-Field Magnitude (or X and Y components of)  
Hole Current Magnitude (or X and Y components of)  
Electron Current Magnitude (or X and Y components of)  
Total Current Magnitude (or X and Y components of) 

## 5 Worked Examples

<div style="page-break-after: always"></div>

### 5.1 PiN Power Diode

**Example 1 - Ivestigation of PiN Power Diode Characteristics**

The aim of this example is to become familiar with the use of Aquarius software for the design
and simulation of the PiN Power Diode structure and characteristics. The use of numerical TCAD is
very powerful because it allows an insight into the device internal physics and enables the student to
be able to develop a good understanding of the links between the device structure and its technology
parameters.
Brief Theory Of PiN Power Diode Operation
Figure 1. shows the structure of fast switching epitaxial power diode. Here, the starting material is a
wafer of heavily doped n+ substrate, onto which a lightly doped n-layer is deposited epitaxially. A p+
surface layer is diffused into this to form the junction. As well as being capable of blocking the
required reverse voltage in the off-state, a power diode requires low forward voltage drop in the onstate.
In many applications, a rapid transition from the forward conducting to the reverse blocking
state is required.

![alt text](image-26.png)

Figure 2. shows the dependence of the maximum breakdown voltage VBR on the doping
N and the width wv of lightly doped i-layer. To obtain a higher VBR, either lower doped
and/or wider I-layer is needed. In turn, the both increase diode forward voltage drop.
When the PiN diode is subjected to an abrupt change of current or voltage, the carrier
distribution in the device is very different from the steady-state conditions. In many
power electronic circuits, a diode is called upon to switch quickly from forward
conducting state to the blocking state.

Figure 2  
The example of reverse recovery waveforms of power diode operating in a rectifying circuit with series inductance is illustrated in Fig. 3. At the beginning of turn-off process,
the i-layer is flooded with excess carriers. Initially, it prevents the establishment of a
space charge region, so the voltage across the diode remains small and, in the first part
of the transition process, the current falls to zero and reverses at a rate determined by
the external circuit. Only when sufficiently charge has recombined, or has diffused out
as a reverse current, do the carrier concentrations at the p-n junction reach
thermodynamically equilibrium, permitting the formation of space charge region. The
reverse current comes gradually to a maximum (here 75A) then decays away as the
residual carriers recombine or diffuse out. The reverse voltage across the diode passes
through its steady-state value as the current reaches its maximum value. It continues
rising to a peak whose magnitude (here 853V) is governed by the rate of fall of the
reverse diode current and hence by rate at which the remaining carriers are swept out
from the base region.

Figure 3  
The reverse recovery phase of diode operation has many important implications for the
circuit designers. The reverse recovery waveforms depend on previous forward current
and its rate of fall, the circuit conditions (especially the series inductance) and the
carrier life-time within a diode i-layer. As an example, Fig. 4 shows the influence of the
decrease of carriers life-time value on the reverse recovery current waveforms.

Figure 4  
**Modelling PiN Power Diode Structure**
The Aquarius software should be ready to use on your pc.
Follow these step-by-step instructions and refer to the screen shots on the opposite
page to help you. Ask for assistance from one of the lecturers if you require help.

**Process Simulation Steps**  
1. Select **File..New** from the pull-down menu at the top left of the screen. Select **Process Model** and then click **OK** to finish. A new window will appear titled process 1.
2. Click the **Define Substrate** button. Set the Substrate Length to 10 microns, the Impurity Type to Phosphorous, the Impurity Concentration to 3E16 and the Crystal Orientation to 100. Click **OK** to finish (refer to figure 1).
3. Click the **Add Implant** button. Change the Title to 'Global p- Implant'. Set the Impurity Type to Boron, the Ion Energy to 100keV, the impurity dose to 1E13cm-2, leave the mask material unchanged as this feature is irrelevant with setting a Mask Shape. As this is a global implant then a mask is not required here. Click **OK** finish. You will observe that an implant recipe is added in the process 1 window.
4. A diffusion step is now added to drive and activate the p- implant. Click the **Add Diffusion** button. Change the title to 'p- drive'. Set the Temperature to 1100C, the Time to 3600 seconds, leave the Model unchanged at Neutral. Click **OK** to finish. This recipe is now added beneath the previous implant in the process window.
5. A shallow p+ implant is now added to enable a good ohmic contact for the anode.Click the **Add Implant** button. Change the Title to 'p+ Implant'. Set the Impurity Type to Boron, the Ion Energy to 20keV, the impurity dose to 1E15cm-2 and the mask material to SiO2. Do not click ok yet, for this implant a mask is required so therefore click the **Mask Shape** button. Click the **Preview Mask Shape** button. A new window is opened that enables a preview of the mask to be observed to help prevent user error.
Now click **Add Point** in the implant window. Enter values of Mask Position X = 2.5
microns, Mask Depth Y = 0 microns. Click **OK**. The first point P1 is added in both windows. Now enter another point with coordinates X = 2.5 microns, Y = 1 micron and click **OK**. A second point is added to both Windows and the mask is clearly shown (refer to figure 2.). Finally click **OK** in the implant window to finish the p+ implant step. This added to the process flow.
6. Another Diffusion step is now added to activate the p+ implant. Click the **Add Diffusion** button. Change the title to 'p+ rtp'. Set the Temperature to 1100C, the Time to 120 seconds, leave the Model unchanged at Neutral. Click **OK** to finish.
7. Select **File..SaveAs** in the pull-down menu. Save the file in the projects folder as 'pin.prm'.
8. Now click the **Simulation** button in the process window. After a few seconds a new window will appear called device 1. This window shows the 2-D cross-sectional image of the structure.
9. Select **View..Options** from the top pull-down menu and select the **Mesh** tab. Now
click the Acceptor Profile and Donor Profile boxes and click **OK**. The device 1 structure should now show the p+ region. Refer to figure 3. to check.
10. Select **File..Save As** in the pull-down menu. Save the file in the projects folder as 'pin.sdm'. This saves the device structure.
11. This concludes the part of the worked example that makes use of the process
simulator. The rest of the example makes use of the device and circuit simulation
features in Aquarius. <p>&nbsp;</p>

**Device Simulation Steps**
1. The n+ cathode region is now added to the generated structure using the device
simulation tools. First right click the mouse cursor on the simulated structure and select
**Exit Mesh**. The structure reverts to a plain box shape.
2. From the main menu, select **Draw..Rectangle** (or click on the draw rectangle toolbar)
buton button . Using the cross-hairs shown and the coordinates at the bottom left of
the screen draw a 10 microns by 2 microns rectangle connected to the bottom of the
structure (refer to figure 4. for position ). Right click the mouse cursor in the rectangle
and select Define and then Region. The cross-hairs change to an arrow. Left click in the
10*2 microns rectangle. A new region window is opened on the screen. Use the Select
Region Colour to change the region to a different colour and set the Donor doping to
1e19 Atoms/cm3. Click OK. A new n+ region is now added to the bottom of the
structure (refer to figure 4.). Click the select object button to deselect the define
rectangle function.
3. A point is now added to select the right edge of the anode contact. Click the define
point icon. Using the cross-hairs add a point at coordinates (2.5,10) located on the top
surface of the structure.
4. An oxide is now added to the right of the point on the top surface. Click the button.
Add a 7.5 microns by 0.6 microns rectangle attached to the top of the structure (refer to
figure 5. for position). Right click in the rectangle and select Define and then Region.
The cross-hairs change to an arrow. Left click in the 7.5*0.6 microns rectangle. A new
region window is opened on the screen. Use the **Select Region Colour** to change the
region to a different colour. Change the Material to oxide. Click **OK**. An oxide is now
added to the structure (Refer to figure 5).
5. A grid is now added to the new n+ and oxide regions to enable numerical solutions to
be obtained for the device when it is placed in the circuit simulator. Click the **Mesh Grid**
button. A window labelled Meshing Grid is opened. Select **Horizontal lines** at regular intervals in the window. Now using the cross-hairs click on the lower left and upper right
corners of the p+ region at the bottom of the structure. A new window called Horizontal
Lines is opened. Set the Spacing Between Lines to 0.4 microns and click **OK**. Some
horizontal lines are now added to the n+ region in the structure. Select Vertical lines at
regular intervals in the window. Click on **Add**. A new window called Vertical Lines is
opened. Set the Spacing Between Lines to 0.25 microns and click **OK**. Vertical lines are
now added. Close the Meshing Grid Window.
6. Repeat number 5. above but this time mesh the oxide layer. Use spacing between
lines of 0.3 microns for horizontal line and 0.25 microns for vertical lines.
7. Click the **FE Mesh Model** to create the Finite Element mesh. Check the result against
figure 6. If the mesh looks correct right click on the structure and select **Exit Mesh**.
Otherwise delete the mesh and restart it.
8. The next steps are to add the ohmic anode and cathode contacts. Right click on the
device and select **Define** and then **Contact**. Left click on the top line of the structure
between the top left point and the point that was added earlier - refer to figure 7. for
the correct position. A red line is drawn between the two points along the device surface
to depict the position of the contact. Again right click on the device and select **Define**
and then **Contact**. A new window called contact is opened. Change the Name to Anode
and click **OK**. A new thicker red line is drawn .
9. Repeat the sep 8. but this time select the line between the bottom two points of the
n+ region at the bottom of the device. Change the Name of this contact to Cathode and
click **OK**. Refer to figure 8. for final device structure.
10. Finally select **File** then **Save As** in the pull-down menu. Save the file in the IGDS
folder as pin_final_ini.sdm (where ini are your initials). This saves the final device
structure.
11. This concludes the part of the lab that creates the PiN structure. The remainder of
the lab uses the circuit simulation features to analyse the device characteristics.
<p>&nbsp;</p>

**Determination of Reverse Breakdown Voltage**
1. Using the circuit simulator in Aquarius the characteristics of the PiN Power Diode
can be explored. Select File then New from the Pull-down menu at the top left of the
screen. Select **Circuit Simulation** and then click **OK**. A new window will appear titled
Circuit 1.
2. Select **Circuit** then **Device Model** from the Pull-down menu at the top left of the
screen Left click the mouse in the circuit window. A two terminal unassigned device will
appear. Double left click on the device and then select your device model
pin_final_ini.sdm and click open. The PiN Diode will appear with the Anode and Cathode
terminals displayed (alternatively the circuit simulation icons may be used - position the
mouse arrow over each icon to display its function)..
3. Select **Circuit** then **IV Curve Tracer** from the Pull-down menu at the top left of the
screen. Left click in the circuit and an IV Curve Tracer device is displayed. Position the
IV Curve Tracer terminal (denoted by a cross) directly over the Cathode Terminal (refer
to figure 9).
4. Select **Circuit** then **Ground**. Left click in the circuit and position the Ground symbol
underneath the PiN Power Diode.
5. Click the **Connection Icon** (towards the left side of the screen). Using the mouse 'wire
up' the circuit as shown in figure 9. Single left click the mouse on a terminal to start a
wire. Single left click to change direction and double left click on a terminal to terminate the wire.
6. Finally select **File** then **Save As** in the pull-down menu. Save the file in the IGDS
folder as pin_bv_ini.cim (where ini are your initials). This saves the circuit name.
7. Select **Simulation** then **Steady State**. A simulation window opens and the internal
solver will calculate the Breakdown Voltage. This will take several minutes.<p>&nbsp;</p>


**Plotting The Results**
1. In the Results Manager window to the left of the screen click the **Query Circuit** button.
Now move the mouse arrow back into the Circuit window. A question mark appears at
the side of the arrow. Left click the cathode terminal and select Voltage. Left click the
cathode terminal again and select Total Current. After a few seconds an XY plot of
Cathode current against Cathode Voltage is displayed (see figure 10.). It is also possible
to export data to an external software package such as Microsoft Excel by selecting the
**Export Plot Data** button in the Results Manager window. Right clicking on the graph also
provides options such as a Log scale for the Y axis.
2. Select **Query Device** in the Results Manager window. Click **2D Line Plot** in the Query
Device window that opens and then select Next. Select **E-Field Magnitude** and click **Next**.
Select the last Case and click **Next**. Change the Add X = value 1 micron and then click
the Add X = button. Click **Finished**. A plot of the Electric Field in the device at
Breakdown is shown. In this case the electric field has reached the critical value to cause
avalanche breakdown (refer to figure 11.). <p>&nbsp;</p>

**Reverse Recovery Characterisation**
1. Using the same methodology as used for the Reverse Breakdown voltage experiment
create the test circuit shown in figure 12.
2. Use values for the circuit components of:
a. Resistor = 0.5?
b. Inductor = 1?H
c. Transient Voltage Source - referring to figure 12. Left double click the **Transient
Voltage Source** symbol. A window will open titled Transient Voltage Source. Click the
**S**elect Waveform** button. Select **Custom** and then **Add**. Add values in turn of:
Voltage (V) Time (S)
3 0
3 1e-6
-40 3e-6
-40 1e-5
Left click **Apply** when completed and then Ok.
3. Save the circuit as PiN_rec_ini.crm.
4. Select **Simulation** from the pull down menu and then select **Transient**. Enter an End
Time of 1e-5 Seconds. The simulation will and take several minutes to complete.
5. Using the Query Circuit function plot graphs of Anode Voltage versus Time and Anode
Current Verses time. Check your results against figures 13. and 14.
6. This concludes the PiN Power Diode Laboratory.

<div style="page-break-after: always"></div>

## 6 Reference

<div style="page-break-after: always"></div>

### 6.1 Physical Models

This topic describes the various physical models implemented in the simulator.

**1.0 Physical Models**

**1.1 Device Model**  
The program solves the following set of partial differential equations, namely Poisson's
equation, along with the hole and electron continuity equations:

# INSERT LATEX HERE !!

with the hole and electron currents being given by the drift-diffusion equations:

# INSERT LATEX HERE !!
where and are the electron and hole mobilities respectively, and and are the electron
and hole diffusivities (which are related to the mobilities by Einstein's relation). The
quantities and are band-parameters associated with the conduction and valence bands.
They represent the shift in the band edges due to either heavy doping effects in silicon,
or to compositional variations in non-uniform materials, such as heterojunctions.
Boltzmann-statistics are normally used to describe the carrier concentrations in most
situations:

# INSERT LATEX HERE !!
where is the intrinsic carrier concentration in the reference material, and the thermal
voltage is given by
# INSERT LATEX HERE !!

Alternatively, Fermi-Dirac statistics may also be used to correctly describe the situation
where degeneracy is important.
# INSERT LATEX HERE
where the degeneracy factors are
# INSERT LATEX HERE
and
# INSERT LATEX HERE
The band parameters are calculated with aid of the following band diagram, all the
energies (potentials) are calculated with respect to a reference material. All the
potentials used in Sundial are referenced to the intrinsic Fermi-level in the reference
material (zero volts) and the reference potential is simply the energy difference
(expressed in volts) between this reference potential to the vacuum level in the
reference material:
# INSERT LATEX HERE

![alt text](image-27.png)

**One-dimensional representation of the energy-band diagram**
The band parameter for electrons calculated as the difference between the conduction
band energy and the conduction-band energy in the reference material, due to changes
in band structure (not due to changes in electrostatic field), a similar calculation exists
for the valence band parameter. This leads to the following expressions:
# INSERT LATEX HERE
where the effective valence and conduction band density of states are given by:
# INSERT LATEX HERE
and the intrinsic carrier concentration is given by:
# INSERT LATEX HERE

**1.2 Band gap narrowing**  
Band gap narrowing occurs in heavily doped regions of the semiconductor, where the
impurity bands merge into either the conduction band or valence band - effectively
reducing the band-gap. This is accounted for using the following empirical models:
Slotboom's Model
# INSERT LATEX HERE
Gaur's Model
# INSERT LATEX HERE
The band-gap reduction is attributed 50% to the conduction band and 50% to the
valence band, via the band parameters.

**1.3 Mobility models**  
The mobility is arrived at via a combination of different physical effects, to reflect the
way that different scattering mechanisms cause the carrier mobilities to change.
Basically the mobility selection process is split into two parts :
- Low field mobility
- High field mobility

with the resulting low-field mobility being used as an input to the high field mobility.

**1.3.1 Low-field Mobility**  
The low-field mobility can be selected from a number of alternatives as listed below,
these are :

**1.3.1.1 Constant mobility**  
This is the simplest form of mobility and just sets the low-field mobility for each
semiconductor material type to be constant.
# INSERT LATEX HERE
which are settable for each material in the material properties box.

**1.3.1.2 Lattice mobility**   
The lattice mobility uses an empirical model to take into account the scattering that
occurs between the lattice and the carriers contained in it. This is simply a function of
lattice temperature ( T o C), increased temperature leads to a reduction in carrier
mobility :
# INSERT LATEX HERE
**1.3.1.3. Impurity mobility**  
The impurity mobility implies that the lattice mobility is also used, to define the
maximum mobility, and is due to collisions with impurity atoms, again, naturally the
higher the doping the more likely a collision is resulting in a reduced mobility.
# INSERT LATEX HERE
**1.3.1.4. Carrier-carrier scattering mobility**  
This is similar to the model above, except it attempts to model in influence of carriers
scattering from one another under levels of high injection. Thus the mobility is modified
so as to depend on total carrier concentration. Again this model implies that the lattice
mobility is used to define the maximum mobility:

# INSERT LATEX HERE
**2.3.1.5. Surface mobility reduction**  
In addition to the bulk mobility models described above, the interface between oxide
and semiconductor will cause a reduction in the mobility along the interface due to
surface roughness and usually depends on the perpendicular electric field. This mobility
is only applied to those edges of elements that lie along the oxide/semiconductor
interface. This is applied to the edge after all the other mechanisms (1-4) described
above have been calculated.
# INSERT LATEX HERE
# INSERT LATEX IN BELOW SENTENCE   
E perp is the electric field perpendicular to the edge along the interface.

**1.3.2 High-field Mobility**  
The high-field mobility reduction describes the effect of velocity saturation at high fields.
In Sundial this is applied after the low-field mobility has been calculated, thus implies
the resultant value of low field mobility described above. The field dependency is
implemented using the following expression for the saturation velocity:
# INSERT LATEX HERE
and the mobility as:
# INSERT LATEX HERE
here the magnitude of the electric field which can be calculated in different ways, either
by using a method based on the electric field itself or on the electric field in the direction
of current flow (), either of which may be based on the element edge or the full
element.  

**1.4 Recombination models**  
The recombination models are independent of each other in their formulation obviously
there will be some interplay between the different mechanisms and this is taken care of
by the solver.

**1.4.1 Shockley-Reed-Hall recombination process**  
This describes the process of trap-assisted recombination in the bulk of the
semiconductor. The model provides for doping dependence of the minority carrier
lifetime. The position of the trap in the band-gap is also adjustable.
# INSERT LATEX HERE
Where the doping dependent lifetimes are defined by:
# INSERT LATEX HERE
The default values are such that the lifetime is constant and equal to the values set in
**SRH_TAU_P** and **SRH_TAU_N.**
Additionally the lifetime can be made position dependent by defining a rectangular
region and an multiplication factor inside that box. This is done using a rectangular SRH
Window to define a box in which the values of **SRH_TAU_P** and **SRH_TAU_N** in the
bulk of the device can be increased by a scaling factor.

**1.4.2 Auger recombination process**  
The Auger mechanism becomes the dominant recombination method under levels of
high bipolar injection. It is modelled using:
# INSERT LATEX HERE
**1.4.3 Direct recombination process**  
The Direct recombination mechanism models direct band-to-band recombination
# INSERT LATEX HERE
**1.4.4 Avalanche generation process**  
Avalanche generation is modelled using the following empirical law:
# INSERT LATEX HERE
where the avalanche coefficients are determined using the following:
# INSERT LATEX HERE
# INSERT LATEX HERE
# INSERT LATEX HERE
**1.4.5 Total recombination rate**  
The total recombination rate is found by summing up all the different mechanisms:
# INSERT LATEX HERE

<div style="page-break-after: always"></div>

# 7 License Agreement

**IMPORTANT! Do not install this SOFTWARE before you have read this license
agreement. By proceeding to install this SOFTWARE you are indicating your
acceptance of all the terms and conditions stated in this agreement.**

This is a legal agreement between you (either as an individual or a single entity)
and KuasaSemi Limited for this software product which includes computer software and may
include associated media, printed materials, and "online" or electronic documentation
(the "SOFTWARE"). By installing, copying or otherwise using this SOFTWARE you are
agreeing to be bound by the terms of this agreement. If you do not agree to the terms
of this Agreement, do not install or use the SOFTWARE and if it is a non-evaluation
version, return it together with physical materials and media to the place you obtained
them for a full refund.

1. **GRANT OF LICENSE**. 
This agreement grants you the following rights:

*EVALUATION LICENSE.* You may install and use an unlimited number of copies of the  
*SOFTWARE* on an unlimited number of machines.  
*SINGLE USER LICENSE*. You may install and use one copy of the SOFTWARE on a single  
computer. The primary user of the computer on which the SOFTWARE is installed may
make a second copy for his or her exclusive use on a portable computer.  
*MULTI USER LICENSE*. You may use as many copies of the SOFTWARE as your multi
user license entitles you to, in the manner specified above. You are also entitled to
make a corresponding number of secondary copies for portable computer use as
specified above.

2. **COPYRIGHT**. The SOFTWARE is owned by KuasaSemi Limited and is protected by
copyright laws and international treaty provisions, as well as other intellectual property
laws and treaties. The SOFTWARE is licensed, not sold. You must therefore treat the
SOFTWARE like any other copyrighted material.  

3. **TERM OF LICENSE**. The license will continue until you physically destroy all copies of
the SOFTWARE and merged portions thereof, and return any original program media
and documentation to KuasaSemi Limited.

4. **OTHER RESTRICTIONS**.
*TRANSFER*. You may not rent or lease the SOFTWARE, but you may transfer the
SOFTWARE and accompanying written materials on a permanent basis provided you
retain no copies and the recipient agrees to the terms of this Agreement. If the
SOFTWARE is an update, any transfer must include the update and all prior versions.  
*REVERSE ENGINEERING*. You may not reverse engineer, decompile, or disassemble the
SOFTWARE.  
*SEPARATION OF COMPONENTS*. The SOFTWARE is licensed as a single product. Its
component parts may not be separated for use on more than one computer, or accessed
in any way other than through the provided user interface.  
*TERMINATION.* Without prejudice to any other rights, KuasaSemi may terminate this
agreement if you fail to comply with the terms and conditions of this agreement. In such
event, you must destroy all copies of the SOFTWARE and all of its component parts.
5. **ENHANCEMENTS AND UPDATES**. From time to time, at its sole discretion, KuasaSemi
Limited may provide enhancements, updates, or new versions of the SOFTWARE on its
then standard terms and conditions thereof. This Agreement shall apply to such
enhancements.
6. **DISTRIBUTION**. Distribution by the user of any designers, components or other
component parts (EXE's, DLL's, OCX's), executables, source code, or on-line help files
distributed by KuasaSemi Limited as part of this product is prohibited. You shall not develop
applications that provide an application programmable interface to the SOFTWARE or the
SOFTWARE as modified. Redistribution by you or your users of KuasaSemi Limited's
components, or your modified or wrapped version of KuasaSemi components without the
appropriate redistribution license from KuasaSemi Limited is prohibited.

**LIMITED WARRANTY**
You assume all responsibility for the selection of the SOFTWARE as appropriate to
achieve the results you intend and for the installation of, use of, and results obtained
from the SOFTWARE. KuasaSemi warrants that the media on which you obtained SOFTWARE
shall be free of manufacturing defects for a period of (60) sixty days from date of
purchase. Except for the limited warranty set forth herein, the SOFTWARE is provided
"as is." to the maximum extent permitted by applicable law, KuasaSemi disclaims all
warranties, either express or implied, including but not limited to implied warranties of
merchantability, fitness for a particular purpose, and noninfringement with respect to
the SOFTWARE and the accompanying documentation. without limiting the foregoing
provisions, ESEMI makes no warranty that the SOFTWARE will be error-free or free from
interruptions or other failures or that the SOFTWARE will meet your requirements. Some
states and jurisdictions do not allow limitations on implied warranties, so the above
limitation may not apply to you. The foregoing provisions shall be enforceable to the
maximum extent permitted by applicable law.

**CUSTOMER REMEDIES**. KuasaSemi Limited and its suppliers' entire liability and your
exclusive remedy shall be, at KuasaSemi Limited's option, either (a) return of the price paid
or (b) repair or replacement of the SOFTWARE that does not meet KuasaSemi Limited's
Limited Warranty and which is returned to KuasaSemi Limited with a copy of your receipt or
proof of purchase. This Limited Warranty is void if failure of the SOFTWARE has resulted
from accident, abuse, or misapplication. Any replacement SOFTWARE will be warranted
for the remainder of the original warranty period or thirty (30) days, whichever is
longer.

**NO LIABILITY FOR CONSEQUENTIAL DAMAGES**. In no event shall KuasaSemi Limited or
its suppliers be liable for any damages whatsoever (including, without limitation,
damages for loss of business profits, business interruption, loss of business information,
or other pecuniary loss) arising out of use of or inability to use this KuasaSemi Limited
product, even if KuasaSemi Limited or its dealer have been advised of the possibility of such
damages. Some countries do not allow the exclusion or limitation of certain implied
warranties or the limitation of the foregoing warranty or the exclusion or limitation of
incidental or consequential damages, in which case and to the extent such exclusion or
limitation is not allowed some of the foregoing limitations and exclusions may not apply
to you.

**HIGH RISK ACTIVITIES**. The SOFTWARE is not fault-tolerant and is not designed or
intended for use in hazardous environments requiring fail-safe performance, including
without limitation, in the operation of nuclear facilities, aircraft navigation or
communication systems, air traffic control, weapons systems, direct life-support
machines, or any other application in which the failure of the SOFTWARE could lead directly to death, personal injury, or severe physical or property damage (collectively,
"High Risk Activities"). KuasaSemi expressly disclaims any express or implied warranty of
fitness for High Risk Activities.

**GENERAL PROVISION.** You shall have no right to sub-license any of the rights of this
agreement, for any reason. In the event of the breach by you of this Agreement, you
shall be liable for all damages to KuasaSemi Limited, and this Agreement shall be
terminated. If any provision of this Agreement shall be deemed to be invalid, illegal, or
unenforceable, the validity, legality, and enforceability of the remaining portions of this
Agreement shall not be affected or impaired thereby. In the event of a legal proceeding
arising out of this Agreement, the prevailing party shall be awarded all legal costs
incurred.
This Agreement constitutes the entire agreement between the parties for the supply of
the SOFTWARE and its associated documentation and supersedes all prior
arrangements, agreements, representations, and undertakings. This Agreement may not
be changed or modified except by a written instrument duly executed by each of the
parties hereto.

**MISCELLANEOUS**
This Agreement shall be governed by and construed in accordance
with the laws of the United Kingdom, without reference to conflict of laws principles. If
any provision of this Agreement is held invalid, the remainder of this Agreement shall
continue in full force and effect.
You shall be responsible for the payment of all taxes, duties, or levies that may now or
hereafter be imposed by any authority upon this Agreement for the supply, use, or
maintenance of the SOFTWARE, and if any of the foregoing taxes, duties, or levies are
paid at any time by ESEMI Limited, you shall reimburse KuasaSemi Limited in full upon
demand.

**ACKNOWLEDGEMENTS**. You acknowledge that you have read this Agreement,
understand it, and agree to be bound by its terms and conditions.

<div style="page-break-after: always"></div>

# 8 Ordering
Aquarius can be purchased direct from KuasaSemi, or from authorised representatives in
Europe, the United States and Asia. For further information, go to the sales pages on
the KuasaSemi web site: (http://www.kuasasemi.com/)