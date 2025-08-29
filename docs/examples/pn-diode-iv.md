---
sidebar_position: 2
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# PN Diode

## 1. Overview
In this worked example, a simple symmetrical PN junction diode is modelled and analysed to illustrate the fundamental workflow of diode simulation in a semiconductor device environment. The device structure consists of a uniformly doped silicon p-region and n-region, each with equal doping concentrations. The device cross-sectional area and region lengths are specified, and ideal ohmic contacts are applied at the anode and cathode.

An analytical current–voltage (I–V) characteristic is derived using the Shockley diode equation, which requires evaluation of the reverse saturation current $Is$ from fundamental semiconductor transport relations. This involves calculating minority carrier diffusion coefficients and diffusion lengths based on carrier mobility and lifetime, together with the intrinsic carrier concentration of silicon.

The analytical model provides a baseline for expected diode behaviour, including exponential forward conduction and saturation in reverse bias. This worked example demonstrates both the physics behind diode operation and the practical steps required to set up and validate a PN diode simulation in the Aquarius TCAD environment, serving as a foundation for more advanced semiconductor devices.

## 2. Parameters

<p align="center">
  <img src={useBaseUrl('img/examples/pn-diode/01.png')} style={{maxWidth: "200px", height: "auto"}}/>
</p>

**More parameters need be added here...**


| Parameter                          | Symbol       | Value               | Unit       | Description                                                       |
|------------------------------------|--------------|---------------------|------------|-------------------------------------------------------------------|
| Length                             | $L1$         | $1 \times 10^{-4}$  | cm         | P region length.                                                  |
| Length                             | $L2$         | $1 \times 10^{-4}$  | cm         | N region length.                                                  |
| Width                              | $W$          | $2 \times 10^{-5}$  | cm         | Depth of the device.                                              |
| Depth                              | $D$          | $1 \times 10^{-4}$  | cm         | Z dimension thickness of the device.                              |
| Acceptor Doping                    | $N_A$        | $1 \times 10^{-16}$ | cm$^{-3}$  | P region acceptor concentration.                                  |
| Donor Doping                       | $N_D$        | $1 \times 10^{-16}$ | cm$^{-3}$  | N region donor concentration.                                     |
| Temperature                        | $T$          | $300$               | K          | Temperature of the diode.                                         |
| Electron Minority Carrier Lifetime | $tau_n$      | $1 \times 10^{-5}$  | s          | Mean time electron travels in P region until rejoining with hole. |
| Hole Minority Carrier Lifetime     | $tau_p$      | $1 \times 10^{-5}$  | s          | Mean time hole travels in N region until rejoining with electron. |
| Electron Mobility                  | $mu_n$       | 1000                | cm$^{2}$/Vs| How easily Electrons move due to an electric field.               |
| Hole Mobility                      | $mu_p$       | 450                 | cm$^{2}$/Vs| How easily holes move due to an electric field.                   |


## 3. Analytical Model
### 3.1. Ideal Diode Equation

For an ideal diode, the current–voltage relation is given by:  

$$
I = I_s \left( e^{\tfrac{qV}{kT}} - 1 \right)
$$

Where: 
- $I$ = Diode current (A)  
- $I_s$ = Reverse saturation current (A)  
- $V$ = Applied bias voltage (V)  
- $q$ = Elementary charge (C)
- $k$ = Boltzmann constant
- $T$ = Absolute temperature (K)

---

In forward bias ($V>0$), the current rises exponentially with voltage. In reverse bias ($V<0$), the current saturates at $I_s$. Because no resistance is included, the exponential law holds across the full bias range without deviation.

### 3.2. Reverse Saturation Current

The reverse saturation current arises from minority carrier diffusion across the junction and is given by:  

- Using the above parameters, the saturation current was calculated to approximately be:

$$
I_s = q A \left( \frac{D_p n_i^2}{L_p N_D} + \frac{D_n n_i^2}{L_n N_A} \right) = 7.752 \times 10^{-19} A
$$

Where:
- $q$ = Elementary charge (C)
- $A$ = Cross-sectional area (cm²)
- $D_p$ = Hole diffusion coefficient (cm²/s)
- $D_n$ = Electron diffusion coefficient (cm²/s)
- $L_p$ = Hole diffusion length (cm²/s)
- $L_n$ = Electron diffusion length (cm²/s)
- $N_A$ = Acceptor concentration (cm⁻³)
- $N_D$ = Donor concentration (cm⁻³)
- $n_i$ = Intrinsic carrier concentration (cm⁻³)
- $T$   = Absolute temperature (K)

---

$D_p$ and $D_n$ are related to carrier mobilities:  

$$
D = \mu \frac{kT}{q} 

D_p = 11.633399903895992
D_n = 25.851999786435535

$$


$L = \sqrt{D \tau}$, where $\tau$ is the minority carrier lifetime.

$L_p$ = 0.00010785823985164969
$L_n$ = 0.00016078557082784367

The values for $D_p$, $D_n$, $tau_p$ and $tau_n$ were substituted into the saturation current equation to calculate the given value.

---

A simple analytical model for the ideal PN diode was implemented in Python using the above equations. The resulting current–voltage characteristic is shown below. In later sections, this analytical result will be compared with TCAD simulation output to verify consistency between the theoretical model and device-level simulation.

<p align="center">
  <img src={useBaseUrl('img/examples/pn-diode/03-shockley-python-plot.png')}/>
</p>

## 4. Simulation using Aquarius

### 4.1. Creating the Device Model

To create a resistor device model in Aquarius, follow the steps below.

#### 4.1.1 Launch Editor

- Launch the device editor as explained in the Resistor example.

#### 4.1.2 Define Device Geometry 

- Directly below the menu bar, left-click the square 


<p align="center">
  <img src={useBaseUrl('img/examples/pn-diode/p-region/01.png')} />
</p>

- Position the cursor on the canvas to draw a rectangular shape:
	
	- Left-click to start drawing.
	
	- Left-click again to finish the shape.



<p align="center">
  <img src={useBaseUrl('img/examples/pn-diode/p-region/02.png')}/>
</p>


- After drawing the rectangle, the **Exact Coordinates** dialog will open automatically:

	-	Set the First Vertex to `(-0.1, 0)`.

	-	Set the Second Vertex to `(0.1, 1)`.

	-	Click `OK` to confirm.


<p align="center">
  <img src={useBaseUrl('img/examples/pn-diode/p-region/03.png')}/>
</p>


- The **Region Properties** dialog will then open:

	
	-	Set the Region Material to `Si` (silicon).

	-	Set the Acceptor Doping to `1E+16` 

	-	Click `OK` to confirm.


<p align="center">
  <img src={useBaseUrl('img/examples/pn-diode/p-region/04.png')}/>
</p>

- Repeat process again but changing the colour of the region and this time with the following parameters:

	-	Set the First Vertex to `(-0.1, 0.1)`.

	-	Set the Second Vertex to `(1, 2)`.

	-	Set Donner concentration to `1E+16`.

	-	Select a colour of choice for the N region. It is better to have it set as a different region to the P region for differentiability.

 
			-	Note: the two regions should be neatly on top of each other.

<p align="center">
  <img src={useBaseUrl('img/examples/pn-diode/n-region/07.png')}/>
</p>


#### 4.1.3 Define Device Contacts


- As it was done in the Resistor example, define the contacts on either end of the diode, keeping the same labels the same as in the resistor example.


<p align="center">
  <img src={useBaseUrl('img/examples/pn-diode/def-contacts/05-image-of-contacts2.png')}/>
</p>


#### 4.1.4 Defining Mesh Construction Lines

As it was done in the simple resistor example, an initial grid is defined. Here the mesh will be slightly different as we are simulating a PN diode which is slightly more complex than a resistor. In this example of a PN diode, It is necessary to have a horizontal mesh should be graded in such a way that the spacing between the lines increases towards the depletion region at the centre of the diode. This is because the centre of the diode is a point of interest.

- In the Menu Bar select `Mesh` → `Define Mesh Construction Grid`. The **Mesh Construction Grid** window will open.
- In the **Mesh Construction Grid** window click `Add`.
- The **Mesh Grid Lines** window will open. Set the below properties:

 	- Set the **Orientation** to `Horizontal`.

	- Set the **Interval** to `Graded`.

	- Set the **Coordinates** of the box that will contain the mesh line to:

		- `X1 = -0.1`

		- `X2 = 0.1`

		- `Y1 = 1`

		- `Y2 = 0`

		- Under **Spacing Between Lines**, set the `top` to `0.005` microns and the `bottom` to `0.05`

	- Click `OK`

- Repeat the above steps setting **Coordinates** of the box that will contain the mesh line to:

		-	`X1 = -0.1`

		-	`X2 = 0.1`

		-	`Y1 = 2`

		-	`Y2 = 1`

		- Then set the **Spacing Between Lines** #top# to #0.05# microns and #bottom# to #0.005#
		- Click `OK`

<p align="center">
  <img src={useBaseUrl('img/examples/pn-diode/def-mesh/06-all-grid-spacing-values.png')}/>
</p>


#### 4.1.6 Defining Variables


Considering the equations shown in the parameters section, variables need to be set to agree with tis example. The **minority lifetime** and the **carrier mobility** need to be set here for the electrons and holes.

-	If the Finite element mesh is still active, go to the toolbar at the top of the window, select `Mesh` → `Exit Mesh`
 
-	In the menu bar, select `Model` → `Material Library`. The **Material Library** window will open.


<p align="center">
  <img src={useBaseUrl('img/examples/pn-diode/set-mu-tau/01-material-library.png')}/>
</p>


- Select the material you wish to use, here select `Si` (silicon). On the right-hand side of the **Material Library** window, select `Edit Material`, the **Si Material Properties** window will open. 

<p align="center">
  <img src={useBaseUrl('img/examples/pn-diode/set-mu-tau/02-select-material.png')}/>
</p>

First, we will change the value for **carrier mobility**:

- Go to the toolbar of the Si Material Properties window and select `Mobility`.

- Find the variable names **Mu_0_p** and set it to `450` cm2/Vs. This will change the charge mobility for the holes.

- Repeat the same process for **Mu_0_n** but set the value to `1000` cm2/Vs. This will change the charge mobility for the electrons.

<p align="center">
  <img src={useBaseUrl('img/examples/pn-diode/set-mu-tau/03--mu-n--mu-p--values--set.png')}/>
</p>


Now we will change the values for the minority lifetime:

- Go to the toolbar of the **Si Material Properties** window and select `Recombination`.

- Under the **Shockley Read Hall (SRH) and Traps** section, find the **SRH_TAU_p** variable, second to top, and change the value to `1E-5` seconds. This will change the minority carrier lifetime for the holes.

- Repeat the same process for **SRH_TAU_n** using the same value. This will change the minority carrier lifetime for the electrons.

- Press `OK`

- As it was done in the **Resistor Example**, save the device and specify the filename (e.g pn_junction_diode.sdm).

### 4.2	Steady State Simulation:

We will now use the diode in a simple steady state example as was done for the Resistor example with a few changes.

#### 4.2.1 Adding Circuit Components:

•	Follow the same steps as in section 4.2.1 in the Resistor example for the device created in this example.

<p align="center">
  <img src={useBaseUrl('img/examples/pn-diode/circuit-simulation/03-select-sdm-file.png')}/>
</p>


- Set the voltage range for the diode to: 

	- `Start Voltage (V) = 0`
	- `End Voltage (V) = 1`
	- `Step (V) = 0.002`

<p align="center">
  <img src={useBaseUrl('img/examples/pn-diode/circuit-simulation/05-set-voltage-range.png')}/>
</p>

- The simulated circuit should look similar to the one In the **Resistor 
Example**:


<p align="center">
  <img src={useBaseUrl('img/examples/pn-diode/circuit-simulation/04-circuit.png')}/>
</p>

- Next run the simulation as in section 4.2.2 of the Resistor, the simulation may take slightly longer since there are more voltage steps.

- If you want to export the data, when the **Simulation Status** window opens, click `Export Log`. The data will be saved as a .txt file.


### 4.3 Simulation Results 

- Repeat steps in section 4.3 in the resistor accept using the diode that has just been made.

- The IV graph produced in the **Results Visualiser** will look different than the one produced from the resistor. It will not be linear.

- For this graph, it is often useful to log scale the graph. This can be done by ticking the box labelled `Log Scaling`.


<p align="center">
  <img src={useBaseUrl('img/examples/pn-diode/plot-generation/02-IV-Graph.png')}/>
</p>


#### 4.3.1 Analysing Results

## 5 Conclusion


This example displays how a PN junction diode that is uniformly doped in the P and N region respectively can be modelled and simulated in the Aquarius TCAD environment. The current-voltage graph can be verified from the analytical model bellow:

<p align="center">
  <img src={useBaseUrl('img/examples/pn-diode/02-python-plot3.png')}/>
</p>


- Note: the graphs were implemented using a logarithmic scale.

As we can see, **Aquarius Simulation Result** deviates off from agreeing with the **Ideal Diode Equation**. This deviation is a result of the fact that the Aquarius model considers the series resistance across the diode. This means the resistance across the P region, N region and the depletion region between those two regions is considered in the Aquarius simulation. Using Ohm’s law, as seen in the Resistor example, we see that the higher the voltage, the higher the resistance. This resistance increase causes the drop gradient of the IV graph since the gradient is the reciprocal of the resistance. 



**Reference for us: the offset before the point of crossover between the ideal diode equation and Aquarius simulation in the graph needs to be looked into**




























