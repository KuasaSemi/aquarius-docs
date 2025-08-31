---
sidebar_position: 2
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# PN Junction

## 1. Overview
In this worked example, a simple symmetrical PN junction diode is modelled and analysed to illustrate the fundamental workflow of diode simulation in a semiconductor device environment. The device structure consists of a uniformly doped silicon p-region and n-region, each with equal doping concentrations. The device cross-sectional area and region lengths are specified, and ideal ohmic contacts are applied at the anode and cathode.

An analytical current–voltage (I–V) characteristic is derived using the Shockley diode equation, which requires evaluation of the reverse saturation current $Is$ from fundamental semiconductor transport relations. This involves calculating minority carrier diffusion coefficients and diffusion lengths based on carrier mobility and lifetime, together with the intrinsic carrier concentration of silicon.

The analytical model provides a baseline for expected diode behaviour, including exponential forward conduction and saturation in reverse bias. This worked example demonstrates both the physics behind diode operation and the practical steps required to set up and validate a PN diode simulation in the Aquarius TCAD environment, serving as a foundation for more advanced semiconductor devices.

## 2. Parameters

<p align="center">
  <img src={useBaseUrl('img/examples/pn-diode/01.png')} style={{maxWidth: "200px", height: "auto"}}/>
</p>


##### Geometry

<div className="spec-table">
| Parameter                          | Symbol       | Value               | Unit       | Description                                                       |
|------------------------------------|--------------|---------------------|------------|-------------------------------------------------------------------|
| Length                             | $L1$         | $1 \times 10^{-4}$  | cm         | P region length.                                                  |
| Length                             | $L2$         | $1 \times 10^{-4}$  | cm         | N region length.                                                  |
| Width                              | $W$          | $2 \times 10^{-5}$  | cm         | Depth of the device.                                              |
| Depth                              | $D$          | $1 \times 10^{-4}$  | cm         | Z dimension thickness of the device.                              |
</div>

##### Device
<div className="spec-table">

| Parameter       | Symbol | Value              | Unit     | Description                          |
|-----------------|--------|--------------------|----------|--------------------------------------|
| Acceptor Doping | $N_A$  | $1 \times 10^{-16}$| cm$^{-3}$| Acceptor concentration in the P region. |
| Donor Doping    | $N_D$  | $1 \times 10^{-16}$| cm$^{-3}$| Donor concentration in the N region.    |
| Temperature     | $T$    | $300$                | K        | Operating temperature of the device.    |

</div>


##### Material
<div className="spec-table">
| Parameter                             | Symbol   | Value              | Unit       | Description                                                                 |
|---------------------------------------|----------|--------------------|------------|-----------------------------------------------------------------------------|
| Electron Mobility                     | $\mu_n$  | 1000               | cm$^{2}$/Vs| Average drift velocity of electrons per unit electric field.                 |
| Hole Mobility                         | $\mu_p$  | 450                | cm$^{2}$/Vs| Average drift velocity of holes per unit electric field.                     |
| Minority Carrier Lifetime (Electrons) | $\tau_n$ | $1 \times 10^{-5}$ | s          | Average time an excess electron exists in the P region before recombination.|
| Minority Carrier Lifetime (Holes)     | $\tau_p$ | $1 \times 10^{-5}$ | s          | Average time an excess hole exists in the N region before recombination.    |
</div>

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
I_s = q A \left( \frac{D_p n_i^2}{L_p N_D} + \frac{D_n n_i^2}{L_n N_A} \right)
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

The diffusion coefficients are related to carrier mobilities by the Einstein relation:

$$
D = \mu \frac{kT}{q} 
$$

---

The diffusion lengths are given by:

$$
L = \sqrt{D \tau}
$$ 

Where:
- $\tau$ = The minority carrier lifetime (units)

---

The analytical model of the ideal diode was used to generate the corresponding I–V characteristic, shown below. In subsequent sections, these analytical results will be compared with TCAD simulation data to assess the consistency between the theoretical model and the device-level simulations.

<p align="center">
  <img src={useBaseUrl('img/examples/pn-diode/03-shockley-python-plot.png')}/>
</p>

## 4. Simulation using Aquarius

### 4.1. Creating the Device Model

To create the device model in Aquarius, follow the steps below.

#### 4.1.1. Launch the Device Editor

- Open the Aquarius application.
- On the Start Page, three options are available:
    - New Device Model
    - New Simulation
    - Open Results Visualiser
- Click `New Device Model` (the first option).
- The **Device Editor** will open with an empty workspace.

#### 4.1.2 Device Geometry 

- In the Menu Bar, select `Define` → `Region` → `Rectangle`.

<p align="center">
  <img src={useBaseUrl('img/examples/resistor/03.png')} />
</p>

- Position the cursor on the canvas to draw a rectangular shape:

- Left-click to start drawing.
- Left-click again to finish the shape.

<p align="center">
  <img src={useBaseUrl('img/examples/pn-diode/p-region/02.png')}/>
</p>


- After drawing the rectangle, the **Exact Coordinates** dialog will open automatically:
  - Set the First Vertex to `(-0.1, 0)`.
  - Set the Second Vertex to `(0.1, 1)`.
  - Click `OK` to confirm.

<p align="center">
  <img src={useBaseUrl('img/examples/pn-diode/p-region/03.png')}/>
</p>

- The **Region Properties** dialog will then open:
  - Set the Region Material to `Si` (silicon).
  - Set the Acceptor Doping to `1E+16` 
  - Click `OK` to confirm.

<p align="center">
  <img src={useBaseUrl('img/examples/pn-diode/p-region/04.png')}/>
</p>

- Repeat the steps above, this time with the following parameters:
  - Set the First Vertex to `(-0.1, 0.1)`.
  - Set the Second Vertex to `(1, 2)`.
  - Set Donor concentration to `1E+16`.

<p align="center">
  <img src={useBaseUrl('img/examples/pn-diode/n-region/07.png')}/>
</p>

#### 4.1.3. Device Contacts

With the device geometry and material properties defined, the next step is to **specify electrical contacts** to allow the device to be connected to a circuit for simulation. In this example, the top and bottom edges of the region will be used to define contacts `A` and `B`, respectively, with the default contact parameters applied.

<p align="center">
  <img src={useBaseUrl('img/examples/resistor/07.png')} />
</p>

Define two contacts, `Anode` on the top of the device and `Cathode` on the bottom as can been seen in the image above. 

- Define the **Anode** contact:
  1. From the menu, select `Define` → `Contact`.
  2. Move the cursor over the left geometric edge. When the edge highlights in green and the cursor changes to indicate a selectable element, `Left-click` to select it.
  3. `Right-click` anywhere to open the Contact Properties dialog. Use this dialog to set the contact's properties.
  4. In the General section, set `Name` to **A**, leave all other properties at their default values.
  5. Click `OK`.

- Define the **Cathode** contact, repeat steps 1–5 above, but instead:
  1. Select the bottom geometric edge.
  1. In the Contact Properties window, set `Name` to **B** and `Colour` to **green**.
  1. Click `OK`.

:::tip
For more detailed instructions on defining contacts, click [here](../device-editor/contacts#usage-instructions).
:::

#### 4.1.4. Material Parameters

Next the minority carrier lifetime and the carrier mobility must be defined for both electrons and holes.
- Open the Material Library
- From the menu bar, select `Model` → `Material Library`.
- The Material Library window will open.
- Select the material to edit (here: `Si` for silicon).
- On the right-hand side, click Edit `Material`.
- The Silicon Material Properties window will open.

##### 4.1.4.1. Mobility
- Select the Mobility tab.
  - Locate `Mu_0_p` (hole mobility) and its value to **495**.
  - Locate `Mu_0_n` (electron mobility) and set its value to **1360**.

##### 4.1.4.2. Recombination
- Select the Recombination tab, under the Shockley–Read–Hall (SRH) and Traps section:
  - Locate `SRH_TAU_p` (hole lifetime) and set it to **1E-5**.
  - Locate `SRH_TAU_n` (electron lifetime) and set it to the same value **1E-5**.

#### 4.1.5. Finite Element Mesh

##### 4.1.5.1. Mesh Construction Lines
An initial grid is defined by specifying a set of vertical and horizontal lines. Anywhere these lines intersect with each other or with a region boundary, a point is inserted into the mesh. For this PN diode, the horizontal mesh should be graded so that the line spacing increases toward the depletion region at the center of the diode. This ensures higher mesh resolution at the junction, which is the main point of interest.

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
  - Set the **Spacing Between Lines** to be `0.005` microns at the Top and `0.05` microns at the Bottom.
- Click `OK`

- Repeat the above steps setting **Coordinates** of the box that will contain the mesh line to:
  - `X1 = -0.1`
  - `X2 = 0.1`
  - `Y1 = 2`
  - `Y2 = 1`
  - Set the **Spacing Between Lines** to be `0.05` microns at the Top and `0.005` microns at the Bottom.
- Click `OK`

<p align="center">
  <img src={useBaseUrl('img/examples/pn-diode/def-mesh/06-all-grid-spacing-values.png')}/>
</p>

##### 4.1.5.2. Generating the Finite Element Mesh
- In the Menu Bar, select `Mesh` → `Generate Finite Element Mesh Model`. The **Mesh Properties** window will open.
- No refinement is required for this model, so click `OK` to generate the mesh with default settings.

<p align="center">
  <img src={useBaseUrl('img/examples/resistor/10.png')} />
</p>

:::tip
For more detailed instructions on **generating the finite element mesh**, click [here](../device-editor/finite-element-mesh/mesh-generation.md#usage-instructions).
:::

#### 4.1.6. Save the Device Model

- In the Menu Bar, select `File` → `Save As...`. The Save dialog will open.
- Navigate to the folder you wish to save the device in.
- Specify the filename (e.g. *pn_diode.sdm*).
- Click `Save` to store the device model.

<p align="center">
  <img src={useBaseUrl('img/examples/resistor/11.png')} />
</p>


### 4.2. Steady State Simulation

Next the resistor will be used in a simple steady state example.

- On the **Start Page** Click **New Simulation** (the second option).
- The **Circuit Editor** will open with an empty workspace.

<p align="center">
  <img src={useBaseUrl('img/examples/resistor/12.png')} />
</p>

#### 4.2.1. Simulation Setup

A circuit must be designed before simulation can begin. A device (the diode), a DC Voltage Source and a Ground will be added to the circuit editor and connected together.

##### 4.2.1.1. Add the Device

- Select the **Device**<img src={useBaseUrl('img/icons/device.png')} width="30" alt="Device Icon" style={{ verticalAlign: 'middle', marginLeft: '4px' }} /> from the tool bar and drag and drop it onto the circuit editor.
- Set the device Properties:
  - Click `Get .sdm File`, select the device file that you created in the previous steps and click `OK`.
  -  Ensure **Scaling Factor (cm)** is set to `0.0001`. Which sets the device depth to 1$\mu$m depth.
  - Click `OK` to close the Device Properties.

:::note
**Note:** The device can be rotated by `Left-clicking` on it to select it and then using `CTRL + R` to rotate it by $90^\circ$.
:::

<p align="center">
  <img src={useBaseUrl('img/examples/resistor/13.png')} />
</p>

:::tip
For more detailed instructions on **Adding Components**, click [here](../circuit-simulator/basics/adding-components.md).
:::

##### 4.2.1.2. Add a Source and Ground

- Select the **DC Voltage Source**<img src={useBaseUrl('img/icons/dcVoltageSource.png')} width="20" alt="DC Voltage Source Icon" style={{ verticalAlign: 'middle', marginLeft: '4px' }} /> from the tool bar by `Dragging and Dropping` it onto the circuit editor.
- Select the **Ground**<img src={useBaseUrl('img/icons/ground.png')} width="20" alt="Ground Icon" style={{ verticalAlign: 'middle', marginLeft: '4px' }} /> from the tool bar by `Dragging and Dropping` it onto the circuit editor.
- Connect the components together as they are in the image below.

<p align="center">
  <img src={useBaseUrl('img/examples/resistor/14.png')} />
</p>

:::tip
For more detailed instructions on **Wiring Circuits**, click [here](../circuit-simulator/basics/wiring-circuits.md).
:::

##### 4.2.1.3. Set Source Properties
- `Double-click` on the **DC Voltage Source** to open its properties.
- Click `Add Range` to open the **Add Range Properties** and set to the values below:
  - `Start Voltage (V) = 0`
  - `End Voltage (V) = 0.8`
  - `Step (V) = 0.01`
  - Click `OK` to set the range.
- Click `OK` to set the DC Voltage Source Properties.

<p align="center">
  <img src={useBaseUrl('img/examples/resistor/15.png')} />
</p>

:::tip
For more detailed instructions on **Steady State (DC) Sources**, click [here](../circuit-simulator/sources/steady-state.md).
:::

##### 4.2.1.4. Save the Solution File
Save the simulation at this point. 
- In the Menu Bar, select `File` → `Save As...`. The Save dialog will open.
- Navigate to the folder you wish to save the solution file.
- Specify the filename (e.g. *pn_diode_iv.sol*).
- Click `Save` to store the solution file.

#### 4.2.2 Run Simulation

To run the Steady State Simulation press the blue run button<img src={useBaseUrl('img/icons/steadyStateSimulation.png')} width="20" alt="DC Voltage Source Icon" style={{ verticalAlign: 'middle', marginLeft: '4px' }} />, alternatively in the menu use `Simulation` → `Steady State`.

:::tip
For more detailed instructions on **Running a Simulations**, click [here](../circuit-simulator/basics/running-a-simulation.md).
:::

The simulation will begin and the **Simulation Status** will appear on the screen. Wait until the simulation has completed at which point **Simulation Stopped** will appear in the bottom left of the status window and the text "*Aquarius simulator completed execution.*" will be show in the screen.

<p align="center">
  <img src={useBaseUrl('img/examples/resistor/16.png')} />
</p>

:::tip
For more detailed instructions on the **Simulation Status** output, click [here](../circuit-simulator/basics/running-a-simulation.md).
:::

### 4.3. Simulation Results
#### 4.3.1. Visualising the Results

Next results visualiser will be used to understand the output of the simulation.

- On theStart Page Click `Open Results Visualiser` (the third option).
- The application will ask the user to select a `.res` results file.
  - The name of the `.res` file will be the same as the `.sol` which has just run (e.g. *pn_diode_iv.res*).
- Then the **Results Visualiser** will open with the selected results file loaded.

<p align="center">
  <img src={useBaseUrl('img/examples/resistor/17.png')} />
</p>

- Click `External Plot` at the top of the results visualiser.
- Set **External Plot Settings**:
  - The file should match your results file name.
  - `X Axis Contact = DEV1.A`
  - `X Axis Variable = Voltage`
  - `Y Axis Contact = DEV1.A`
  - `X Axis Variable = Total Current`
  - Click check box to turn on `Show Tick Marks`
- Click `New Plot` to generate a graph showing **Total Current (A)** at terminal **A** of **DEV1** (the diode) **versus** the **Voltage (V)** at the same terminal. The plot demonstrates a linear relationship between voltage and current, as expected.

<p align="center">
  <img src={useBaseUrl('img/examples/resistor/18.png')} />
</p>

## 5 Conclusion


This example displays how a PN junction diode that is uniformly doped in the P and N region respectively can be modelled and simulated in the Aquarius TCAD environment. The current-voltage graph can be verified from the analytical model bellow:

<p align="center">
  <img src={useBaseUrl('img/examples/pn-diode/02-python-plot3.png')}/>
</p>


- Note: the graphs were implemented using a logarithmic scale.

As we can see, **Aquarius Simulation Result** deviates off from agreeing with the **Ideal Diode Equation**. This deviation is a result of the fact that the Aquarius model considers the series resistance across the diode. This means the resistance across the P region, N region and the depletion region between those two regions is considered in the Aquarius simulation. Using Ohm’s law, as seen in the Resistor example, we see that the higher the voltage, the higher the resistance. This resistance increase causes the drop gradient of the IV graph since the gradient is the reciprocal of the resistance. 



**Reference for us: the offset before the point of crossover between the ideal diode equation and Aquarius simulation in the graph needs to be looked into**




























