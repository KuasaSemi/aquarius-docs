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
| Depth                 | $D$          | $1 \times 10^{-4}$  | cm              | Depth of the resistor (Scaling Factor)   |
| Height                | $H$          | $1 \times 10^{-4}$  | cm              | Vertical thickness of the resistor.      |
| Doping Concentration  | $N_D$        | $1 \times 10^{-16}$ | cm$^{-3}$       | Uniform donor concentration.             |
| Carrier Mobility      | $\mu_n$      | 1000                | cm$^{2}$ /V·s   | Nominal electron mobility (constant).    |

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


### 3.2 Example Calculation
Using the parameter values defined above:
$$
A = H \cdot D = 10^{-4} \cdot 10^{-4} = 10^{-8} cm^{2}
$$

Now substitute into the resistance formula:
$$
R = \frac{1.0 \times 10^{-3}}{(1.6 \times 10^{-19}) \cdot 1000 \cdot (1.0 \times 10^{16}) \cdot (1.0 \times 10^{-8})} = \underline{\mathbf{62.5\text{k}\Omega}}
$$

## 4. Resistor in Aquarius

### 4.1 Creating the Device Model

To create a resistor device model in Aquarius, follow the steps below:

#### 4.1.1. Launch the Device Editor

- Open the Aquarius application.
- On the **Start Page**, three options are available:
  1. New Device Model
  2. New Simulation
  3. Open Results Visualiser
- Click **New Device Model** (the first option).
- The **Device Editor** will open with an empty workspace.

<p align="center">
  <img src={useBaseUrl('img/examples/resistor/02.png')} />
</p>

#### 4.1.2. Define the Device Geometry

<p align="center">
  <img src={useBaseUrl('img/examples/resistor/04.png')} />
</p>

:::tip
For more detailed instructions on **defining regions**, click [here](../device-editor/regions#usage-instructions).
:::

- After drawing the rectangle, the **Exact Coordinates** dialog will open automatically:
  - Set the First Vertex to `(0, 0)`.
  - Set the Second Vertex to `(10, 1)`.
  - Click `OK` to confirm.

<p align="center">
  <img src={useBaseUrl('img/examples/resistor/05.png')} />
</p>

- The **Region Properties** dialog will then open:
  - Set the **Region Material** to `Silicon (Si)`; 
    - Note: the default material properties can be used, so the carrier mobility of `1000` does not need to be changed.
  - Set the **Donor Doping** to `1E+16`.
  - Click `OK` to confirm.

<p align="center">
  <img src={useBaseUrl('img/examples/resistor/06.png')} />
</p>

#### 4.1.3. Define the Device Contacts

With the device geometry and material properties defined, the next step is to **specify electrical contacts** to allow the device to be connected to a circuit for simulation. In this example, the left and right edges of the region will be used to define contacts `A` and `B`, respectively, with the default contact parameters applied.

<p align="center">
  <img src={useBaseUrl('img/examples/resistor/07.png')} />
</p>

:::tip
For more detailed instructions on defining contacts, click [here](../device-editor/contacts#usage-instructions).
:::

#### 4.1.4. Define the Finite Element Mesh

For a simple resistor with uniform material properties and no junctions, a **coarse mesh** is sufficient. It provides a good balance between **simulation accuracy** and **computational efficiency**, avoiding unnecessary refinement that would increase computation time without significant benefit.

Define the **Mesh Construction Grid:**
<p align="center">
  <img src={useBaseUrl('img/examples/resistor/08.png')} />
</p>

  - Set the **Orientation** to `Vertical`.
  - Set the **Interval** to `Fixed`.
  - Set the **Coordinates** to:
    - `X1 = 0`
    - `Y1 = 0`
    - `X2 = 10`
    - `Y2 = 1`
  - Set the **Spacing Between Lines** to `1.0` microns.

:::tip
For more detailed instructions on **defining the mesh construction grid**, click [here](../device-editor/finite-element-mesh/meshing-grid.md#usage-instructions).
:::

<p align="center">
  <img src={useBaseUrl('img/examples/resistor/9.png')} />
</p>

Generate the **Finite Element Mesh:**
- In the Menu Bar, select `Mesh` → `Generate Finite Element Mesh Model`. The Mesh Generation dialog will open.
- No refinement is required for this model, so click `OK` to generate the mesh with default settings.

:::tip
For more detailed instructions on **generating the finite element mesh**, click [here](../device-editor/finite-element-mesh/mesh-generation.md#usage-instructions).
:::

<p align="center">
  <img src={useBaseUrl('img/examples/resistor/10.png')} />
</p>

#### 4.1.5. Save the Device Model

- In the Menu Bar, select `File` → `Save As...`. The Save dialog will open.
- Navigate to the folder you wish to save the device in.
- Specify the filename (e.g. Resistor.sol).
- Click `Save` to store the device model.

<p align="center">
  <img src={useBaseUrl('img/examples/resistor/11.png')} />
</p>

### 4.2 Steady State Simulation

Next the resistor will be used in a simple steady state example.

- On the **Start Page** Click **New Simulation** (the second option).
- The **Circuit Editor** will open with an empty workspace.

<p align="center">
  <img src={useBaseUrl('img/examples/resistor/12.png')} />
</p>

#### 4.2.1 Create Circuit

The circuit to be simulated will need to be created. 

A **device** (the resistor), a **DC Voltage Source** and a **Ground** will be added and connected together.

##### 4.2.1.1 Add Device

<p align="center">
  <img src={useBaseUrl('img/examples/resistor/13.png')} />
</p>

:::tip
For more detailed instructions on **Adding Components**, click [here](../circuit-simulator/basics/adding-components.md).
:::

##### 4.2.1.2 Add DC Voltage Source & Ground

<p align="center">
  <img src={useBaseUrl('img/examples/resistor/14.png')} />
</p>


##### 4.2.1.3 Set DC Voltage Source Properties

<p align="center">
  <img src={useBaseUrl('img/examples/resistor/15.png')} />
</p>

:::tip
For more detailed instructions on **Steady State (DC) Sources**, click [here](../circuit-simulator/sources/steady-state.md).
:::

#### 4.2.2 Run Simulation

<p align="center">
  <img src={useBaseUrl('img/examples/resistor/16.png')} />
</p>

:::tip
For more detailed instructions on **Running a Simulations**, click [here](../circuit-simulator/basics/running-a-simulation.md).
:::

#### 4.2.2 Visualise outputs

The resistance was earlier calculated and is expected to be: $$R = 62.5\,\Omega$$

<p align="center">
  <img src={useBaseUrl('img/examples/resistor/17.png')} />
</p>

### 4.2 Transient Simulation

#### 4.2.1 Add Trasient Voltage Source

#### 4.2.1 Run Simulation