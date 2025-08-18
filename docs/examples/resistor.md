---
sidebar_position: 1
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Resistor

## 1. Overview
In this example project, a simple uniformly doped n-type silicon resistor is modelled and simulated to demonstrate the basic workflow of semiconductor device simulation. An analytical resistance is calculated from fundamental semiconductor relations based on geometry, doping concentration, and mobility. The simulation includes geometry definition, doping profile assignment, physical model selection, contact specification, and bias application. The extracted current is used to compute the simulated resistance, and the result is compared with the analytical expectation. This example serves both as a simple validation case for the Aquarius TCAD environment and as an instructional reference for users implementing basic electrical simulations of passive devices.

## 2. Parameters

<p align="center">
  <img src={useBaseUrl('img/examples/resistor/01.png')} width="600"/>
</p>


| Parameter             | Symbol       | Value               | Unit            | Description                              |
|-----------------------|--------------|---------------------|-----------------|------------------------------------------|
| Length                | $L$          | $1 \times 10^{-3}$  | cm              | Distance between the two contacts.       |
| Depth                 | $D$          | $1 \times 10^{-4}$  | cm              | Depth of the resistor.                   |
| Height                | $H$          | $1 \times 10^{-4}$  | cm              | Vertical thickness of the resistor.      |
| Doping Concentration  | $N_D$        | $1 \times 10^{-16}$ | cm$^{-3}$       | Uniform donor concentration.             |
| Carrier Mobility      | $\mu_n$      | 1360                | cm$^{2}$ /V·s   | Nominal electron mobility (constant).    |

## 3. Analytical Result

### 3.1. Resistance Formula
The analytical resistance of a uniformly doped semiconductor resistor can be derived from Ohm’s law and the definition of resistivity in terms of semiconductor transport properties. The total resistance $R$ between two terminals of a rectangular resistor is given by:

$$
R = \rho \cdot \frac{L}{A}
$$

Where:  
- $R$ = resistance (Ω)  
- $\rho$ = resistivity of doped silicon (Ω·cm)  
- $L$ = length of the resistor (cm)
- $A$ = cross-sectional area = Height × Depth (cm²)

In a doped semiconductor, the resistivity $\rho$ is related to the doping concentration and carrier mobility as follows:
$$
\rho = \frac{1}{q \cdot \mu \cdot N}
$$

Where:  
- $q$ = elementary charge ($\approx$ $1.6 \times 10^{-19}$ C)
- $\mu$ = carrier mobility (cm²/V·s) 
- $N$ = doping concentration (cm⁻³)

Combining the two equations, the resistance becomes:
$$
R = \frac{L}{q \cdot \mu \cdot N \cdot A}
$$


### 3.2. Example Calculation
Using the parameter values defined above:
$$
A = H \cdot D = 10^{-4} \cdot 10^{-4} = 10^{-8} cm^{2}
$$

Now substitute into the resistance formula:
$$
R = \frac{1.0 \times 10^{-3}}{(1.6 \times 10^{-19}) \cdot 1000 \cdot (1.0 \times 10^{16}) \cdot (1.0 \times 10^{-8})} = \underline{\mathbf{62.5\text{k}\Omega}}
$$

## 4. Simulation using Aquarius

### 4.1. Creating the Device Model

To create a resistor device model in Aquarius, follow the steps below.

#### 4.1.1. Launch the Device Editor

- Open the Aquarius application.
- On the Start Page, three options are available:
    - New Device Model
    - New Simulation
    - Open Results Visualiser
- Click `New Device Model` (the first option).
- The **Device Editor** will open with an empty workspace.

<p align="center">
  <img src={useBaseUrl('img/examples/resistor/02.png')} />
</p>

#### 4.1.2. Define the Device Geometry

- In the Menu Bar, select `Define` → `Region` → `Rectangle`.

<p align="center">
  <img src={useBaseUrl('img/examples/resistor/03.png')} />
</p>

- Position the cursor on the canvas to draw a rectangular shape:
  - Left-click to start drawing.
  - Left-click again to finish the shape.

<p align="center">
  <img src={useBaseUrl('img/examples/resistor/04.png')} />
</p>

- After drawing the rectangle, the **Exact Coordinates** dialog will open automatically:
  - Set the First Vertex to `(0, 0)`.
  - Set the Second Vertex to `(10, 1)`.
  - Click `OK` to confirm.

<p align="center">
  <img src={useBaseUrl('img/examples/resistor/05.png')} />
</p>

- The **Region Properties** dialog will then open:
  - Set the Region Material to `Silicon (Si)`; 
    - Note: the default material properties can be used, so the carrier mobility of `1000` does not need to be changed.
  - Set the Donor Doping to `1E+16`.
  - Click `OK` to confirm.

<p align="center">
  <img src={useBaseUrl('img/examples/resistor/06.png')} />
</p>

:::tip
For more detailed instructions on **defining regions**, click [here](../device-editor/regions#usage-instructions).
:::

#### 4.1.3. Define the Device Contacts

With the device geometry and material properties defined, the next step is to **specify electrical contacts** to allow the device to be connected to a circuit for simulation. In this example, the left and right edges of the region will be used to define contacts `A` and `B`, respectively, with the default contact parameters applied.

<p align="center">
  <img src={useBaseUrl('img/examples/resistor/07.png')} />
</p>

Define two contacts, `A` on the top of the device and `B` on the bottom as can been seen in the image above. 

- Define the first contact (A):
  1. From the menu, select `Define` → `Contact`.
  2. Move the cursor over the left geometric edge. When the edge highlights in green and the cursor changes to indicate a selectable element, `Left-click` to select it.
  3. `Right-click` anywhere to open the Contact Properties dialog. Use this dialog to set the contact's properties.
  4. In the General section, set `Name` to **A**, leave all other properties at their default values.
  5. Click `OK`.

- Define the second contact (B), repeat steps 1–5 above, but instead:
  1. Select the bottom geometric edge.
  1. In the Contact Properties window, set `Name` to **B** and `Colour` to **green**.
  1. Click `OK`.

:::tip
For more detailed instructions on defining contacts, click [here](../device-editor/contacts#usage-instructions).
:::

#### 4.1.4. Define the Mesh Construction Lines
An initial grid is defined by specifying a set of vertical and horizontal lines. Anywhere these lines intersect with each other or with a region boundary, a point is inserted into the mesh.

For a simple resistor with uniform material properties and no junctions, a coarse mesh is sufficient. It provides a good balance between simulation accuracy and computational efficiency. Since the resistor is uniform along the x-direction (its properties do not change with x), we only need to define horizontal grid lines.

- In the menu Menu Bar select `Mesh` → `Define Mesh Construction Grid`. The **Mesh Construction Grid** window will open.
<p align="center">
  <img src={useBaseUrl('img/examples/resistor/08.png')} />
</p>

- In the **Mesh Construction Grid** window click `Add`.
- The **Mesh Grid Lines** window will open. Set the below properties: 
  - Set the **Orientation** to `Horizontal`.
  - Set the **Interval** to `Fixed`.
  - Set the **Coordinates** of the box that will contain the mesh line to:
    - `X1 = 0`
    - `X2 = 1`
    - `Y1 = 0`
    - `Y2 = 10`
  - Set the **Spacing Between Lines** to `1.0` microns.
- Click `OK`

:::tip
For more detailed instructions on **defining the mesh construction grid**, click [here](../device-editor/finite-element-mesh/meshing-grid.md#usage-instructions).
:::

#### 4.1.5. Generating the Finite Element Mesh
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
- Specify the filename (e.g. *resistor.sdm*).
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

A circuit must be designed before simulation can begin. A device (the resistor), a DC Voltage Source and a Ground will be added to the circuit editor and connected together.

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
  - `End Voltage (V) = 100`
  - `Step (V) = 1`
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
- Specify the filename (e.g. *resistor_iv.sol*).
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
  - The name of the `.res` file will be the same as the `.sol` which has just run (e.g. *resistor_iv.res*).
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
- Click `New Plot` to generate a graph showing **Total Current (A)** at terminal **A** of **DEV1** (the resistor's name) **versus** the **Voltage (V)** at the same terminal. The plot demonstrates a linear relationship between voltage and current, as expected.

<p align="center">
  <img src={useBaseUrl('img/examples/resistor/18.png')} />
</p>

#### 4.4.2. Analysing the Results

Using Ohm's law the resistance $R$ through the device at a given voltage $V$ and current $I$ can be calculated. Taking the data point at 100V.

$$
R = \frac{V}{I} = \frac{100V}{1.6mA} = \frac{100}{1.6 \times 10^{-3}} = 62.5k\Omega
$$

This matches the previously calculated resistance of $$62.5k\Omega$$, therefore the analytical model matches the TCAD simulation.

This concludes the Resistor example tutorial.

## 5. Conclusion
This example demonstrated how to model and simulate a simple uniformly doped silicon resistor in the Aquarius TCAD environment. The analytical resistance, derived from fundamental semiconductor relations, was shown to match the simulated result within numerical accuracy. This validates both the device modelling workflow and the simulator’s accuracy, while also serving as a clear instructional case for users learning to set up and analyse basic passive devices.